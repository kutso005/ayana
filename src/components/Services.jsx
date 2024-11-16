import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaCamera,
  FaEdit,
  FaPen,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Design",
      icon: <FaLaptopCode />,
      description: "Duis molestie enim mattis gravida viverra.",
    },
    {
      title: "Photography",
      icon: <FaCamera />,
      description: "Fusce lorem ex, fringilla eget consequat ut.",
    },
    {
      title: "Video Editing",
      icon: <FaEdit />,
      description: "Aenean pretium nulla libero, vitae iaculis libero.",
    },
    {
      title: "Copy Writing",
      icon: <FaPen />,
      description: "Nullam vitae tincidunt eros.",
    },
    {
      title: "Coding",
      icon: <FaCode />,
      description: "Aenean pretium nulla libero, vitae iaculis libero.",
    },
    {
      title: "App Developing",
      icon: <FaMobileAlt />,
      description: "Duis molestie enim mattis gravida viverra.",
    },
  ];

  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="container">
      <h1 className="title">My Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item"
            ref={(el) => (serviceRefs.current[index] = el)}
          >
            <div className="icon">{service.icon}</div>
            <h3 className="titles">{service.title}</h3>
            <p className="description">{service.description}</p>
            <div className="read-more">
              <span className="line"></span>
              <span className="text">Read More</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
