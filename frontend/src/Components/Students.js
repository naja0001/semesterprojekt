import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the list of students
    axios
      .get("http://localhost:6500/students")
      .then((result) => {
        if (result && result.status === 200) {
          setStudents(result.data);
        } else {
          console.error(result?.statusText || "Unknown error");
          alert("An error occurred while fetching students.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred while fetching students.");
      });
  }, []);

  const handleDelete = (id) => {
    // Delete student and update state
    axios
      .delete("http://localhost:6500/delete_students/" + id)
      .then((result) => {
        if (result.data.Status) {
          // Filter out the deleted student from the current state
          setStudents((prevStudents) =>
            prevStudents.filter((student) => student.id !== id)
          );
        } else {
          alert(result.data.Error);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while deleting the student.");
      });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center mb-3">
        <h3>Students List</h3>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  {/* Apply custom styles to the Link component */}
                  <Link
                    to={`/students/${student.id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {student.firstname}
                  </Link>
                </td>
                <td>{student.lastname}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>
                <td>{student.number}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Students;
