import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
  getTaskReport
} from "../controllers/task/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/task/create", protect, createTask);
router.get("/tasks", protect, getTasks);
router.get("/task/:id", protect, getTask);
router.get('/task/report', getTaskReport);
router.patch("/task/:id", protect, updateTask);
router.delete("/task/:id", protect, deleteTask);


export default router;




// import express from "express";
// import {
//   createTask,
//   deleteTask,
//   getTask,
//   getTasks,
//   updateTask,
//   getTaskReport, // Import the report controller
// } from "../controllers/task/taskController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/task/create", protect, createTask);
// router.get("/tasks", protect, getTasks);
// router.get("/task/:id", protect, getTask);
// router.patch("/task/:id", protect, updateTask);
// router.delete("/task/:id", protect, deleteTask);

// // Add the new route for generating task reports
// // router.get("/tasks/report", protect, getTaskReport); // Use the 'protect' middleware for authentication

// export default router;

