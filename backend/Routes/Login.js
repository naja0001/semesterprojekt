import { Router } from "express";
import mysql from "mysql2";
import dbConfig from "../db-connect.js";
import jwt from "jsonwebtoken";

const LoginRouter = Router();

LoginRouter.post("/", (req, res) => {
  const { email, password } = req.body; // Destructure email and password from req.body
  const sql = "SELECT * from login Where email = ? and password = ?";
  console.log("SQL Query:", sql);
  // Pass email and password directly as an array to dbConfig.query
  dbConfig.query(sql, [email, password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "teachers", email: email },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie("token", token);
      return res.json({ loginStatus: true });
    } else {
      return res.json({ loginStatus: false, Error: "wrong email or password" });
    }
  });
});

export default LoginRouter;
