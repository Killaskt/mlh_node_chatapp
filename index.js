const express = require('express');
const path = require('path');

app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const admin = 'admin';

const formatMessage = require('./utils/message.js');
const {userJoin, getCurrentUser, getRoomUsers, userLeave} = require('./utils/users.js');


const PORT = 3000 || process.env.PORT;


//get html pages ... may not be here long
app.use(express.static(path.join(__dirname + '/public')));



app.get('/thaddg', (req, res) => {
    res.send('<img min-height=1000px src="https://media.discordapp.net/attachments/708421243392622625/710610359144153128/k6jbjcxo1ky41.gif"></img>');
});

// run when client connects
io.on('connection', socket => {
    // console.log('new connection!');

    socket.on('joinRoom', ({username, room}) => {
        // console.log(data.username, data.room);
        // var yo = data.username;
        
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);
        // console.log(socket.id)

        socket.emit('message', formatMessage(admin,`Welcome to the ${room}!`)); // message caught in client side js

        // broadcast when user joins chat
        socket.broadcast.to(user.room).emit('message', formatMessage(admin,`${username} has joined the chat`)); // broadcast to all clients except for the user connecting

        // send users and room info
        io.to(user.room).emit('usersInRoom', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    // Listen for messages
    socket.on('chatMessage', data => {
        // console.log(data);
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, data)); // sends the msg (data) to everyone (due to io.)
    });

    // runs when client disconnects (io means it emits to everyone)
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        console.log('somethings happening', socket.id);
        console.log(user)

        if(user) {
            console.log('somethings good');
            io.to(user.room).emit("message", formatMessage(admin, `${user.username} has left the chat`));

                    // send users and room info
            io.to(user.room).emit('usersInRoom', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }

    });
    
});

// socket.io uses this standard
// io.emit('some server', {someProperty: 'some value', otherProperty: 'other value'});
server.listen(PORT, () => console.log(`listening on *:${PORT}`));
