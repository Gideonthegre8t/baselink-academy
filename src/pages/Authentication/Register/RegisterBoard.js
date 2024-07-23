import React from "react";
import logo from "../../../assets/images/logo.png";
import "../../../pages/Authentication/index.css";
import authAsset from "../../../assets/images/auth-asset.png";
import authWallpaper from "../../../assets/images/auth-wallpaper.png";
import backArrow from "../../../assets/images/arrow-left.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function RegisterBoard() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section id="authentication-board" className="register-board">
      <div className="auth-container">
        <div className="auth-board-wrapper">
          <div className="logo-wrap auth-logo">
            <img src={logo} alt="logo" />
            <p>
              BaseLink <br />
              Academy
            </p>
          </div>

          <div className="board-content-wrapper">
            <img className="auth-asset" src={authAsset} alt="/" />
            <div className="board-content">
              <div className="board-detail">
                <h4>Your details</h4>
                <p>Name, username, password</p>
              </div>
              <div className="board-detail">
                <h4>Your details</h4>
                <p>Enter verification code</p>
              </div>
              <div className="board-detail">
                <h4>Welcome to Baselink Academy</h4>
                <p>Enter verification code</p>
              </div>
            </div>
          </div>
        </div>

        <img className="auth-wallpaper" src={authWallpaper} alt="/" />
        <div
          className="return-home login-return-to-home"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <p>
            <img className="back-icon" src={backArrow} alt="/" />
            Return to home
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterBoard;
