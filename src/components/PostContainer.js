import React from "react";
import "./PostContainer.css";
import { Avatar, Button } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
const PostContainer = () => {
  return (
    <div className="postContainer">
      <div className="homeMiddle__postContainer__title">
        <Avatar src="https://scontent.fagr1-1.fna.fbcdn.net/v/t1.6435-9/118798741_1066973410366286_2052277769102364830_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=l9zySDztvIEAX9Hf59Z&_nc_ht=scontent.fagr1-1.fna&oh=86b2d6ab55622bea9782470c78f4f99d&oe=612E39E4" />
        <input type="text" placeholder="What's on your mind , shivam ?" />
      </div>
      <div className="homeMiddle__postContainer__button">
        <Button>
          <VideocamIcon className="video__icon"/>
          <p>Live Video</p>
        </Button>
        <Button>
          <PhotoLibraryIcon className="gallery__icon" />
          <p>Photo/Video</p>
        </Button>
        <Button>
          <InsertEmoticonIcon className="smily__icon" />
          <p>Feeling/Activity</p>
        </Button>
      </div>
    </div>
  );
};

export default PostContainer;
