import React from "react";
import Birthday from "./Birthday";
import "./HomeRight.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import ContactRow from "./ContactRow";
const HomeRight = () => {
  return (
    <div className="homeRight">
      <div className="homeRight__birthdayBox">
        <Birthday />
      </div>
      <hr />
      <div className="homeRight__contact">
        <div className="homeRight__contactHeader">
          <h2>Contacts</h2>
          <div className="homeRight__contactHeaderRight">
            <Button>
              <VideoCallIcon />
            </Button>
            <Button>
              <SearchIcon />
            </Button>
            <Button>
              <MoreHorizIcon />
            </Button>
          </div>
        </div>

        <ContactRow/>
        <ContactRow/>
        <ContactRow/>
        <ContactRow/>
      </div>
    </div>
  );
};

export default HomeRight;
