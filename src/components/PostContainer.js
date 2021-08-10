import React, { useState } from "react";
import "./PostContainer.css";
import { Avatar, Button } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { storage, db } from "./firebase";
import firebase  from "firebase";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 390,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
const PostContainer = () => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const [progress, setProgress] = useState("");
  const [image, setImage] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const postData = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
       (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    },
    (error)=>{
      alert(error.message)
    },
    ()=>{
      storage
      .ref('images')
      .child(image.name)
      .getDownloadURL()
      .then(url=>{
        db.collection('posts').add({
          imageUrl:url,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setProgress(0)
        setImage(null)
        if(progress===0){
          setOpen(false)
          }
      })
    }
  
    );
    
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="postBox">
        <h2>Create Post</h2>
        <div className="postBox__profile">
          <Avatar />
          <div className="postBox__profileDetails">
            <h2>{user.displayName}</h2>
            <p>{new Date().toISOString().slice(0, 10)}</p>
          </div>
        </div>
        <div className="postBox__input">
          <label for="img">Click me to upload image</label>
          <input
            type="file"
            name="file"
            id="img"
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </div>
        <progress
          className="postBox__progress"
          value={progress}
          max="100"
        ></progress>
        <button onClick={postData}>Post</button>
      </div>
    </div>
  );
  return (
    <div className="postContainer">
      <div className="homeMiddle__postContainer__title">
        <Avatar src="https://scontent.fagr1-1.fna.fbcdn.net/v/t1.6435-9/118798741_1066973410366286_2052277769102364830_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=l9zySDztvIEAX9Hf59Z&_nc_ht=scontent.fagr1-1.fna&oh=86b2d6ab55622bea9782470c78f4f99d&oe=612E39E4" />
        <input type="text" placeholder="What's on your mind , shivam ?" />
      </div>
      <div className="homeMiddle__postContainer__button">
        <Button>
          <VideocamIcon className="video__icon" />
          <p>Live Video</p>
        </Button>
        <div>
          <Button onClick={handleOpen}>
            <PhotoLibraryIcon className="gallery__icon" />
            <p>Photo/Video</p>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>

        <Button>
          <InsertEmoticonIcon className="smily__icon" />
          <p>Feeling/Activity</p>
        </Button>
      </div>
    </div>
  );
};

export default PostContainer;
