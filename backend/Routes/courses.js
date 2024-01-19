import { Router } from "express";
import mysql from "mysql2";
import dbConfig from "../db-connect.js";

const coursesRouter = Router();

coursesRouter.get("/", (req, res) => {
  dbConfig.query("SELECT * FROM Courses", (err, results) => {
    if (err) {
      console.error("Error fetching courses:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

coursesRouter.post("/courses", (req, res) => {
  const { course_name } = req.body;

  if (!course_name) {
    return res.status(400).json({ error: "Course name is required" });
  }

  dbConfig.query(
    "INSERT INTO Courses (course_name) VALUES (?)",
    [course_name],
    (err, result) => {
      if (err) {
        console.error("Error adding course:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json({ id: result.insertId });
      }
    }
  );
});

coursesRouter.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  const { course_name } = req.body;

  if (!course_name) {
    return res.status(400).json({ error: "Course name is required" });
  }

  dbConfig.query(
    "UPDATE Courses SET course_name = ? WHERE id = ?",
    [course_name, id],
    (err) => {
      if (err) {
        console.error("Error updating course:", err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.json({ success: true });
      }
    }
  );
});

coursesRouter.delete("/courses/:id", (req, res) => {
  const { id } = req.params;

  dbConfig.query("DELETE FROM Courses WHERE id = ?", [id], (err) => {
    if (err) {
      console.error("Error deleting course:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ success: true });
    }
  });
});

export default coursesRouter;
