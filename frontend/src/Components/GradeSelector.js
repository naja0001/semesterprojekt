// GradeSelector.js
import React, { useState } from "react";

const GradeSelector = ({ onCompletionChange }) => {
  const [selectedGrade, setSelectedGrade] = useState(""); // State to hold selected grade
  const [isCompleted, setIsCompleted] = useState(false);

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value); // Update selected grade when changed
  };

  const handleCompletionChange = () => {
    setIsCompleted(!isCompleted);
    onCompletionChange(!isCompleted);
  };

  return (
    <div>
      <label htmlFor="grade">Select Grade:</label>
      <select id="grade" value={selectedGrade} onChange={handleGradeChange}>
        <option value="">Select a Grade</option>
        <option value="Mumtaaz">Mumtaaz</option>
        <option value="Jayid Jiddan">Jayid Jiddan</option>
        <option value="Jayid">Jayid</option>
        <option value="Lam yahfad">Lam yahfad</option>
      </select>
      <input
        type="checkbox"
        id="completion"
        checked={isCompleted}
        onChange={handleCompletionChange}
      />
      <label htmlFor="completion">Completed</label>
    </div>
  );
};

export default GradeSelector;
