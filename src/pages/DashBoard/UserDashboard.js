import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import overviewImg from "../../../src/assets/images/overview.png";
import questionMark from "../../../src/assets/images/message-question.png";
import logOut from "../../../src/assets/images/logout.png";
import browse from "../../../src/assets/images/search.png";
import myCourse from "../../../src/assets/images/my-course.png";
import profile from "../../../src/assets/images/profile.png";
import "../DashBoard/index.css";
import Overview from "./Overview";
import BrowseCourse from "./BrowseCourse";
import MyCourses from "./MyCourses";
import UserInfomation from "./UserInfomation";
import QandA from "./QandA";

function UserDashboard() {
  const [activeComponent, setActiveComponent] = useState("Overview");
  const [scrollToRef, setScrollToRef] = useState(null);
  const [enrolledCount, setEnrolledCount] = useState(0);
  const navigate = useNavigate();

  const overviewRef = useRef(null);
  const browseCourseRef = useRef(null);
  const myCoursesRef = useRef(null);
  const userInformationRef = useRef(null);
  const qAndARef = useRef(null);

  const updateOverview = (count) => {
    setEnrolledCount(count);
  };

  useEffect(() => {
    if (scrollToRef) {
      setTimeout(() => {
        scrollToRef.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [scrollToRef]);

  const handleItemClick = (componentName, ref) => {
    setActiveComponent(componentName);
    if (window.innerWidth < 600) {
      setScrollToRef(ref.current);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const itemVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <div className="logo-wrap dashboard-logo">
            <img className="logo user-dasboard-logo" src={logo} alt="logo" />
            <p>
              BaseLink <br />
              Academy
            </p>
          </div>

          <div className="dashboard-header mobile">
            <h2>Welcome, Gideon!</h2>
            <p>Here's what we have for you</p>
          </div>

          <div className="dashboard-content">
            <motion.div
              className={`dashboard-item-card ${activeComponent === "Overview" ? 'active-card' : ''}`}
              onClick={() => handleItemClick("Overview", overviewRef)}
              variants={itemVariants}
              whileHover="hover"
            >
              <p className="dashboard-text">
                <img className="dash-item-img" src={overviewImg} alt="/" />
                Overview
              </p>
            </motion.div>
            <motion.div
              className={`dashboard-item-card ${activeComponent === "BrowseCourse" ? 'active-card' : ''}`}
              onClick={() => handleItemClick("BrowseCourse", browseCourseRef)}
              variants={itemVariants}
              whileHover="hover"
            >
              <p className="dashboard-text">
                <img className="dash-item-img" src={browse} alt="/" />
                Browse course
              </p>
            </motion.div>
            <motion.div
              className={`dashboard-item-card ${activeComponent === "MyCourses" ? 'active-card' : ''}`}
              onClick={() => handleItemClick("MyCourses", myCoursesRef)}
              variants={itemVariants}
              whileHover="hover"
            >
              <p className="dashboard-text">
                <img className="dash-item-img" src={myCourse} alt="/" />
                My courses
              </p>
            </motion.div>
            <motion.div
              className={`dashboard-item-card ${activeComponent === "UserInfomation" ? 'active-card' : ''}`}
              onClick={() => handleItemClick("UserInfomation", userInformationRef)}
              variants={itemVariants}
              whileHover="hover"
            >
              <p className="dashboard-text">
                <img className="dash-item-img" src={profile} alt="/" />
                Profile
              </p>
            </motion.div>
          </div>
          <div className="dashboard-bottom">
            <p onClick={() => handleItemClick("QandA", qAndARef)}>
              <img className="dash-icon" src={questionMark} alt="/" />Q & A
            </p>
            <p onClick={handleLogout}>
              <img className="dash-icon" src={logOut} alt="/" />
              Logout
            </p>
          </div>
        </div>
      </div>
      <div className="render">
        {activeComponent === "Overview" && (
          <div ref={overviewRef}>
            <Overview enrolledCount={enrolledCount} />
          </div>
        )}
        {activeComponent === "BrowseCourse" && (
          <div ref={browseCourseRef}>
            <BrowseCourse updateOverview={updateOverview} />
          </div>
        )}
        {activeComponent === "MyCourses" && (
          <div ref={myCoursesRef}>
            <MyCourses />
          </div>
        )}
        {activeComponent === "UserInfomation" && (
          <div ref={userInformationRef}>
            <UserInfomation />
          </div>
        )}
        {activeComponent === "QandA" && (
          <div ref={qAndARef}>
            <QandA />
          </div>
        )}
      </div>
    </section>
  );
}

export default UserDashboard;
