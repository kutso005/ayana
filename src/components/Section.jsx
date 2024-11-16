import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Section() {
  const texts = ["Creative Person", "Designer", "Photographer"];
  const [currentText, setCurrentText] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("fade-in");
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
      setAnimationClass("fade-in");
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimationClass(""), 1000);
    return () => clearTimeout(timeout);
  }, [currentText]);

  return (
    <div id="section">
      <div className="container">
        <div className="iscon">
          <FaTelegram color="#f26c4f" size={30}/>
          <IoLogoWhatsapp color="#f26c4f" size={30}/>
          <FaFacebookSquare color="#f26c4f" size={30}/>
          <FaInstagramSquare color="#f26c4f" size={30}/>
        </div>
        <div className="section">
          <h1 className="name">I am Jonathan Doe</h1>
          <h3 className="borders">
            <span className={`animations ${animationClass}`}>
              {texts[currentText]}
            </span>
          </h3>
          <div className="down">
            <FaArrowDown size={20} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
}
