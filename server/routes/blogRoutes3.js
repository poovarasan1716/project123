import express from "express";
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controlers/blogControler.js";
import upload from "../middleware/multer.js";
import auth3 from "../middleware/auth3.js";
const blogRouter3 = express.Router();

blogRouter3.post("/add3", upload.single('image'), auth3, addBlog)
blogRouter3.get('/all',getAllBlogs);
blogRouter3.get("/:blogId",getBlogById);
blogRouter3.post('/delete3',auth3,deleteBlogById);
blogRouter3.post("/toggle-publish3",auth3,togglePublish);
blogRouter3.post("/add-comment3", addComment);
blogRouter3.post("/comments3", getBlogComments);
blogRouter3.post("/generate3",auth3, generateContent);

export default blogRouter3;