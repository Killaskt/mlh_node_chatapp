import React, { useState, useEffect } from 'react';
import querystring from 'query-string';
import ReturnRoom from '../SocketHook';


import './chat.css';

// useeffect allows you to set up side effects for your components (similar to componentDidMount (first render) and componentDidUpdate (every render after))
// we need to cleanup (componentDidUnmount) after -- disconnect in our case

// socket.io logic
// import io from 'socket.io-client';

let socket;

// location comes from the react router and it gives us a prop called location

const Chat = ({location}) => {

    // const [name, setName] = useState('');
    // const [room, setRoom] = useState('');
    // const ENDPOINT = 'localhost:5000';

    // // runs when component renders
    // useEffect(() => {
    //     // first we need to retrieve the name and room name that users entered when joining
    //     const {name, room} = querystring.parse(location.search); //location.search returns a url 

    //     socket = io(ENDPOINT);

    //     setName(name);
    //     setRoom(room);

    //     // console.log(socket);
    //     let username = name;

    //     socket.emit('joinRoom', {username, room}, () => {
    //         console.log('joined room');
    //     });

    //     socket.on('usersInRoom', ({users}) => {
    //         console.log(users);
    //     } )

    // }, [ENDPOINT, location.search]); // react rerenders only if these two vars stored in the array change; therefore fixing our double fire problem

    const {user, room} = ReturnRoom(location);

    return (
        <div className="roomName">
            <h1>{room}</h1>
        </div>
    );
}

export default Chat;