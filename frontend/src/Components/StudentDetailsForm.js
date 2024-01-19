import React, { useState } from "react";
import axios from "axios";

const StudentDetailsForm = ({ studentId, onFormSubmit }) => {
  const [homeworkData, setHomeworkData] = useState({
    assignment_name: "",
    description: "",
    due_date: "",
  });

  const [attendanceData, setAttendanceData] = useState({
    attendance_date: "",
    is_present: "",
  });

  const [quranProgressData, setQuranProgressData] = useState({
    chapter_number: "",
    is_completed: "",
    grade: "",
  });

  const handleHomeworkSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:6500/homework/${studentId}`,
        homeworkData
      );
      onFormSubmit(); // Fetch data again after form submission
    } catch (error) {
      console.error("Error submitting homework:", error);
    }
  };

  const handleAttendanceSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:6500/attendance/${studentId}`,
        attendanceData
      );
      onFormSubmit(); // Fetch data again after form submission
    } catch (error) {
      console.error("Error submitting attendance:", error);
    }
  };

  const handleQuranProgressSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:6500/QuranProgress/${studentId}`,
        quranProgressData
      );
      onFormSubmit(); // Fetch data again after form submission
    } catch (error) {
      console.error("Error submitting Quran progress:", error);
    }
  };

  return (
    <div>
      {/* Homework Form */}
      <form onSubmit={handleHomeworkSubmit}>
        <h3>Homework Form</h3>
        <label>
          Assignment Name:
          <input
            type="text"
            value={homeworkData.assignment_name}
            onChange={(e) =>
              setHomeworkData({
                ...homeworkData,
                assignment_name: e.target.value,
              })
            }
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={homeworkData.description}
            onChange={(e) =>
              setHomeworkData({ ...homeworkData, description: e.target.value })
            }
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={homeworkData.due_date}
            onChange={(e) =>
              setHomeworkData({ ...homeworkData, due_date: e.target.value })
            }
          />
        </label>
        <button type="submit">Submit Homework</button>
      </form>

      {/* Attendance Form */}
      <form onSubmit={handleAttendanceSubmit}>
        <h3>Attendance Form</h3>
        <label>
          Attendance Date:
          <input
            type="date"
            value={attendanceData.attendance_date}
            onChange={(e) =>
              setAttendanceData({
                ...attendanceData,
                attendance_date: e.target.value,
              })
            }
          />
        </label>
        <label>
          Is Present:
          <input
            type="checkbox"
            checked={attendanceData.is_present}
            onChange={(e) =>
              setAttendanceData({
                ...attendanceData,
                is_present: e.target.checked,
              })
            }
          />
        </label>
        <button type="submit">Submit Attendance</button>
      </form>

      {/* Quran Progress Form */}
      <form onSubmit={handleQuranProgressSubmit}>
        <h3>Quran Progress Form</h3>
        <label>
          Chapter Number:
          <input
            type="text"
            value={quranProgressData.chapter_number}
            onChange={(e) =>
              setQuranProgressData({
                ...quranProgressData,
                chapter_number: e.target.value,
              })
            }
          />
        </label>
        <label>
          Is Completed:
          <input
            type="checkbox"
            checked={quranProgressData.is_completed}
            onChange={(e) =>
              setQuranProgressData({
                ...quranProgressData,
                is_completed: e.target.checked,
              })
            }
          />
        </label>
        <label>
          Grade:
          <input
            type="text"
            value={quranProgressData.grade}
            onChange={(e) =>
              setQuranProgressData({
                ...quranProgressData,
                grade: e.target.value,
              })
            }
          />
        </label>
        <button type="submit">Submit Quran Progress</button>
      </form>
    </div>
  );
};

export default StudentDetailsForm;
