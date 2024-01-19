import { Router } from "express";
import mysql from "mysql2";
import dbConfig from "../db-connect.js";

const homeworkRouter = Router();

homeworkRouter.get("/", (req, res) => {
  const queryString = `
    SELECT * FROM Homework
  `;

  dbConfig.query(queryString, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        error: "An error occurred while fetching homework assignments",
      });
    } else {
      res.json(results);
    }
  });
});

// POST request to assign homework
homeworkRouter.post("/:id", (req, res) => {
  const studentsId = req.params.id;

  const { assignment_name, description, due_date } = req.body;

  const insertQuery = `
    INSERT INTO Homework (students_id, assignment_name, description, due_date)
    VALUES (?, ?, ?, ?)
  `;

  const values = [studentsId, assignment_name, description, due_date];

  dbConfig.query(insertQuery, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        error: "An error occurred while creating a new homework assignment",
      });
    } else {
      res
        .status(201)
        .json({ message: "Homework assignment created successfully" });
    }
  });
});
homeworkRouter.put("/:id", (req, res) => {
  const homeworkId = req.params.id;
  const { course_id, students_id, assignment_name, description, due_date } =
    req.body;

  const updateQuery = `
    UPDATE Homework
    SET course_id = ?, students_id = ?, assignment_name = ?, description = ?, due_date = ?
    WHERE homework_id = ?
  `;

  const values = [
    course_id,
    students_id,
    assignment_name,
    description,
    due_date,
    homeworkId,
  ];

  dbConfig.query(updateQuery, values, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        error: "An error occurred while updating the homework assignment",
      });
    } else {
      res.json({ message: "Homework assignment updated successfully" });
    }
  });
});

homeworkRouter.delete("/:id", (req, res) => {
  const homeworkId = req.params.id;

  const deleteQuery = `
    DELETE FROM Homework
    WHERE homework_id = ?
  `;

  dbConfig.query(deleteQuery, [homeworkId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({
        error: "An error occurred while deleting the homework assignment",
      });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ message: "Homework assignment not found" });
      } else {
        res.json({ message: "Homework assignment deleted successfully" });
      }
    }
  });
});

export default homeworkRouter;
