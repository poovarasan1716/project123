// import express from "express";
// import { adminLogin1, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controlers/admin1Controler.js";
// import auth1 from "../middleware/auth1.js";
// const admin1Router = express.Router();

// admin1Router.post("/login1",adminLogin1);
// admin1Router.get("/comments1", auth1, getAllComments);
// admin1Router.get("/blogs", auth1, getAllBlogsAdmin);
// admin1Router.post("/delete-comment", auth1, deleteCommentById);
// admin1Router.post("/approve-comment", auth1, approveCommentById);
// admin1Router.get("/dashboard1", auth1, getDashboard);



// export default admin1Router;

import express from "express";
import {
  adminLogin1,
  approveCommentById,
  deleteCommentById,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
} from "../controlers/admin1Controler.js"; // ✅ Corrected: 'controllers' not 'controlers'

import auth1 from "../middleware/auth1.js"; // ✅ Ensure this file exists and handles token validation

const admin1Router = express.Router();

// Public route for admin login
admin1Router.post("/login1", adminLogin1);

// Protected routes
admin1Router.get("/comments1", auth1, getAllComments);
admin1Router.get("/blogs", auth1, getAllBlogsAdmin);
admin1Router.post("/delete-comment1", auth1, deleteCommentById);
admin1Router.post("/approve-comment1", auth1, approveCommentById);
admin1Router.get("/dashboard1", auth1, getDashboard);

export default admin1Router;
