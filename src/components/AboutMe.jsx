import React, { useEffect, useRef, useState } from "react";
import logo from "./../assets/image/logo.webp";

export default function AboutMe() {
  const speechBubbleRef = useRef(null); // speech-bubble'ди байкоо үчүн
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (speechBubbleRef.current) {
        const rect = speechBubbleRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setScrolled(true); // Анимацияны активдештирүү
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <h1 className="title">About Me</h1>
      <div className="profile-section">
        <div className="profile-photo">
          <img src={logo} alt="Profile" />
        </div>
        <div className="profile-details">
          <div
            ref={speechBubbleRef}
            className={`speech-bubble ${scrolled ? "scrolled" : ""}`}
          >
            <p>Hi There</p>
          </div>
          <p className="description">
            In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at
            sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
            efficitur sagittis, urna est ultricies eros, ac porta sem turpis
            quis leo. Nulla in feugiat elit.
          </p>
          <div className="contact-info">
            <div>
              <p>
                <strong>Name:</strong> Jonathan Doe
              </p>
              <p>
                <strong>Email:</strong> hello@example.com
              </p>
            </div>
            <div>
              <p>
                <strong>Phone:</strong> +1 908-736-1801
              </p>
              <p>
                <strong>Twitter:</strong> freelancer9
              </p>
            </div>
          </div>
          <div className="buttons">
            <button className="contact-button">Contact Me</button>
            <button className="cv-button">Download CV</button>
          </div>
        </div>
      </div>
      <div className="Together">
        <h3>Let’s Work Together On Your Next Project!</h3>
        <div
            className="speech-bubble reds" 
          >
            <p>Hire Me Now!</p>
          </div>
      </div>
    </div>
  );
}
