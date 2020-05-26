import React, {useState, Component} from 'react';
import Message from './Message';
import MessageList from './MessageList';
import NewRoomForm from './NewRoomForm';
import RoomList from './RoomList';
import SendMessageForm from './SendMessageForm';
import '../App.css';
import { subscribeToTimer, getRoomName } from '../api/socketRes';

const App = (props) => {

  const dienamicc = "shhomlsndl"
  const currentRoom = getRoomName();
  console.log('data', getRoomName());

  //const [messages, setMessages] = useState([]);

  //when a new message is created call
  //setMessages((message) => {messages.concat(message)});

  subscribeToTimer();

  return (
    <div className="app">
      <RoomList name={currentRoom} />
      <MessageList />
      <SendMessageForm />
      <NewRoomForm />
    </div>
  );
};

export default App;