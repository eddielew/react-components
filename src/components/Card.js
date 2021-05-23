import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div>
      <div className="grid">
        <article className="article">
          <img src={props.cardPicture} alt="" />
          <div className="text">
            <h3>Card 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              officiis, corporis magni architecto minima unde!
            </p>
            <button>Button 1</button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Card;
