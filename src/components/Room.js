import React from "react";
import "./Room.css";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import roomData  from "./roomData";
const Room = () => {
  return (
    <div className="room">
      <div className="room__button">
        <Button>
          <VideoCallIcon />
          <p>Create Room</p>
        </Button>
      </div>
      <div className="room__avatar">
       {
           roomData.map((props)=>{
               return(
                   <Avatar className="avatar" src={props.url}/>
               )
           })
       }
      </div>
    </div>
  );
};

export default Room;
