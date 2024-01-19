import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Course = () => {
  const [course, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6500/courses")
      .then((result) => {
        if (result.data.Status) {
          setCourses(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Course List</h3>
      </div>
      <Link to="/sidebar/add_course" className="btn btn-success">
        Add Course
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {course.map((c) => (
              <tr>
                <td>{c.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Course;
