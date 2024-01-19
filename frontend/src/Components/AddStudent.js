import React, { useEffect, useState } from "react";
import axios from "axios";

const AddStudent = () => {
  // Initialize student state with default values
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    number: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:6500/students")
      .then((result) => {
        if (result.data.Status) {
          // Assuming the students are in the 'students' property
          setStudent(result.data.students[0]); // Assuming you want to work with the first student
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("firstname", student.firstname);
    formData.append("lastname", student.lastname);
    formData.append("email", student.email);
    formData.append("gender", student.gender);
    formData.append("number", student.number);

    axios
      .post("http://localhost:6500/students", formData)
      .then((result) => {
        if (result.data.message) {
          // Student added successfully
          console.log(result.data.message);
        } else {
          // Error adding student
          console.error("Error adding student:", result.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add student. Please check the form and try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Student</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="student" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputfirstname"
              placeholder="Enter FirstName"
              value={student.firstname}
              onChange={(e) =>
                setStudent({ ...student, firstname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="student" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputlastname"
              placeholder="Enter LastName"
              value={student.lastname}
              onChange={(e) =>
                setStudent({ ...student, lastname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputemail"
              placeholder="Enter Email"
              autoComplete="off"
              value={student.email}
              onChange={(e) =>
                setStudent({ ...student, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputgender" className="form-label">
              Gender
            </label>
            <select
              className="form-control rounded-0"
              id="inputGender"
              value={student.gender}
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputnumber" className="form-label">
              Number
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputNumber"
              placeholder="Enter Number"
              value={student.number}
              onChange={(e) =>
                setStudent({ ...student, number: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
