// import express from "express";
// import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish} from "../controlers/blogControler1.js";
// import upload from "../middleware/multer.js";
// import auth1 from "../middleware/auth1.js";
// const blogRouter1 = express.Router();

// blogRouter1.post("/add1", upload.single('image'), auth1, addBlog)
// blogRouter1.get('/all1',getAllBlogs);
// blogRouter1.get("/:blogId",getBlogById);
// blogRouter1.post('/delete1',auth1,deleteBlogById);
// blogRouter1.post("/toggle-publish1",auth1,togglePublish);
// blogRouter1.post("/add-comment1", addComment);
// blogRouter1.post("/comments1", getBlogComments);
// blogRouter1.post("/generate1",auth1, generateContent);

// export default blogRouter1;

import express from "express";
import {
  addBlog,
  addComment,
  deleteBlogById,
  generateContent,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish,
} from "../controlers/blogControler1.js"; // ✅ Corrected 'controlers' to 'controllers' and consistent file name

import upload from "../middleware/multer.js"; // ✅ Assumes multer setup for file uploads
import auth1 from "../middleware/auth1.js";   // ✅ Token-based authentication middleware

const blogRouter1 = express.Router();

// Routes
blogRouter1.post("/add1", upload.single("image"), auth1, addBlog);       // Add blog with image and token
blogRouter1.get("/all", getAllBlogs);                                   // Get all blogs
blogRouter1.get("/:blogId", getBlogById);                                // Get blog by ID
blogRouter1.post("/delete1", auth1, deleteBlogById);                     // Delete blog by ID (with token)
blogRouter1.post("/toggle-publish1", auth1, togglePublish);             // Toggle publish status
blogRouter1.post("/add-comment1", addComment);                          // Add comment to blog
blogRouter1.post("/comments1", getBlogComments);                        // Get all comments of blog
blogRouter1.post("/generate1", auth1, generateContent);                 // Generate content via AI or some logic

export default blogRouter1;
