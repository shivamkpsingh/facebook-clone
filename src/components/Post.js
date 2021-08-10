import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import GifIcon from "@material-ui/icons/Gif";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
const Post = ({ imageUrl,name,timestamp}) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerLeft">
          <Avatar src={imageUrl} />
          <div className="post__headerLeftTitle">
            <h2>{name}</h2>
            <span>{new Date(
              timestamp?.toDate()
            ).toLocaleTimeString()}</span>
          </div>
        </div>
        <Button>
          <MoreHorizIcon />
        </Button>
      </div>
      <img src={imageUrl} alt="" />
      <div className="post__action">
        <Button>
          <ThumbUpAltIcon />
          <p>Like</p>
        </Button>
        <Button>
          <ChatBubbleOutlineIcon />
          <p>comment</p>
        </Button>
        <Button>
          <ScreenShareIcon />
          <p>share</p>
        </Button>
      </div>
      <div className="post__commentBox">
        <Avatar src={imageUrl} />
        <div className="post__commentBoxInput">
          <input type="text" placeholder="Write a comment" />
          <InsertEmoticonIcon />
          <CameraAltIcon />
          <GifIcon />
          <PhotoLibraryIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
