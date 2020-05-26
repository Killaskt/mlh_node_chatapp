const users = []; // user database handled in memory

// join user to chat
function userJoin(id, username, room) {
    const user = {id, username, room};
    console.log(user);
    users.push(user);
    console.log('before before times: ', users);
    return user;
}

//get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// user leaves chat
function userLeave(id) {
    console.log('before times', users)
    const index = users.findIndex(user => user.id === id);
    console.log(index, ' ', id);
    if(index !== -1) {
        return users.splice(index, 1)[0]; //removes user from that room count
    }
}

// get all users in a room
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}


module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
};