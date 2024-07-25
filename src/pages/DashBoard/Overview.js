import React from "react";
import "../DashBoard/index.css";
import trackEnrolIcon from "../../../src/assets/images/my-course.png";
import verified from "../../../src/assets/images/verify.png";
import overview from "../../assets/images/overview.png";

function Overview({ enrolledCount }) {
  return (
    <section id="overview">
      <div className="overview-prefix">
        <img src={overview} alt="/" />
        <h4>Overview</h4>
      </div>

      <div className="overview-wrapper">
        <div className="overview-header">
          <h2>Welcome, Gideon!</h2>
          <p>Here's what we have for you</p>
        </div>
      </div>
      <div className="track-detail-container">
        <div className="track-detail-card">
          <p>
            <img className="track-icon" src={trackEnrolIcon} alt="/" />
            Enrolled courses{" "}
          </p>
          <h3>{enrolledCount}</h3>
        </div>

        <div className="track-detail-card">
          <p>
            <img
              className="track-icon progress-icon"
              src={trackEnrolIcon}
              alt="/"
            />
            Progress{" "}
          </p>

          <h3 className="progress-meter">{enrolledCount * 10}</h3>
          <div className="category-wrapper">
            <div className="category">
              <div className="progress-tab">
                <div className="progress-details">
                  <p>
                    Starter...
                    <img
                      className="dashboard-verified"
                      src={verified}
                      alt=""
                    />{" "}
                  </p>
                  <p>2 courses</p>
                </div>
                <div className="progress-details mobile">
                  <p>
                    Finished...
                    <img
                      className="dashboard-verified"
                      src={verified}
                      alt=""
                    />{" "}
                  </p>
                  <p>2 courses</p>
                </div>
                <div className="progress-details">
                  <p>
                    Certified...
                    <img
                      className="dashboard-verified"
                      src={verified}
                      alt=""
                    />{" "}
                  </p>
                  <p>2 courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overview-bottom">
        <p className="recommended-text">
          <img
            className="track-icon recommended-icon"
            src={trackEnrolIcon}
            alt="/"
          />
          Recommended courses{" "}
        </p>
        <div className="overview-bottom-content">
          <ul className="over-view-list">
            <li>
              <span>Project management</span>: Project management is the
              application of knowledge, skills, tools, and techniques to project
              activities to meet project requirements
            </li>

            <li>
              <span>Front end</span>: Project management is the application of
              knowledge, skills, tools, and techniques to project activities to
              meet project requirements
            </li>

            <li>
              <span>Photography</span>: Project management is the application of
              knowledge, skills, tools, and techniques to project activities to
              meet project requirements
            </li>
            <li>
              <span>UI UX Design</span>: Project management is the application
              of knowledge, skills, tools, and techniques to project activities
              to meet project requirements
            </li>
            <li>
              <span>Sales and marketing</span>: Project management is the
              application of knowledge, skills, tools, and techniques to project
              activities to meet project requirements
            </li>
            <li>
              <span>Animation</span>: Project management is the application of
              knowledge, skills, tools, and techniques to project activities to
              meet project requirements
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Overview;
