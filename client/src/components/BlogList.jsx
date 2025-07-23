import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'
const BlogList = () => {



    const [menu,setMenu]= useState("All Event")
    const {blogs, input} = useAppContext()
    
    const filteredBlogs = ()=>{
      if(input === ''){
        return blogs
      }
      return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
    }

  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-4 my-10 relative'>
{blogCategories.map((items)=>
<div key={items} className='relative '>
<button
  onClick={() => setMenu(items)}
  className={`relative px-6 py-2.5 rounded-full font-medium transition cursor-pointer whitespace-nowrap text-lg 
    ${menu === items 
      ? 'bg-primary text-white' 
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
>
  {items}
  
  {menu === items && (
    <motion.div
      layoutId="underline"
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className="absolute left-0 right-0 top-0 h-7 -z-10  rounded-full"
    />
  )}
</button>

</div>)}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
{/* --- blog cards --- */}
{filteredBlogs().filter((blog)=> menu === "All Event" ? true: blog.category === menu).map((blog)=><BlogCard key={blog._id} blog={blog}/>)}
        </div>
    </div>
  )
}

export default BlogList;