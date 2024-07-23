import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    const offset = 60; // Adjust this value according to the height of your fixed navbar or header

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top of the page
    } else {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setShowLinks(false); // Close the navbar after clicking a link
  };

  return (
    <div className="navigator">
      <nav className={`navbar links ${showLinks ? "visible" : ""}`}>
        <a href="/#" onClick={(e) => handleClick(e, "home")}>
          Home
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "about")}>
          About Us
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "course")}>
          Courses
        </a>
        <a href="/#" onClick={(e) => handleClick(e, "contact")}>
          Contact Us
        </a>
      </nav>
      <button onClick={() => setShowLinks(!showLinks)} className="nav-btn">
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
