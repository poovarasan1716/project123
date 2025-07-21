import express from "express";
import { adminLogin1, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controlers/admin1Controler.js";
import auth1 from "../middleware/auth1.js";
const admin1Router = express.Router();

admin1Router.post("/login",adminLogin1);
admin1Router.get("/comments", auth1, getAllComments);
admin1Router.get("/blogs", auth1, getAllBlogsAdmin);
admin1Router.post("/delete-comment", auth1, deleteCommentById);
admin1Router.post("/approve-comment", auth1, approveCommentById);
admin1Router.get("/dashboard", auth1, getDashboard);



export default admin1Router;