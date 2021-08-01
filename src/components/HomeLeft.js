import React from "react";
import "./HomeLeft.css";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import TvIcon from '@material-ui/icons/Tv';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeLeftRow from "./HomeLeftRow";

const HomeLeft = () => {
  return (
    <div className="homeLeft">
      <HomeLeftRow Icon={Avatar} title="shivam singh"/>
      <HomeLeftRow Icon={FavoriteBorderIcon} title="Covid-19 Information Centre"/>
      <HomeLeftRow Icon={PeopleAltIcon} title="Friends"/>
      <HomeLeftRow Icon={GroupAddIcon} title="Groups"/>
      <HomeLeftRow Icon={LocalMallIcon} title="Marketplace"/>
      <HomeLeftRow Icon={TvIcon} title="Watch"/>
      <HomeLeftRow Icon={CalendarTodayIcon} title="Events"/>
      <HomeLeftRow Icon={WatchLaterIcon} title="Memories"/>
      <HomeLeftRow Icon={BookmarkIcon} title="Saved"/>
      <HomeLeftRow Icon={ExpandMoreIcon} title="See more"/>
      <HomeLeftRow Icon={ExpandMoreIcon} title="See more"/>
      <HomeLeftRow Icon={ExpandMoreIcon} title="See more"/>
      <HomeLeftRow Icon={ExpandMoreIcon} title="See more"/>
    </div>
  );
};

export default HomeLeft;
