import { Avatar, } from "@material-ui/core";
import React from "react";
import './ContactRow.css'
const ContactRow = () => {
  return (
    <div className="contactRow">
        <Avatar src="https://scontent.fdel25-1.fna.fbcdn.net/v/t1.6435-9/s960x960/216958639_1273869343010024_2627740433350928421_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=nfXI3hdsxO0AX_Uwz9a&_nc_ht=scontent.fdel25-1.fna&oh=5181ed00c52665171c2b4ae0a6711593&oe=61290FBA" />
        <h3>Shivam Singh</h3>
    </div>
  );
};

export default ContactRow;
