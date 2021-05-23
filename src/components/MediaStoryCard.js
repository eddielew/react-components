import React from "react";
import "./MediaStoryCard.css";
import faker from "faker";

function MediaStoryCard(props) {
  return (
    <div className="media-story-card-container">
      <h5>Read Next</h5>
      <div className="media-story-card" href="#">
        <span className="item1">Read Next</span>
        <span className="item2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          error.
        </span>
        <img className="item3" src={faker.image.image()} />
      </div>
      <div className="media-story-card" href="#">
        <span className="item1">Read Next</span>
        <span className="item2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          error.
        </span>
        <img className="item3" src={faker.image.image()} />
      </div>
      <div className="media-story-card" href="#">
        <span className="item1">Read Next</span>
        <span className="item2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          error.
        </span>
        <img className="item3" src={faker.image.image()} />
      </div>
      <div className="media-story-card" href="#">
        <span className="item1">Read Next</span>
        <span className="item2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
          error.
        </span>
        <img className="item3" src={faker.image.image()} />
      </div>
    </div>
  );
}

export default MediaStoryCard;
