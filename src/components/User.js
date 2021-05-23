import React from "react";
import "./User.css";

function User(props) {
  return (
    <div className="user">
      <img
        className="img-avatar"
        src={props.userPicture}
        alt="user avatar"
      ></img>
      <div className="name">{props.userName}</div>
    </div>
  );
}

export default User;
