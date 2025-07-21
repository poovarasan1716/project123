import express from "express";
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controlers/blogControler.js";
import upload from "../middleware/multer.js";
import auth3 from "../middleware/auth3.js";
const blogRouter3 = express.Router();

blogRouter3.post("/add", upload.single('image'), auth3, addBlog)
blogRouter3.get('/all',getAllBlogs);
blogRouter3.get("/:blogId",getBlogById);
blogRouter3.post('/delete',auth3,deleteBlogById);
blogRouter3.post("/toggle-publish",auth3,togglePublish);
blogRouter3.post("/add-comment", addComment);
blogRouter3.post("/comments", getBlogComments);
blogRouter3.post("/generate",auth3, generateContent);

export default blogRouter3;