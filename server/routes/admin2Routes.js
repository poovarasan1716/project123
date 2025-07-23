import express from "express";
import { adminLogin2, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controlers/admin2Controler.js";
import auth2 from "../middleware/auth2.js";
const admin2Router = express.Router();

admin2Router.post("/login2",adminLogin2);
admin2Router.get("/comments2", auth2, getAllComments);
admin2Router.get("/blogs", auth2, getAllBlogsAdmin);
admin2Router.post("/delete-comment2", auth2, deleteCommentById);
admin2Router.post("/approve-comment2", auth2, approveCommentById);
admin2Router.get("/dashboard2", auth2, getDashboard);



export default admin2Router;