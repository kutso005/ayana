import React, { useState } from "react";

export default function Header({ scrollToSection, activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (section) => {
    scrollToSection(section); 
    setIsMobileMenuOpen(false); 
  };

  const getActiveClass = (section) => (activeSection === section ? "active" : "");

  return (
    <div id="header">
      <div className="abs">S</div>

      <div className="container desktop-menu">
        <div className="header">
          <p className={getActiveClass("home")} onClick={() => scrollToSection("home")}>
            Home
          </p>
          <p className={getActiveClass("services")} onClick={() => scrollToSection("services")}>
            Services
          </p>
          <p className={getActiveClass("about")} onClick={() => scrollToSection("about")}>
            About Me
          </p>
          <p className={getActiveClass("skills")} onClick={() => scrollToSection("skills")}>
            Skills
          </p>
          <p className={getActiveClass("portfolio")} onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </p>
          <p className={getActiveClass("contact")} onClick={() => scrollToSection("contact")}>
            Contact
          </p>
        </div>
      </div>

      <div className="burger-menu" onClick={toggleMobileMenu}>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <p className={getActiveClass("home")} onClick={() => closeMobileMenu("home")}>
          Home
        </p>
        <p className={getActiveClass("services")} onClick={() => closeMobileMenu("services")}>
          Services
        </p>
        <p className={getActiveClass("about")} onClick={() => closeMobileMenu("about")}>
          About Me
        </p>
        <p className={getActiveClass("skills")} onClick={() => closeMobileMenu("skills")}>
          Skills
        </p>
        <p className={getActiveClass("portfolio")} onClick={() => closeMobileMenu("portfolio")}>
          Portfolio
        </p>
        <p className={getActiveClass("contact")} onClick={() => closeMobileMenu("contact")}>
          Contact
        </p>
      </div>
    </div>
  );
}
