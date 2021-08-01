import React from "react";
import "./HomeMiddle.css";
import { Avatar, Button } from "@material-ui/core";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import StoryRow from "./StoryRow";
const HomeMiddle = () => {
  return (
    <div className="homeMiddle">
      <div className="homeMiddle__content">
        <div className="homeMiddle__contentButton">
          <Button>
            <p>Home</p>
          </Button>
          <Button>
            <p>Favourites</p>
          </Button>
          <Button>
            <p>Recent</p>
          </Button>
        </div>
        <Button>
          <SyncAltIcon />
        </Button>
      </div>

      <div className="homeMiddle__story">
        <StoryRow
          url="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/is_my_cat_normal_slideshow/1800x1200_is_my_cat_normal_slideshow.jpg"
          avatar="https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6d246ca192c6f0c8cf3bdc40f8a43b63"
          name="shivam"
        />
        <StoryRow
          url="https://scontent.fagr1-1.fna.fbcdn.net/v/t1.6435-9/s960x960/216958639_1273869343010024_2627740433350928421_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=nfXI3hdsxO0AX8-JHSX&_nc_ht=scontent.fagr1-1.fna&oh=44497fb184c7cd1f554114b784b478bc&oe=612D043A"
          avatar="https://scontent.fagr1-1.fna.fbcdn.net/v/t1.6435-9/118798741_1066973410366286_2052277769102364830_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=l9zySDztvIEAX9Hf59Z&_nc_ht=scontent.fagr1-1.fna&oh=86b2d6ab55622bea9782470c78f4f99d&oe=612E39E4"
          name="shivam singh"
        />
      </div>
      <div className="homeMiddle__postContainer">
        <div className="homeMiddle__postContainer__title">
          <Avatar src="https://scontent.fagr1-1.fna.fbcdn.net/v/t1.6435-9/118798741_1066973410366286_2052277769102364830_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=l9zySDztvIEAX9Hf59Z&_nc_ht=scontent.fagr1-1.fna&oh=86b2d6ab55622bea9782470c78f4f99d&oe=612E39E4" />
          <input type="text" placeholder="What's on your mind , shivam ?" />
        </div>
        <div className="homeMiddle__postContainer__button">
          <Button>
            <VideocamIcon />
            <p>Live Video</p>
          </Button>
          <Button>
            <PhotoLibraryIcon/>
            <p>Photo/Video</p>
          </Button>
          <Button>
            <VideocamIcon />
            <p>Live Video</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
