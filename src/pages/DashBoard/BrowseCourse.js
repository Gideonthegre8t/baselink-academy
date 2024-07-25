import React, { useState } from "react";
import courseIcon from "../../assets/images/my-course.png";
import "../DashBoard/index.css";
import browseCourse from "../../../src/assets/images/search.png";

function BrowseCourse({ updateOverview }) {
  const [activeCourse, setActiveCourse] = useState("Creative");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const coursesData = {
    Creative: [
      { name: "Video editing", syllabus: "12", readingMaterial: "20", tutorialVideos: "24" },
      { name: "Animation", syllabus: "12", readingMaterial: "20", tutorialVideos: "24" },
      { name: "Graphic design", syllabus: "12", readingMaterial: "20", tutorialVideos: "24" }
    ],
    Technical: [
      { name: "Web Development", syllabus: "15", readingMaterial: "18", tutorialVideos: "22" },
      { name: "Data Science", syllabus: "14", readingMaterial: "16", tutorialVideos: "20" },
      { name: "Machine Learning", syllabus: "13", readingMaterial: "17", tutorialVideos: "23" }
    ],
    Business: [
      { name: "Entrepreneurship", syllabus: "10", readingMaterial: "15", tutorialVideos: "20" },
      { name: "Marketing", syllabus: "12", readingMaterial: "19", tutorialVideos: "24" },
      { name: "Finance", syllabus: "11", readingMaterial: "16", tutorialVideos: "21" }
    ],
    PersonalDevelopment: [
      { name: "Time Management", syllabus: "8", readingMaterial: "14", tutorialVideos: "18" },
      { name: "Public Speaking", syllabus: "9", readingMaterial: "15", tutorialVideos: "19" },
      { name: "Leadership", syllabus: "10", readingMaterial: "16", tutorialVideos: "20" }
    ]
  };

  const handleCourseClick = (courseType) => {
    setActiveCourse(courseType);
  };

  const handleEnroll = (courseName) => {
    if (!enrolledCourses.includes(courseName)) {
      const newEnrolledCourses = [...enrolledCourses, courseName];
      setEnrolledCourses(newEnrolledCourses);
      updateOverview(newEnrolledCourses.length);
    }
  };

  return (
    <section id="browse-course" className="browse-course">
      <div className="overview-prefix prefix">
        <img src={browseCourse} alt="/" />
        <h4>My courses</h4>
      </div>
      <div className="browse-course-wrapper">
        <div className="browse-course-header ">
          <h2>Welcome, Gideon!</h2>
        </div>
        <p className="note">For any question regarding any course please send a question in the Q & A section</p>

        <div className="browse-course-content">
          <div className="browse-content-top">
            <div className="course-title" onClick={() => handleCourseClick("Creative")}>
              <img className="course-icon" src={courseIcon} alt="/" />
              <p style={{ color: activeCourse === "Creative" ? "black" : "inherit" }}>Creative courses</p>
            </div>
            <div className="course-title" onClick={() => handleCourseClick("Technical")}>
              <img className="course-icon" src={courseIcon} alt="/" />
              <p style={{ color: activeCourse === "Technical" ? "black" : "inherit" }}>Technical courses</p>
            </div>
            <div className="course-title" onClick={() => handleCourseClick("Business")}>
              <img className="course-icon" src={courseIcon} alt="/" />
              <p style={{ color: activeCourse === "Business" ? "black" : "inherit" }}>Business courses</p>
            </div>
            <div className="course-title" onClick={() => handleCourseClick("PersonalDevelopment")}>
              <img className="pd-course-icon" src={courseIcon} alt="/" />
              <p style={{ color: activeCourse === "PersonalDevelopment" ? "black" : "inherit" }}>Personal development courses</p>
            </div>
          </div>
          <div className="course-line"></div>

          <div className="browse-content-bottom">
            <div className="browse-card-title">
              <p>Courses description</p>
              <p>Syllabus</p>
              <p className="desktop">Reading material url</p>
              <p className="desktop">Tutorial videos url</p>
            </div>
            <div className="course-line2"></div>

            {coursesData[activeCourse].map((course, index) => (
              <div key={index} className="browse-content-card">
                <p className="course-name">{course.name}</p>
                <p>{course.syllabus}</p>
                <p className="desktop">{course.readingMaterial}</p>
                <p className="desktop">{course.tutorialVideos}</p>
                <p className="enroll" onClick={() => handleEnroll(course.name)}>
                  {enrolledCourses.includes(course.name) ? "Enrolled" : "Enroll"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrowseCourse;
