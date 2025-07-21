// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const BlogCard = ({ blog }) => {
//     const { title, description, category, image, _id } = blog;
//     const navigate = useNavigate()
//     return (
//         <div 
//             onClick={() => navigate(`/blog/${_id}`)} 
//             className='w-full h-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer flex flex-col'
//         >
//             <img src={image} alt='' className='aspect-video w-full object-cover'/>
//             <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs self-start'>{category}</span>
//             <div className='p-5 flex-1'>
//                 <h5 className='mb-2 font-medium text-gray-900 line-clamp-2'>{title}</h5>
//                 <p className='mb-3 text-xs text-gray-600 line-clamp-3' dangerouslySetInnerHTML={{ "__html": description.slice(0, 80) }}></p>
//             </div>
//         </div>
//     )
// }

// // Example usage in a parent component
// const BlogList = ({ blogs }) => {
//     return (
//         <div className="container mx-auto px-4 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {blogs.slice(0, 3).map(blog => (
//                     <BlogCard key={blog._id} blog={blog} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default BlogCard


import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();
  return (
    <div className='w-full flex'>
      <div 
      onClick={() => navigate(`/blog/${_id}`)}
      className='w-[400px] h-full  rounded-xl overflow-hidden shadow-lg hover:scale-[1.08] hover:shadow-primary/80 duration-300 cursor-pointer bg-white'
      style={{ minHeight: '400px' }}
    >
      <img 
        src={image} 
        alt={title} 
        className='w-full h-52 object-cover'
      />
      <div className='p-6 flex flex-col flex-1'>
        <span className='px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4 self-start'>
          {category}
        </span>
        <h5 className='mb-3 text-xl font-semibold text-gray-900 line-clamp-2'>{title}</h5>
        <p 
          className='mb-4 text-gray-600 line-clamp-3 text-base'
          dangerouslySetInnerHTML={{ "__html": description.slice(0, 150) }}
        />
        <div className='mt-auto text-primary font-medium text-sm hover:underline'>
          Read More →
        </div>
      </div>
    </div>
    </div>
  );
};

export const BlogGrid = ({ blogs }) => {
  return (
    <div className="max-w-[1800px] mx-auto px-6 py-12">
      {/* ONLY THIS LINE CHANGED - Updated gap value */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-12">
        {blogs.map(blog => (
          <div key={blog._id} className="flex justify-center">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const BlogCard = ({ blog }) => {
//   const { title, description, category, image, _id } = blog;
//   const navigate = useNavigate();
  
//   return (
//     <motion.div 
//       onClick={() => navigate(`/blog/${_id}`)}
//       className='w-[300px] h-full rounded-xl overflow-hidden shadow-lg flex flex-col bg-white border border-gray-100'
//       style={{ minHeight: '400px' }}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ 
//         y: -10,
//         boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
//         transition: { duration: 0.3 }
//       }}
//       whileTap={{ scale: 0.98 }}
//       transition={{ type: "spring", stiffness: 100 }}
//     >
//       <motion.div
//         className="overflow-hidden"
//         whileHover={{ scale: 1.05 }}
//         transition={{ duration: 0.3 }}
//       >
//         <img 
//           src={image} 
//           alt={title} 
//           className='w-full h-52 object-cover'
//         />
//       </motion.div>
      
//       <div className='p-6 flex flex-col flex-1'>
//         <motion.span 
//           className='px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-800 text-sm font-medium mb-4 self-start'
//           whileHover={{ scale: 1.05 }}
//         >
//           {category}
//         </motion.span>
        
//         <motion.h5 
//           className='mb-3 text-xl font-semibold text-gray-900 line-clamp-2'
//           whileHover={{ color: "#6366f1" }}
//         >
//           {title}
//         </motion.h5>
        
//         <motion.p 
//           className='mb-4 text-gray-600 line-clamp-3 text-base'
//           dangerouslySetInnerHTML={{ "__html": description.slice(0, 150) }}
//         />
        
//         <motion.div 
//           className='mt-auto text-blue-600 font-medium text-sm flex items-center'
//           whileHover={{ x: 5 }}
//         >
//           Read More 
//           <motion.span 
//             className="ml-1"
//             animate={{ x: [0, 5, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             →
//           </motion.span>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export const BlogGrid = ({ blogs }) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <div className="max-w-[1800px] mx-auto px-6 py-12">
//       <motion.div 
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {blogs.map((blog, index) => (
//           <motion.div 
//             key={blog._id} 
//             className="flex justify-center"
//             variants={{
//               hidden: { opacity: 0, y: 50 },
//               visible: { opacity: 1, y: 0 }
//             }}
//           >
//             <BlogCard blog={blog} />
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default BlogCard;



















// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const BlogCard = ({ blog }) => {
//   const { title, description, category, image, _id } = blog;
//   const navigate = useNavigate();
//   return (
//     <div 
//       onClick={() => navigate(`/blog/${_id}`)}
//       className='w-full h-full rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] hover:shadow-primary/80 duration-300 cursor-pointer flex flex-col bg-white'
//       style={{ minHeight: '400px' }}
//     >
//       <img 
//         src={image} 
//         alt={title} 
//         className='w-full h-52 object-cover'
//       />
//       <div className='p-6 flex flex-col flex-1'>
//         <span className='px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4 self-start'>
//           {category}
//         </span>
//         <h5 className='mb-3 text-xl font-semibold text-gray-900 line-clamp-2'>{title}</h5>
//         <p 
//           className='mb-4 text-gray-600 line-clamp-3 text-base'
//           dangerouslySetInnerHTML={{ "__html": description.slice(0, 150) }}
//         />
//         <div className='mt-auto text-primary font-medium text-sm hover:underline'>
//           Read More →
//         </div>
//       </div>
//     </div>
//   );
// };

// export const BlogGrid = ({ blogs }) => {
//   return (
//     <div className="w-full py-12 ">
//       <div className="mx-auto max-w-[1200px] px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mx-2">
//           {blogs.map((blog) => (
//             <div 
//               key={blog._id} 
//               className="px-2"
//             >
//               <BlogCard blog={blog} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;