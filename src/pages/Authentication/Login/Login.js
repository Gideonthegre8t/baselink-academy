import React, { useState } from "react";
import eye from "../../../assets/images/eye.png";
import '../index.css';
import logo from "../../../assets/images/logo.png";
import LoginBoard from "./LoginBoard";
import backArrow from "../../../assets/images/arrow-left.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validUsername = "Gideon";
    const validPassword = "Baselink@0123";

    if (form.username === validUsername && form.password === validPassword) {
      setMessage("Login successful!");
      navigate('/dashboard'); // Redirect to home page on  success
    } else {
      setMessage("Incorrect username or password.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRegisterClick = () => {
    navigate('/sign-up'); // Navigate to /sign-up route
  };

  return (
    <section id="login">
        <div className="logo-wrap mobile dashboard-logo">
            <img className="logo user-dasboard-logo" src={logo} alt="logo" />
            <p>
              BaseLink <br />
              Academy
            </p>
          </div>
      <div className="login-wrapper">
        <h2>Welcome to Baselink Academy</h2>
        <p>{message}</p>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="sarah_corner"
            />
          </div>
          <div className="login-form-group">
            <label className="align-password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="********"
              />
              <img
                src={eye}
                alt="eye"
                onClick={toggleShowPassword}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          <p className="forget-password">Forget password?</p>
          <button className="login-button" type="submit">Log In</button>
          <div className="dont-have-account">
            <p>Don't have an account?</p>
            <button
              type="button"
              className="sign-up-text"
              onClick={handleRegisterClick}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>

      <div className="login-bottom mobile" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img className="login-bottom-arrow" src={backArrow} alt="back arrow" />
        <p>Return to home</p>
      </div>
      <LoginBoard className="login-component" />
    </section>
  );
}

export default Login;
