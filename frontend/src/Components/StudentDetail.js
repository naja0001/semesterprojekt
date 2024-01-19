import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import GradeSelector from "./GradeSelector";
import DateSelector from "./DateSelector";

const StudentDetail = () => {
  const [homework, setHomework] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [QuranProgress, setQuranProgress] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const homeworkRes = await axios.get(
        `http://localhost:6500/homework/${id}`
      );
      const attendanceRes = await axios.get(
        `http://localhost:6500/attendance/${id}`
      );
      const quranProgressRes = await axios.get(
        `http://localhost:6500/QuranProgress/${id}`
      );
      console.log("Quran Progress API Response:", quranProgressRes.data);

      if (!Array.isArray(homeworkRes.data)) {
        console.error("Invalid homework data format:", homeworkRes.data);
        setHomework([]);
      } else {
        setHomework(homeworkRes.data);
      }

      if (Array.isArray(attendanceRes.data)) {
        setAttendance(attendanceRes.data);
      } else {
        console.error("Invalid attendance data format:", attendanceRes.data);
        console.log("Attendance data:", attendanceRes.data);
        setAttendance([]);
      }

      if (Array.isArray(quranProgressRes.data)) {
        setQuranProgress(quranProgressRes.data);
      } else {
        console.error(
          "Invalid Quran progress data format:",
          quranProgressRes.data
        );
        setQuranProgress([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);

  useEffect(() => {
    console.log("Homework data:", homework);
  }, [homework]);

  useEffect(() => {
    console.log("Attendance data:", attendance);
  }, [attendance]);

  useEffect(() => {
    console.log("QuranProgress data:", QuranProgress);
  }, [QuranProgress]);

  const handleEditHomework = (homeworkId) => {
    // Your logic here
    setIsModalOpen(true);
  };

  const handleAttendanceChange = (attendanceId, isPresent) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((item) =>
        item.id === attendanceId ? { ...item, is_present: isPresent } : item
      )
    );
  };

  const handleDateChange = (attendanceId, selectedDate) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((item) =>
        item.id === attendanceId
          ? { ...item, attendance_date: selectedDate }
          : item
      )
    );
  };

  const handleCompletionChange = (quranProgressId, isCompleted) => {
    setQuranProgress((prevQuranProgress) =>
      prevQuranProgress.map((item) =>
        item.id === quranProgressId
          ? { ...item, is_completed: isCompleted }
          : item
      )
    );
  };

  const handleSave = () => {
    // Add the logic to save the data or perform any other actions
    console.log("Save button clicked");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <h4 className="text-center text-primary mb-4">Student Management</h4>
      </div>

      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title className="text-center mb-4">Student Details</Card.Title>

          <div className="info-section mb-4">
            <h3>Homework:</h3>
            {homework.length > 0 ? (
              <ListGroup>
                {homework.map((item) => (
                  <ListGroup.Item key={item.homework_id}>
                    <strong>Assignment:</strong> {item.assignment_name} <br />
                    <strong>Description:</strong>{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />{" "}
                    <strong>Due:</strong> {item.due_date} <br />
                    <Button
                      variant="info"
                      onClick={() => handleEditHomework(item.homework_id)}
                    >
                      Edit
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p>No homework available.</p>
            )}
          </div>

          <div className="info-section mb-4">
            <h3>Attendance:</h3>
            {attendance.length > 0 ? (
              <ListGroup>
                {attendance.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <strong>Date:</strong>{" "}
                    <DateSelector
                      selectedDate={new Date(item.attendance_date)}
                      onDateChange={(date) => handleDateChange(item.id, date)}
                    />
                    <br />
                    <strong>Status:</strong>{" "}
                    <select
                      className="custom-select"
                      value={item.is_present.toString()}
                      onChange={(e) =>
                        handleAttendanceChange(
                          item.id,
                          e.target.value === "true"
                        )
                      }
                    >
                      <option value="true">Present</option>
                      <option value="false">Absent</option>
                    </select>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p>No attendance records available.</p>
            )}
          </div>

          <div className="info-section mb-4">
            <h3>Quran Progress:</h3>
            <GradeSelector
              onCompletionChange={(isCompleted) =>
                handleCompletionChange(QuranProgress[0]?.id, isCompleted)
              }
            />
            {QuranProgress.length > 0 ? (
              <ListGroup>
                {QuranProgress.map((item) => (
                  <ListGroup.Item key={item.id}>
                    Chapter: {item.chapter_number}, Completed:{" "}
                    {item.is_completed.toString()}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <p>No Quran progress available.</p>
            )}
          </div>
        </Card.Body>
        <Card.Footer className="bg-light d-flex justify-content-center">
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </Card.Footer>
      </Card>

      {/* Modal */}
      <Modal show={isModalOpen} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Homework</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your StudentDetailsForm component goes here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentDetail;
