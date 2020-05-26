import React from 'react';
import Message from './Message';

const Test_Data = [
  {
    senderId: 'thaddious',
    text: 'Hey, how is it going?'
  },
  {
    senderId: 'shrek',
    text: 'Great! How about you?'
  },
  {
    senderId: 'thaddious',
    text: 'Good to hear! I am great as well'
  }
];

const MessageList = () => {
  return(
    <div className="message-list">
      {Test_Data.map( (message, index) => {
        return(
          <Message key={index} username={message.senderId} text={message.text} />
        )
      })}
    </div>
  )
};

export default MessageList;