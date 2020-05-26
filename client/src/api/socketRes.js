import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:5000');


function subscribeToTimer() {
    socket.emit('joinRoom', {username: 'hello',room: 'mofo'});
};
  
function getRoomName() {
  socket.on('usersInRoom', (data) => data);
};

export { subscribeToTimer, getRoomName };