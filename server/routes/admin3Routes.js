import express from "express";
import { adminLogin3, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controlers/admin3Controler.js";
import auth3 from "../middleware/auth3.js";
const admin3Router = express.Router();

admin3Router.post("/login3",adminLogin3);
admin3Router.get("/comments3", auth3, getAllComments);
admin3Router.get("/blogs", auth3, getAllBlogsAdmin);
admin3Router.post("/delete-comment3", auth3, deleteCommentById);
admin3Router.post("/approve-comment3", auth3, approveCommentById);
admin3Router.get("/dashboard3", auth3, getDashboard);



export default admin3Router;