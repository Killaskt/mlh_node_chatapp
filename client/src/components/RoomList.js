import React from 'react';

const RoomList = (props) => {

  return(
    <div className="room-list">
      <div className="help-text" id="room-name">{props.name}</div>
    </div>
  )
};

export default RoomList;