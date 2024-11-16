import React, { useEffect, useRef } from "react";

const skillsData = [
  { name: "Webdesign", percent: "100%" },
  { name: "Photography", percent: "80%" },
  { name: "Coding", percent: "90%" },
  { name: "Copywriting", percent: "60%" },
];

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      skillRefs.current.forEach((ref) => {
        const top = ref.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 50) {
          ref.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <div className="container">
      <section className="skills-section">
      <h1 className="title">My Skills</h1>
      <div className="ckils">
        <div className="detail">
          <h3>Every Day is a New Challenge</h3>
          <p className="description">
            In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at
            sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
            efficitur sagittis, urna est ultricies eros, ac porta sem turpis
            quis leo. Nulla in feugiat elit.
          </p>
          <p className="description">
            Phasellus accumsan scelerisque dolor, quis mattis justo bibendum
            non. Nulla sollicitudin turpis in enim elementum varius. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae.
          </p>
          <button className="contact-btn">CONTACT ME</button>
        </div>
        <div className="skill-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill">
              <span>{skill.name}</span>
              <div
                className="progress"
                ref={(el) => (skillRefs.current[index] = el)}
                data-percent={skill.percent}
                style={{ "--percent": skill.percent }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Skills;
