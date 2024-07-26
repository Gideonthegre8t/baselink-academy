import React from "react";
import courseIcon from "../../assets/images/my-course.png";
import myCourse from "../../../src/assets/images/my-course.png";
import "../DashBoard/index.css";

function MyCourses({ enrolledCourses = [] }) { // Default prop to an empty array
  return (
    <section className="my-course">
      <div className="overview-prefix prefix">
        <img src={myCourse} alt="/" />
        <h4>My courses</h4>
      </div>
      <div className="browse-course-wrapper">
        <div className="browse-course-header ">
          <h2>Welcome, Gideon!</h2>
          <p>Here's what we have for you</p>
        </div>
        <div className="browse-course-content my-course-content-top">
          <div className=" my-course-top ">
            <div className="course-title">
              <img className=" my-course-icon" src={courseIcon} alt="/" />
              <p>New courses</p>
            </div>
            <div className="course-title completed-course-title">
              <img className="completed-course-icon" src={courseIcon} alt="/" />
              <p>Completed courses</p>
            </div>
            <div className="course-title ">
              <img className="my-course-icon" src={courseIcon} alt="/" />
              <p>Certificates</p>
            </div>
          </div>
          <div className="course-line"></div>
          <div className="browse-content-bottom">
            <div className="browse-card-title">
              <p>Courses description</p>
              <p>Syllabus</p>
              <p className="desktop">Reading material url</p>
              <p className="desktop">Tutorial videos url </p>
            </div>
            <div className="course-line2"></div>
            {enrolledCourses.map((course, index) => (
              <div key={index} className="browse-content-card">
                <p className="course-name">{course}</p>
                <p>1/12</p>
                <p className="desktop">2/20</p>
                <p className="desktop">2/24</p>
                <p className="enroll">view</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCourses;
