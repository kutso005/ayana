import React, { useRef, useState, useEffect } from "react";
import "./assets/styles/App.css";
import "./assets/styles/media.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Section from "./components/Section";
import Services from "./components/Services";
import Skills from "./components/Skils";
import Testimonials from "./components/Testimonials";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef(null),
    services: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    portfolio: useRef(null),
    clients: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "20px",
      threshold: 0.6, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute("id");
          setActiveSection(section);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />
      <div id="home" ref={sectionRefs.home}>
        <Section />
      </div>
      <div id="services" ref={sectionRefs.services}>
        <Services />
      </div>
      <div id="about" ref={sectionRefs.about}>
        <AboutMe />
      </div>
      <div id="skills" ref={sectionRefs.skills}>
        <Skills />
      </div>
      <div id="portfolio" ref={sectionRefs.portfolio}>
        <Portfolio />
      </div>
      <div id="clients" ref={sectionRefs.clients}>
        <Price />
      </div>
      <div id="contact" ref={sectionRefs.contact}>
        <Testimonials/>
      </div>
      <div id="contact" ref={sectionRefs.contact}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
