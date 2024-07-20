import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"; // Ensure the path is correct
import eye from "../../../assets/images/eye.png";
import '../index.css';
import logo from "../../../assets/images/logo.png";
import LoginBoard from "./LoginBoard"; 
import backArrow from "../../../assets/images/arrow-left.png";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, form.username, form.password);
      setMessage("Login successful!");
      // Add your login logic here, e.g., redirect to the dashboard
      console.log("Form submitted:", form);
    } catch (error) {
      setMessage("Incorrect password or username.");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section id="login"  >
               <div className=" login-logo mobile">
            
            <p className="logo-text">
              <img src={logo} alt="logo" />
              BaseLink <br />
              Academy{" "}
            </p>
          </div>  
      <div className="login-wrapper">

        <h2 >Welcome to Baselink Academy</h2>
        <p>{message}</p>
        <form className="registration-form" onSubmit={handleSubmit}>
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
          </div>
          <div className="form-group">
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
          <button className=" login-button" type="submit">Log In</button>
          <div  className="dont-have-account"> <p>Already have and account?</p>
          <button type="button " className=" sign-up-text" onClick={() => console.log("Register clicked")}>
            Sign up
          </button></div>
        </form>
      </div>

      <LoginBoard className="login-component" />
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

export default Login;
