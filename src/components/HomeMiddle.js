import React from "react";
import "./HomeMiddle.css";
import { Button } from "@material-ui/core";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import storyRowData from "../components/storyRowData";

import StoryRow from "./StoryRow";
import PostContainer from "./PostContainer";
import Room from "./Room";
import Post from "./Post";
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
        {storyRowData.map((props) => {
          return (
            <StoryRow
              key={props.id}
              url={props.url}
              avatar={props.avatar}
              name={props.name}
            />
          );
        })}
      </div>
      <div className="homeMiddle__postContainer">
        <PostContainer />
      </div>
      <div className="homeMiddle__roomContainer">
        <Room />
      </div>
      <div className="homeMiddle__post">
        <Post url="https://i.ndtvimg.com/i/2018-01/shah-rukh-khan-twitter_650x400_71516679978.jpg" name="Shaharukh khan"/>
        <Post url="https://scontent.fagr1-1.fna.fbcdn.net/v/t1.6435-9/s960x960/216958639_1273869343010024_2627740433350928421_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=nfXI3hdsxO0AX-yZkVW&_nc_ht=scontent.fagr1-1.fna&oh=8fd57a08eadb380484275228bd519195&oe=612D043A" name="shivam"/>
        <Post url="https://scontent.fagr1-2.fna.fbcdn.net/v/t1.6435-9/46702075_622069098190055_6690333585624268800_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8EVuQ2op-uAAX8Rfy0A&_nc_ht=scontent.fagr1-2.fna&oh=b8a48f0d63a7066e7e671b59bb4b1582&oe=612CE9DE" name="shivam singh"/>
      </div>
    </div>
  );
};

export default HomeMiddle;
