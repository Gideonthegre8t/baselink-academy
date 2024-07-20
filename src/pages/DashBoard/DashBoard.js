import React from "react";
import logo from "../../assets/images/logo.png";
import overview from "../../../src/assets/images/overview.png";
import questionMark from "../../../src/assets/images/message-question.png";
import logOut from "../../../src/assets/images/logout.png";
import browse from "../../../src/assets/images/search.png";
import myCourse from "../../../src/assets/images/my-course.png";
import profile from "../../../src/assets/images/profile.png";
import "../DashBoard/index.css";

function DashBoard() {
  return (
    <section id="dashboard" className="dashboard-container">
      <div className="dashboard-wrapper">
        {" "}
        <div className="logo-wrap dashboard-logo">
          <img className="logo user-dasboard-logo" src={logo} alt="logo" />
          <p>
            BaseLink <br />
            Academy{" "}
          </p>
        </div>
    
        <div className="dashboard-header mobile ">
          {" "}
          <h2>Welcome,Gideon!</h2>
          <p>Here's what we have for you</p>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-item-card">
            <p className="dashboard-text">
              <img className="dash-item-img" src={overview} alt="/" />
              Overview{" "}
            </p>
          </div>
          <div className="dashboard-item-card">
            <p className="dashboard-text">
              <img className="dash-item-img" src={browse} alt="/" />
              Browse course{" "}
            </p>
          </div>
          <div className="dashboard-item-card">
            <p className="dashboard-text">
              <img className="dash-item-img" src={myCourse} alt="/" />
              My courses{" "}
            </p>
          </div>
          <div className="dashboard-item-card">
            <p className="dashboard-text">
              <img className="dash-item-img" src={profile} alt="/" />
              Profile{" "}
            </p>
          </div>
        </div>
        <div className="dashboard-bottom">
          <p>
            <img className="dash-icon" src={questionMark} alt="/" />Q & A{" "}
          </p>
          <p>
            <img className="dash-icon" src={logOut} alt="/" />
            Logout{" "}
          </p>
        </div>
      </div>
      <div className="render">
        {/* <Overview /> */}
      </div>
    </section>
  );
}

export default DashBoard;
