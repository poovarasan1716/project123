import jwt from 'jsonwebtoken';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';


export const adminLogin2 = async (req,res)=>{
    try {
        const {email2,password2} = req.body;

        if(email2 !== process.env.ADMIN_EMAIL2 || password2 !== process.env.ADMIN_PASSWORD2){
            return res.json({success: false, message: "Invalid Credentials"})
    }
    const token2 =jwt.sign({email2},process.env.JWT_SECRET2)
    res.json({success: true, token2})
    } catch (error) {
 res.json({success: false, message: error.message})
    }
}

export const getAllBlogsAdmin = async (req, res) =>{
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1});
        res.json({success: true, blogs})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getAllComments = async (req, res) =>{
    try {
        const comments = await Comment.find({}).populate("blog").sort({createdAt: -1});
        res.json({success: true, comments})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


export const getDashboard = async (req, res)=>{
    try {
        const recentBlogs = await Blog.find({}).sort( {createdAt: -1}).limit(5);
        const blogs = await Blog.countDocuments();
        const comments = await Comment.countDocuments()
        const drafts = await Blog.countDocuments({isPublished: false})

        const dashboardData = {
            blogs, comments, drafts, recentBlogs
        }
        res.json({success: true, dashboardData})
    } catch (error) {
          res.json({success: false, message: error.message})
    }
}


export const deleteCommentById = async (req, res) =>{
    try {
        const {id} = req.body;
        await Comment.findByIdAndDelete(id);
         res.json({success: true, message: "Comment deleted successfully"})
    } catch (error) {
         res.json({success: false, message: error.message})
    }
}


export const approveCommentById = async (req, res) =>{
    try {
        const {id} = req.body;
        await Comment.findByIdAndUpdate(id, {isApproved: true});
         res.json({success: true, message: "Comment approved successfully"})
    } catch (error) {
         res.json({success: false, message: error.message})
    }
}

