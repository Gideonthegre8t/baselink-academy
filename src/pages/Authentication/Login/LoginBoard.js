import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "../../../pages/Authentication/index.css";
import authWallpaper from "../../../assets/images/auth-wallpaper.png";
import backArrow from "../../../assets/images/arrow-left.png";
import loginWallpaper from "../../../assets/images/login-wallpaper.png";

function LoginBoard() {
  const navigate = useNavigate();

  return (
    <section id="authentication-board" className="register-board">
      <div className="auth-container">
        <div className="logo-wrap auth-logo">
          <img className="auth-logo-img" src={logo} alt="logo" />
          <p>
            BaseLink <br />
            Academy
          </p>
        </div>
        <div className="auth-board-wrapper">
          <div className="board-content-wrapper">
            <div className="login-board-content">
              <img className="login-wallpaper" src={loginWallpaper} alt="/" />
            </div>
          </div>
        </div>
        <img
          className="auth-wallpaper login-auth-wallpaper"
          src={authWallpaper}
          alt="/"
        />
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

export default LoginBoard;
