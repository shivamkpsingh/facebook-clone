import React from "react";
import "./Navbar.css";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleIcon from "@material-ui/icons/People";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Button } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import { useStateValue } from "./StateProvider";
const Navbar = () => {
  const[{user},dispatch]=useStateValue()
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/180px-Facebook_f_logo_%282019%29.svg.png" />
        <div className="navbar__Search">
          <SearchIcon className="navbar__SearchIcon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="navbar__middle">
        <Button>
          <HomeIcon/>
        </Button>
        <Button>
          <LiveTvIcon />
        </Button>
        <Button>
          <StorefrontIcon />
        </Button>
        <Button>
          <PeopleIcon />
        </Button>
        <Button>
          <SportsEsportsIcon />
        </Button>
      </div>
      <div className="navbar__right">
        <Button>
          <Avatar src="https://scontent.fdel25-1.fna.fbcdn.net/v/t1.6435-9/s960x960/216958639_1273869343010024_2627740433350928421_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=nfXI3hdsxO0AX_Uwz9a&_nc_ht=scontent.fdel25-1.fna&oh=5181ed00c52665171c2b4ae0a6711593&oe=61290FBA" />
          <h3 className="navbar__rightName">{user.displayName}</h3>
        </Button>
        <Button>
          <AppsIcon />
        </Button>
        <Button>
          <ChatIcon />
        </Button>
        <Button>
          <NotificationsIcon />
        </Button>
        <Button>
          <ArrowDropDownSharpIcon />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
