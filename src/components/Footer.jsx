import React from "react";
import { FiMapPin } from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSkype,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="container">
      <div className="speech-bubble center">
        <p>Get In Touch</p>
      </div>
      <div className="phones">
        <div className="phone">
          <FiMapPin size={35} color="#fff" />
          <h4>Address</h4>
          <p>999 Carter Street</p>
          <p>Sailor Springs, IL 62434</p>
        </div>
        <div className="phone">
          <FiMapPin size={35} color="#fff" />
          <h4>Phone</h4>
          <p>+1 618-689-9409</p>
          <p>+1 781-254-8437</p>
        </div>
        <div className="phone">
          <FiMapPin size={35} color="#fff" />
          <h4>Email</h4>
          <p>hello@example.com</p>
          <p>support@example.com</p>
        </div>
        <div className="phone">
          <FiMapPin size={35} color="#fff" />
          <h4>Facebook Chat</h4>
          <p>me.freelancer3</p>
        </div>
      </div>
      <div className="footer-container">
        <div className="connect-section">
          <h2>Let's Connect</h2>
          <ul className="social-links">
            <li>
              <a href="#">
                <FaFacebook size={20} /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter size={20} /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram size={20} /> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <FaPinterest size={20} /> Pinterest
              </a>
            </li>
            <li>
              <a href="#">
                <FaSkype size={20} /> Skype
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h2>Send Me a Message</h2>
          <form>
            <div className="inpursd">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">SEND A MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
}
