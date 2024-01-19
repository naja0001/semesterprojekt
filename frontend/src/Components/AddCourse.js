import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [course, setCourses] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:6500/add_course", { course })
      .then((result) => {
        if (result.data.Status) {
          navigate("/sidebar/course");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      <div className="p-3 rounded w-25 border">
        <h2>Add Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="course">
              <strong>Course:</strong>
            </label>
            <input
              type="text"
              name="Course"
              placeholder="Enter Course"
              onChange={(e) => setCourses(e.target.value)}
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-success w-100 rounded-0 mb-2">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
