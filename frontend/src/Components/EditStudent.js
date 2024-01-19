import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams(); // Add this line to get the 'id' from URL parameters

  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    number: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:6500/students")
      .then((result) => {
        if (result.data.Status) {
          setStudent(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:6500/students/" + id)
      .then((result) => {
        setStudent((prevStudent) => ({
          ...prevStudent,
          firstname: result.data.Result[0].name,
          lastname: result.data.Result[0].lastname,
          email: result.data.Result[0].email,
          gender: result.data.Result[0].gender,
          number: result.data.Result[0].number,
          student_id: result.data.Result[0].student_id,
        }));
      })
      .catch((err) => console.log(err));
  }, [id, student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:6500/edit_student/" + id, student)
      .then((result) => {
        if (result.data.Status) {
          navigate("/sidebar/students");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Student</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              firstname
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter firstname"
              value={student.name}
              onChange={(e) =>
                setStudent({ ...student, firstname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Lastname
            </label>
            <input
              type="Lastname"
              className="form-control rounded-0"
              id="inputLastname"
              placeholder="Enter lastname"
              autoComplete="off"
              value={student.lastname}
              onChange={(e) =>
                setStudent({ ...student, lastname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputSalary" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="imputEmail"
              placeholder="Enter Email"
              autoComplete="off"
              value={student.email}
              onChange={(e) =>
                setStudent({ ...student, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputGender" className="form-label">
              gender
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputGender"
              placeholder="Enter gender"
              autoComplete="off"
              value={student.gender}
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputNumber" className="form-label">
              Number
            </label>
            <input
              type="number"
              className="form-control rounded-0"
              id="inputNumber"
              placeholder="Enter number"
              autoComplete="off"
              value={student.number}
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="student" className="form-label">
              Student
            </label>
            <select
              name="student"
              id="student"
              className="form-select"
              onChange={(e) =>
                setStudent({ ...student, student_id: e.target.value })
              }
            >
              {student.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
