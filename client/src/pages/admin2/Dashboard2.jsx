// import React, { useEffect, useState } from 'react'
// import { assets,dashboard_data } from '../../assets/assets'
// import BlogTableItem2 from '../../components/admin2/BlogTableItem2'
// import { useAppContext2 } from '../../context/AppContext2'
// import toast from 'react-hot-toast'

// const Dashboard2 = () => {
//  const[dashboardData,setDashboardData]=useState(
//   {
//     blogs:0,
//     comments:0,
//     drafts:0,
//     recentBlogs:[]
//   }
//  )

//  const {axios} = useAppContext2()

//  const fetchDashboard = async()=>{
//   try {
//     const {data} = await axios.get('/api/admin2/dashboard2')
//     data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
//   } catch (error) {
//     toast.error(error.message)
//   }
//  }

// useEffect(()=>{
//   fetchDashboard()
// },[])

//   return (
//     <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
//       <div className='flex flex-wrap gap-4'>
//         <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
//             <img src={assets.dashboard_icon_1}/>
//             <div>
//               <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
//               <p className='text-gray-400 font-light'>Blogs</p>
//             </div>
//         </div>
//         <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
//             <img src={assets.dashboard_icon_2}/>
//             <div>
//               <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
//               <p className='text-gray-400 font-light'>Comments</p>
//             </div>
//         </div>
//         <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
//             <img src={assets.dashboard_icon_3}/>
//             <div>
//               <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
//               <p className='text-gray-400 font-light'>Drafts</p>
//             </div>
//         </div>
//       </div>

// <div>
//   <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
//     <img src={assets.dashboard_icon_4}/>
//     <p>Latest Blogs</p>
//   </div>
//   <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
//   <table className='w-full text-sm text-gray-500'>
//     <thead className='text-xs text-gray-600 text-left uppercase'>
// <tr>
//   <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
//   <th scope='col' className='px-2 py-4'>Blog Title</th>
//   <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
//   <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
//   <th scope='col' className='px-2 py-4'>Actions</th>
// </tr>
//     </thead>
//     <tbody>
//       {dashboardData.recentBlogs.map((blog,index)=>{
//         return <BlogTableItem2 key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index+1}/>
//       })}
//     </tbody>
//   </table>
//   </div>
// </div>

//     </div>
//   )
// }

// export default Dashboard2


import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import BlogTableItem2 from '../../components/admin2/BlogTableItem2';
import { useAppContext2 } from '../../context/AppContext2';
import toast from 'react-hot-toast';

// Define the fixed category you want to display
const TARGET_CATEGORY = "AI Club"; // Change this to your desired category name

const Dashboard2 = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const { axios } = useAppContext2();

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('/api/admin1/dashboard2');
      if (data.success) {
        setDashboardData(data.dashboardData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  // Filter blogs to show ONLY those from the TARGET_CATEGORY
  const filteredBlogs = dashboardData.recentBlogs.filter(
    (blog) => blog.category === TARGET_CATEGORY
  );

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      {/* Stats Cards */}
      <div className="flex flex-wrap gap-4 mb-8">
        {[
          { icon: assets.dashboard_icon_1, count: dashboardData.blogs, label: 'Blogs' },
          { icon: assets.dashboard_icon_2, count: dashboardData.comments, label: 'Comments' },
          { icon: assets.dashboard_icon_3, count: dashboardData.drafts, label: 'Drafts' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all"
          >
            <img src={item.icon} alt={item.label} />
            <div>
              <p className="text-xl font-semibold text-gray-600">{item.count}</p>
              <p className="text-gray-400 font-light">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Blogs Table (Only TARGET_CATEGORY) */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b">
          <img src={assets.dashboard_icon_4} alt="Latest Blogs" />
          <p className="text-gray-600">
            Blogs in "{TARGET_CATEGORY}" ({filteredBlogs.length})
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-600 uppercase">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Blog Title</th>
                <th className="px-6 py-3 text-left max-sm:hidden">Date</th>
                <th className="px-6 py-3 text-left max-sm:hidden">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog, index) => (
                  <BlogTableItem2
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboard}
                    index={index + 1}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    No blogs found in "{TARGET_CATEGORY}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;