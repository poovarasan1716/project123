import express from "express";
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controlers/blogControler.js";
import upload from "../middleware/multer.js";
import auth2 from "../middleware/auth2.js";
const blogRouter2 = express.Router();

blogRouter2.post("/add2", upload.single('image'), auth2, addBlog)
blogRouter2.get('/all',getAllBlogs);
blogRouter2.get("/:blogId",getBlogById);
blogRouter2.post('/delete2',auth2,deleteBlogById);
blogRouter2.post("/toggle-publish2",auth2,togglePublish);
blogRouter2.post("/add-comment2", addComment);
blogRouter2.post("/comments2", getBlogComments);
blogRouter2.post("/generate2",auth2, generateContent);

export default blogRouter2;