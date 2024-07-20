import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"; // Ensure the path is correct
import eye from "../../../assets/images/eye.png";
import '../index.css';
import logo from "../../../assets/images/logo.png";
import backArrow from "../../../assets/images/arrow-left.png";
import RegisterBoard from "./RegisterBoard";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("Get ready in 3 minutes");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const usernames = ["existingUser1", "existingUser2"]; // Simulating existing usernames

  const validatePassword = (password) => {
    if (password.length < 9) {
      return "Password must be at least 9 characters.";
    } else if (!/[A-Z]/.test(password)) {
      return "Password must have a block letter.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (name === "email") {
      const emailValid = value.includes("@");
      setMessage(emailValid ? "Get ready in 3 minutes" : "Input a valid email.");
    }

    if (name === "password") {
      const passwordError = validatePassword(value);
      setPasswordError(passwordError);
      setMessage(passwordError || "Get ready in 3 minutes");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usernames.includes(form.username)) {
      setUsernameError("Username already exists.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      setMessage("Registration successful!");
      // Add your form submission logic here, e.g., send data to your backend
      console.log("Form submitted:", form);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section id="sign-up">
      <div className=" sign-up-logo mobile">
            
            <p className="logo-text sign-up-text">
              <img  src={logo} alt="logo" />
              BaseLink <br />
              Academy{" "}
            </p>
          </div>  
      <div className="sign-up-wrapper">
        <h2>Welcome to Baselink Academy</h2>
        <p>{message}</p>
        <form className="registration-form " onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Sarah Cornor"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="SarahConnor@outlook.com"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="sarah_corner"
            />
            {usernameError && (
              <p className="error-text">{usernameError}</p>
            )}
          </div>
          <div className="form-group">
            <label className="align-password" >Password</label>
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
            {passwordError && (
              <p className="error-text">{passwordError}</p>
            )}
          </div>
          <button className="auth-register-button " type="submit">Sign Up</button>
          <div  className="have-account"> <p>Already have and account?</p>
          <button type="button " className=" login-text" onClick={() => console.log("Register clicked")}>
            Log in
          </button></div>
        </form>
      </div>
      <RegisterBoard />
      <div className="login-bottom mobile">
          <p>
            {" "}
            <img className="login-bottom-arrow  " src={backArrow} alt="/" />
            Return to home
          </p>
        </div>
    </section>
  );
}

export default Register;
