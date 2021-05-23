import React from "react";
import "./NewElement.css";
import faker from "faker";

function NewElement(props) {
  return (
    <>
      <h1>Hello</h1>
      <p>hoho</p>
      <div>
        <div>
          <img src={faker.image.avatar()} />
        </div>

        <h1>Hello</h1>
      </div>
      <div className="hero3">
        <h1>Hello3</h1>
      </div>
    </>
  );
}

export default NewElement;
