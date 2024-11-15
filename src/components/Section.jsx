import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";

export default function Section() {
  const texts = ["Creative Person", "Designer", "Photographer"];
  const [currentText, setCurrentText] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Add fade-in animation class when text changes
    setAnimationClass("fade-in");
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
      setAnimationClass("fade-in");
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimationClass(""), 1000)
    return () => clearTimeout(timeout);
  }, [currentText]);

  return (
    <div id="section">
      <div className="container">
        <div className="section">
          <h1 className="name">I am Jonathan Doe</h1>
          <h3 className="borders">
            <span className={`animations ${animationClass}`}>
              {texts[currentText]}
            </span>
          </h3>
          <div className="down">
          <FaArrowDown size={20} color="#fff"/>

          </div>
        </div>
      </div>
    </div>
  );
}
