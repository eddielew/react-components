import React from "react";
import "./ContactFormCard.css";

function ContactFormCard(props) {
  return (
    <>
      <div className="contact-form card">
        <h2>Request For Demo</h2>
        <form>
          <div className="form-control">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              required
            />
          </div>
          <div className="form-control">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <input type="submit" value="Send" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
}

export default ContactFormCard;
