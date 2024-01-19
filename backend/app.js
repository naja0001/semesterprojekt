import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import LoginRouter from "./Routes/Login.js";
import StudentsRouter from "./Routes/students.js";
import teachersRouter from "./Routes/teachers.js";
import attendanceRouter from "./Routes/attendance.js";
import QuranProgressRouter from "./Routes/QuranProgress.js";
import homeworkRouter from "./Routes/homework.js";
import coursesRouter from "./Routes/courses.js";
import LogoutRouter from "./Routes/Logout.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/login", LoginRouter);
app.use("/logout", LogoutRouter);
app.use("/students", StudentsRouter);
app.use("/teachers", teachersRouter);
app.use("/attendance", attendanceRouter);
app.use("/QuranProgress", QuranProgressRouter);
app.use("/homework", homeworkRouter);
app.use("/courses", coursesRouter);

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.listen(6500, () => {
  console.log("connected to backend");
});
