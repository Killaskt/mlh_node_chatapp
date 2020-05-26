import React from 'react';

const NewRoomForm = () => {
  return(
    <div className="new-room-form">
      <form>
        <input type="text" placeholder="New Room" required/>
        <button id="create-room-button">+</button>
      </form>
    </div>
  );
};

export default NewRoomForm;