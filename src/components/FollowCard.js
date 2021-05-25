import React from "react";
import "./FollowCard.css";

function FollowCard(props) {
  return (
    <div className="follow-card">
      <div className="close">
        <i className="fas fa-times"></i>
      </div>
      {props.children}
      <div className="follow-card-btn">Follow</div>
    </div>
  );
}

export default FollowCard;
