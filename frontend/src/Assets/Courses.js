import React from "react";
import { Link } from "react-router-dom";
import course1 from "../Images/course1.png";
import course2 from "../Images/course2.jpg";
import course3 from "../Images/course3.jpg";

const Courses = () => {
  return (
    <section className="courses">
      <h1>Kursus vi tilbyder</h1>
      <p>Vi tilbyder 3 kurser, der henvender sig til alle aldre og niveauer.</p>

      <div className="container">
        <Link
          to="/programs/udenadslaering"
          className="course_sprite"
          id="course1"
        >
          <img src={course1} alt="Course 1" />
          <div className="label">
            <h3>UDENADLÆRING</h3>
          </div>
        </Link>

        <Link to="/programs/tajweed" className="course_sprite">
          <img src={course2} alt="Course 2" />
          <div className="label">
            <h3>ADVANCED TAJWEED</h3>
          </div>
        </Link>

        <Link to="/programs/ijazah" className="course_sprite">
          <img src={course3} alt="Course 3" />
          <div className="label">
            <h3>IJAZAH</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
