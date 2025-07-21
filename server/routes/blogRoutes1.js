import express from "express";
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish} from "../controlers/blogControler.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth1.js";
const blogRouter1 = express.Router();

blogRouter1.post("/add", upload.single('image'), auth, addBlog)
blogRouter1.get('/all',getAllBlogs);
blogRouter1.get("/:blogId",getBlogById);
blogRouter1.post('/delete',auth,deleteBlogById);
blogRouter1.post("/toggle-publish",auth,togglePublish);
blogRouter1.post("/add-comment", addComment);
blogRouter1.post("/comments", getBlogComments);
blogRouter1.post("/generate",auth, generateContent);

export default blogRouter1;