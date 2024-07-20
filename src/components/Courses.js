import React from "react";
import courseIcon from "../assets/images/courses.png";

function Courses() {
  return (
    <section id="course">
      <div className="courses-container">
        <div className="courses-top">
          <h2>Explore Our Courses</h2>
          <p>Find the Perfect Course for You </p>
          <div className="course-wrapper">
            <div className="course-card">
              <img src={courseIcon} alt="course-icon" />
              <h3>Creative Skills</h3>

              <ul className="skill-list">
                <li>Video editing</li>
                <li>Animation</li>
                <li>Graphic design</li>
              </ul>
            </div>

            <div className="course-card">
              <img src={courseIcon} alt="course-icon" />
              <h3>Technical Skills</h3>

              <ul className="skill-list">
                <li>Front end</li>
                <li>UIUX Design </li>
                <li>Programming</li>
              </ul>
            </div>

            <div className="course-card">
              <img src={courseIcon} alt="course-icon" />
              <h3>Business Skills</h3>

              <ul className="skill-list">
                <li>Product management</li>
                <li>Digital marketing </li>
                <li>Sales and marketing </li>
              </ul>
            </div>

            <div className="course-card">
              <img src={courseIcon} alt="course-icon" />
              <h3>Persoanl Dev </h3>

              <ul className="skill-list">
                <li>Communitcation skills</li>
                <li>Leadership</li>
                <li>Self Motivation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
