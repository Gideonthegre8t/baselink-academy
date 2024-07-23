import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion"; // Import framer-motion
import logo from "../assets/images/logo.png";
import image1 from "../assets/images/hand-on-mobile.png";
import verifyIcon from "../assets/images/verify.png";
import headerBackground1 from "../assets/images/header-background1.png";
import headerBackground2 from "../assets/images/header-background2.png";
import Navbar from "./Navbar";

function Header() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick = () => {
    navigate("/sign-up"); // Navigate to /sign-up route
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to /login route
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: {
        yoyo: Infinity,
      },
    },
    click: {
      scale: 0.9,
    },
  };

  return (
    <header id="home">
      <div className="header-wrapper">
        <div className="header-top">
          <div className="logo-wrap">
            <img className="logo" src={logo} alt="logo" />
            <p>
              BaseLink <br />
              Academy{" "}
            </p>
          </div>
          <Navbar />
          <motion.button
            className="register-button desktop"
            onClick={handleRegisterClick}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="click"
          >
            Register
          </motion.button>
        </div>
        <div className="header-content">
          <div className="header-content-left">
            <h1>
              Empower Your <span>Future</span> with In-Demand{" "}
              <span>Creative </span>Creative and Technical Skills
            </h1>
            <p>
              Join Baselinks Academy and unlock a world of opportunities with
              our robust and user-friendly online learning platform
            </p>
            <div className="header-bottom">
              <motion.button
                className="browse-button"
                onClick={handleLoginClick}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="click"
              >
                Browse courses
              </motion.button>
              <motion.button
                className="sign-up-button login-button"
                onClick={handleLoginClick}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="click"
              >
                Login
              </motion.button>
            </div>
            <p className="coach-text desktop">
              <img className="verifyIcon" src={verifyIcon} alt="verify-icon" />
              Skilled coach
            </p>
          </div>
          <div className="header-content-right">
            <img className="hand-on-phone" src={image1} alt="hand-on-phone" />
            <img
              className="header-background1"
              src={headerBackground1}
              alt="background"
            />
          </div>
        </div>
      </div>
      <img
        className="header-background2"
        src={headerBackground2}
        alt="background2"
      />
    </header>
  );
}

export default Header;
