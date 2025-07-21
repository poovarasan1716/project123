import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import admin1Router from './routes/admin1Routes.js';
import admin2Router from './routes/admin2Routes.js';
import admin3Router from './routes/admin3Routes.js';
import blogRouter from './routes/blogRoutes.js';
import blogRouter1 from './routes/blogRoutes1.js';
import blogRouter2 from './routes/blogRoutes2.js';
import blogRouter3 from './routes/blogRoutes3.js';
const app = express();

await connectDB()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get('/',(req,res)=> res.send("API is Working"))
app.use('/api/admin', adminRouter)
app.use('/api/admin1', admin1Router)
app.use('/api/admin2', admin2Router)
app.use('/api/admin3', admin3Router)


app.use('/api/blog', blogRouter)
app.use('/api/blog', blogRouter1)
app.use('/api/blog', blogRouter2)
app.use('/api/blog', blogRouter3)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Server is running on port" + PORT);
})

export default app