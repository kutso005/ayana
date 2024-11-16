import React from "react";
import logo from "./../assets/image/logo.webp";
export default function AboutMe() {
  return (
    <div className="container">
      <h1 className="title">About Me</h1>
      <div className="profile-section">
        <div className="profile-photo">
          <img src={logo} alt="Profile" />
        </div>
        <div className="profile-details">
          <div className="speech-bubble">
            <p>Hi There</p>
          </div>
          <p className="description">
            In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at
            sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
            efficitur sagittis, urna est ultricies eros, ac porta sem turpis
            quis leo. Nulla in feugiat elit.
          </p>
          <div className="contact-info">
            <p>
              <strong>Name:</strong> Jonathan Doe
            </p>
            <p>
              <strong>Email:</strong> hello@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 908-736-1801
            </p>
            <p>
              <strong>Twitter:</strong> freelancer9
            </p>
          </div>
          <div className="buttons">
            <button className="contact-button">Contact Me</button>
            <button className="cv-button">Download CV</button>
          </div>
        </div>
      </div>
      <div className="Together">
        <h3>Let’s Work Together On Your Next Project!</h3>
      </div>
    </div>
  );
}
