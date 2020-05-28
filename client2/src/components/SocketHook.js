import React, { useState, useEffect } from 'react';
import querystring from 'query-string';

// useeffect allows you to set up side effects for your components (similar to componentDidMount (first render) and componentDidUpdate (every render after))
// we need to cleanup (componentDidUnmount) after -- disconnect in our case

// socket.io logic
import io from 'socket.io-client';

let socket;

const ReturnRoom = (location) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        // first we need to retrieve the name and room name that users entered when joining
        const {name, room} = querystring.parse(location.search); //location.search returns a url 

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        // console.log(socket);
        let username = name;

        socket.emit('joinRoom', {username, room}, () => {
            console.log('joined room');
        });

        socket.on('usersInRoom', ({users}) => {
            setUsers(users);
            console.log(users);
        });


    }, [ENDPOINT, location.search]);

    return ({name, room});
};

const UsersHook = (location) => {
    
}

export default ReturnRoom;



