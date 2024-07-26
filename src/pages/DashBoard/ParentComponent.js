import React, { useState } from "react";
import BrowseCourse from "./BrowseCourse";
import MyCourse from "./MyCourse";

function ParentComponent() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const updateOverview = (count) => {
    // Handle overview update logic if needed
  };

  return (
    <div>
      <BrowseCourse 
        updateOverview={updateOverview} 
        enrolledCourses={enrolledCourses}
        setEnrolledCourses={setEnrolledCourses} 
      />
      <MyCourse enrolledCourses={enrolledCourses} />
    </div>
  );
}

export default ParentComponent;
