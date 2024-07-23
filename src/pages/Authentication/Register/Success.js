import React from "react";
import "../index.css";
import success from "../../../assets/images/finished.png";

function Success() {
  return (
    <section id="success">
      <div className="success-wrapper">
        <h2>Welcome to Baselink Academy</h2>
        <div className="success-content">
          <img src={success} alt="success" />
          <div className="finished-wrapper" >
            <button className="finished-button">Finished</button>
            <p>Congrats,welcome to the community </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
