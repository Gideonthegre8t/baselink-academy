import React from "react";
import expertIcon from "../assets/images/expert.png";
import aboutWallpaper from "../assets/images/about-wallpaper.png";
import flexibleIcon from "../assets/images/flexible.png";
import certificationIcon from "../assets/images/certification.png";
import communityIcon from "../assets/images/community.png";




function About() {
  return (
    <section id="about">
      <div className="about-wrapper">
        <h2>Why Baseklinks Academy?</h2>
        <div className="about-content">
          <img
            className="about-wallpaper"
            src={aboutWallpaper}
            alt="collaboration"
          />

          <div className="about-desription-wrapper">
            {" "}
            <div className="about-descriptions">
              <h3>
                <img
                  className="about-icon"
                  src={expertIcon}
                  alt="expert-icon"
                />
                Expert Instructors
              </h3>
              <p>Learn from industry experts with real-world experience.</p>
            </div>
            <div className="about-descriptions">
              <h3>
                <img
                    className="about-icon"
                    src={flexibleIcon}
                    alt="flexible-icon"
                />
                Flexible Learning
              </h3>
              <p>Access courses anytime, anywhere, and learn at your own pace.</p>
            </div>
            <div className="about-descriptions">
              <h3>
                <img
                  className="about-icon"
                  src={certificationIcon}
                  alt="certification-icon"
                />
                Certification
              </h3>
              <p>Earn recognized certificates to showcase your new skills.</p>
            </div>
            <div className="about-descriptions">
              <h3>
                <img
                  className="about-icon"
                  src={communityIcon}
                  alt="community-icon"
                />
                Community
              </h3>
              <p>Join a vibrant community of learners and professionals</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
