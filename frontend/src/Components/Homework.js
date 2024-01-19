import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Homework.css";

const Homework = () => {
  const [students, setStudents] = useState([]);
  const [studentHomework, setStudentHomework] = useState([]);
  const [formData, setFormData] = useState({
    assignment_name: "",
    description: "",
    due_date: "",
  });
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const studentsResponse = await axios.get(
        "http://localhost:6500/students"
      );
      setStudents(studentsResponse.data);

      const homeworkResponse = await axios.get(
        "http://localhost:6500/homework"
      );
      setStudentHomework(homeworkResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const assignHomework = async (e) => {
    e.preventDefault();
    if (!selectedStudentId) return;

    try {
      const dataToInsert = {
        students_id: selectedStudentId,
        assignment_name: formData.assignment_name,
        description: formData.description,
        due_date: formData.due_date,
      };

      await axios.post(
        `http://localhost:6500/homework/${selectedStudentId}`,
        dataToInsert
      );
      fetchData();
    } catch (error) {
      console.error("Error assigning homework:", error);
    }
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleStudentClick = (studentId) => {
    setSelectedStudentId(studentId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedStudentId("");
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student Homework</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="list-group">
            {students.map((student) => (
              <button
                key={student.id}
                className={`list-group-item btn ${
                  selectedStudentId === student.id ? "active" : ""
                }`}
                onClick={() => handleStudentClick(student.id)}
              >
                {`${student.firstname} ${student.lastname}`}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              {selectedStudentId && (
                <div>
                  <h4 className="card-title">
                    {
                      students.find(
                        (student) => student.id === selectedStudentId
                      )?.firstname
                    }
                    's Homework
                  </h4>
                  <ul className="list-group">
                    {studentHomework
                      .filter((hw) => hw.students_id === selectedStudentId)
                      .map((hw, index) => (
                        <li key={index} className="list-group-item">
                          <strong>{hw.assignment_name}</strong>:{" "}
                          {hw.description} - Due: {hw.due_date}
                        </li>
                      ))}
                  </ul>
                  <form onSubmit={assignHomework} className="mt-3">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Assignment Name"
                        value={formData.assignment_name}
                        onChange={(e) =>
                          handleInputChange(e, "assignment_name")
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Description"
                        value={formData.description}
                        onChange={(e) => handleInputChange(e, "description")}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Due Date"
                        value={formData.due_date}
                        onChange={(e) => handleInputChange(e, "due_date")}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Assign Homework
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Homework Information for&nbsp;
                  {`${
                    students.find((student) => student.id === selectedStudentId)
                      ?.firstname
                  } ${
                    students.find((student) => student.id === selectedStudentId)
                      ?.lastname
                  }`}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                {/* Display homework information based on the structure of your data */}
                <ul className="list-group">
                  {studentHomework
                    .filter((hw) => hw.students_id === selectedStudentId)
                    .map((hw, index) => (
                      <li key={index} className="list-group-item">
                        <strong>{hw.assignment_name}</strong>: {hw.description}{" "}
                        - Due: {hw.due_date}
                      </li>
                    ))}
                </ul>
                {/* Add more details as needed */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal backdrop */}
      {showModal && (
        <div className="modal-backdrop show" onClick={handleCloseModal}></div>
      )}
    </div>
  );
};

export default Homework;
