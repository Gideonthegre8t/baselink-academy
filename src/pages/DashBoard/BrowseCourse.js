import React from "react";
import courseIcon from "../../assets/images/my-course.png";
import "../DashBoard/index.css";

function BrowseCourse() {
  return (
    <section className="browse-course">
      <div className="browse-course-wrapper">
        <div className="browse-course-header ">
          {" "}
          <h2>Welcome,Gideon!</h2>
          <p>Here's what we have for you</p>
        </div>
        <div className="browse-course-content">
          <div className="browse-content-top">
            <div className="course-title">
              <img className="course-icon" src={courseIcon} alt="/" />
              <p>Creative courses</p>
            </div>

            <div className="course-title">
              <img  className="course-icon" src={courseIcon} alt="/" />
              <p>Technical courses</p>
            </div>
            <div className="course-title">
              <img  className="course-icon" src={courseIcon} alt="/" />
              <p>Business courses</p>
            </div>
            <div className="course-title">
              <img  className="pd-course-icon" src={courseIcon} alt="/" />
              <p>Personal development courses</p>
            </div>
          </div>
          <div className="course-line"></div>

          <div className="browse-content-bottom">
      
            <div className=" browse-card-title" >
             <p >Courses description</p>
             <p >Syllabus</p>
             <p  className="desktop">Reading material url</p>
             <p className="desktop">Tutorial videos url </p>
            </div>
            <div className="course-line2"></div>

            <div className="browse-content-card">
            <p className="course-name">Video editing</p>
            <p> 12</p>
            <p  className="desktop"> 20</p>
            <p className="desktop"> 24</p>
        <p className="enroll">Enroll</p>
            </div>
            <div className="course-line2"></div>
            
            <div className="browse-content-card">
            <p className="course-name">Animation</p>
            <p> 12</p>
            <p  className="desktop"> 20</p>
            <p className="desktop"> 24</p>
        <p className="enroll">Enroll</p>
            </div>
            <div className="course-line2"></div>
            <div className="browse-content-card">
            <p className="course-name">Graphic design</p>
            <p> 12</p>
            <p  className="desktop" > 20</p>
            <p className="desktop"> 24</p>
        <p className="enroll">Enroll</p>
            </div>
            <div className="course-line2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrowseCourse;
