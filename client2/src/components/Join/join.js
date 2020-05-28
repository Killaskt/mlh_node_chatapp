import React, { useState } from 'react';
import { Link } from 'react-router-dom'; //used to link to our slash path

import './join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    // Link tag using the 'to' attribute /*passes data through our URL*/

    const onClickName = e => {setName(e.target.value);};
    const onClickRoom = e => {setRoom(e.target.value);};

    return (
        <div className="join-outer-container">
            <div className="join-inner-container">
                <h1 className="heading">Join</h1>
                <div><input placeholder="" className="joinInput" type="text" onChange={onClickName}></input></div>
                <div><input placeholder="" className="joinInput mt-20" type="text" onChange={onClickRoom}></input></div>
                <Link onCLick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}> 
                    <button className="btn mt-20" type="submit">Join Room</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;