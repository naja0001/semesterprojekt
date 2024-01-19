// Logout.js
import { Router } from "express";

const LogoutRouter = Router();

LogoutRouter.get("/logout", (req, res) => {
  // In your /logout route handler

  console.log("Logout route hit");
  res.clearCookie("token");
  res.status(200).json({ status: "Success", message: "Logout successful" });
});

export default LogoutRouter;
