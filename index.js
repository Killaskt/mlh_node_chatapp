var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const PORT = 3000;




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/thaddg', (req, res) => {
    res.send('<img src="https://media.discordapp.net/attachments/708421243392622625/710610359144153128/k6jbjcxo1ky41.gif"></img>')
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
});

http.listen(PORT, () => console.log(`listening on *:${PORT}`));
