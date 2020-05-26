import React from 'react';

const SendMessageForm = () => {
  return(
    <div className="send-message-form">
      <form>
        <input type="text" placeholder="Enter Message" required/>
        <button>Send</button>
      </form>
    </div>
  )
};

export default SendMessageForm;