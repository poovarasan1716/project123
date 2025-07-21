import express from "express";
import { adminLogin2, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controlers/admin2Controler.js";
import auth2 from "../middleware/auth2.js";
const admin2Router = express.Router();

admin2Router.post("/login",adminLogin2);
admin2Router.get("/comments", auth2, getAllComments);
admin2Router.get("/blogs", auth2, getAllBlogsAdmin);
admin2Router.post("/delete-comment", auth2, deleteCommentById);
admin2Router.post("/approve-comment", auth2, approveCommentById);
admin2Router.get("/dashboard", auth2, getDashboard);



export default admin2Router;