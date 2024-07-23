import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion"; // Import framer-motion
import frame1 from "../assets/images/frame1.png";
import frame2 from "../assets/images/frame2.png";
import banner from "../assets/images/BASELINK.png";
import profile1 from "../assets/pictures/hassan.png";
import profile2 from "../assets/pictures/blaire.png";
import profile3 from "../assets/pictures/john.png";

function Testimony() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUpClick = () => {
    navigate('/sign-up'); // Navigate to /sign-up route
  };

  const testimonies = [
    {
      name: "Hassan Jamal",
      testimonial:
        "Baselinks Academy transformed my career. The courses are broad and easy to follow.",
      profileImg: profile1,
    },
    {
      name: "Blaire Thompson",
      testimonial:
        "The flexibility of learning at my own pace made all the difference. Highly recommend!",
      profileImg: profile2,
    },
    {
      name: "John Doe",
      testimonial:
        "Baselinks Academy transformed my career. The courses are broad and easy to follow.",
      profileImg: profile3,
    },
  ];

  const buttonVariants = {
    hover: {
      scale: [1, 1.1, 1], // Pulsating effect
      boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: 2, // Repeats the animation twice
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <section id="testimonial" className="testimony-container">
      <div className="testimony-wrapper">
        <div className="testimony-top">
          <h2>What Our Learners Say</h2>
          <p>Success Stories from Our Community</p>
        </div>

        <div className="testimony-bottom">
          <div className="testimony-slider">
            {testimonies.map((testimony, index) => (
              <div key={index} className="testimony-card">
                <div className="testimony-card-top">
                  <img className="frame1" src={frame1} alt="design" />
                  <img src={testimony.profileImg} alt="customer" />
                  <img className="frame2" src={frame2} alt="design" />
                </div>

                <div className="testimony-card-bottom">
                  <h4>{testimony.name}</h4>
                  <p>{testimony.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="banner">
        <img src={banner} alt="baselink" />
        <h2>Ready to Get Started?</h2>
        <p className="banner-text">
          Join Baselinks Academy today and start your journey towards mastering
          creative and technical skills.
        </p>
        <motion.button
          className="banner-sign-up"
          onClick={handleSignUpClick}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Sign up now!
        </motion.button>
      </div>
    </section>
  );
}

export default Testimony;
