import React from "react";
import "./HomeMiddle.css";
import { Button } from "@material-ui/core";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import storyRowData from "../components/storyRowData";

import StoryRow from "./StoryRow";
import PostContainer from "./PostContainer";
import Room from "./Room";
import Post from "./Post";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
const HomeMiddle = () => {
  const [posts, setPosts] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);
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
        <PostContainer  />
      </div>
      <div className="homeMiddle__roomContainer">
        <Room />
      </div>
      <div className="homeMiddle__post">
        {posts.map(({id, post }) => (
          <Post
            key={id}
            imageUrl={post.imageUrl}
            name={user.displayName}
            timestamp={post.timestamp}
          />
        ))}
        {/* <Post
          url="https://i.ndtvimg.com/i/2018-01/shah-rukh-khan-twitter_650x400_71516679978.jpg"
          name="shaharukh khan"
        /> */}
      </div>
    </div>
  );
};

export default HomeMiddle;
