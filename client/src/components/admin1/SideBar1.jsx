// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { assets } from '../../assets/assets'

// const SideBar1 = () => {
//   return (
//     <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
//     <NavLink end={true} to='/admin1' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
//         <img src={assets.home_icon} className='min-w-4 w-5'/>
//         <p className='hidden md:inline-block'>Dashboard</p>
//     </NavLink>
    
//     <NavLink  to='/admin1/addBlog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
//         <img src={assets.add_icon} className='min-w-4 w-5'/>
//         <p className='hidden md:inline-block'>AddBlog</p>
//     </NavLink>
    
//     {/* <NavLink  to='/admin1/listBlog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
//         <img src={assets.list_icon} className='min-w-4 w-5'/>
//         <p className='hidden md:inline-block'>ListBlog</p>
//     </NavLink> */}

//     <NavLink  to='/admin1/comments' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
//         <img src={assets.comment_icon} className='min-w-4 w-5'/>
//         <p className='hidden md:inline-block'>Comments</p>
//     </NavLink>
    
//     </div>
//   )
// }

// export default SideBar1



import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SideBar1 = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
    <NavLink end={true} to='/admin1' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <img src={assets.home_icon} className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>Dashboard</p>
    </NavLink>
    
    <NavLink  to='/admin1/addBlog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <img src={assets.add_icon} className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>AddBlog</p>
    </NavLink>
    
    <NavLink  to='/admin1/listBlog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <img src={assets.list_icon} className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>ListBlog</p>
    </NavLink>

    <NavLink  to='/admin1/comments' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <img src={assets.comment_icon} className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>Comments</p>
    </NavLink>
    
    </div>
  )
}

export default SideBar1