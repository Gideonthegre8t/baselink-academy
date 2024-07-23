import React from "react";
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import linkdin from "../assets/images/linkdin.png";
import Copyright from "./Copyright";

function Footer() {
  return (
    <section id="contact" className="footer-container">
      <div className="footer-wrapper">
        {" "}
        <div className="footer-top-wrapper">
          <div className="footer-logo-wrap">
            <img className="logo" src={logo} alt="logo" />
            <p>
              BaseLink <br />
              Academy{" "}
            </p>
          </div>

          <div className="contact-info">
            <h2>Contact Information</h2>
            <ul className="contact">
              <li>Address</li>
              <li>Email</li>
              <li>Phone number</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="socials">
        <p>Subscribe to our newsletter for updates and exclusive content</p>
        <div className="handles">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
          <img src={linkdin} alt="linkdin" />
        </div>
      </div>

      <div className="line"></div>
      <Copyright />
    </section>
  );
}

export default Footer;
