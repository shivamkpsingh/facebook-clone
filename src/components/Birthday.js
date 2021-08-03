import React from "react";
import "./Birthday.css";
import CakeIcon from "@material-ui/icons/Cake";
import ClearIcon from "@material-ui/icons/Clear";
import { Button } from "@material-ui/core";
const Birthday = () => {
  return (
    <div className="birthday">
      <div className="birthday__head">
        <div className="birthday__icon">
          <CakeIcon />
          <p>Birthdays</p>
        </div>
        <Button>
          <ClearIcon />
        </Button>
      </div>
      <p>
        <span className="birthday__span">shivam singh</span> and
        <span className="birthday__span">5 others</span> have their birthdays
        today.
      </p>
    </div>
  );
};

export default Birthday;
