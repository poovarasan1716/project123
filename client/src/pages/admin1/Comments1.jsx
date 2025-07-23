// import React, { useEffect, useState } from 'react'
// import { comments_data } from '../../assets/assets'
// import CommentTableItem1 from '../../components/admin1/CommentTableItem1'
// import { useAppContext1 } from '../../context/AppContext1'
// import toast from 'react-hot-toast'

// const Comments1 = () => {
   
//   const [comments,setComments] = useState([])
//   const [filter,setFilter] = useState('Not Approved')

//   const {axios} = useAppContext1();

//   const fetchComments = async ()=>{
//     try {
//       const {data} = await axios.get('/api/admin1/comments1')
//       data.success ? setComments(data.comments) : toast.error(data.message)
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   useEffect(()=>{
//     fetchComments()
//   },[])

//   return (
//     <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
// <div className='flex justify-between items-center max-w-3xl'>
// <h1>Comments</h1>
// <div className='flex gap-4'>
// <button onClick={()=> setFilter('Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-x5 ${filter === 'Approved' ? 'text-primary' : 'text-gray-700'}`}>Approved</button>
// <button onClick={()=> setFilter('Not Approved')} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-x5 ${filter === 'Not Approved' ? 'text-primary' : 'text-gray-700'}`}> Not Approved</button>
// </div>
// </div>
// <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
// <table className='w-full text-sm text-gray-500'>
//   <thead className='text-xs text-gray-700 text-left uppercase'>
//     <tr>
//       <th scope='col' className='px-6 py-3'>Blog Title & Comment</th>
//       <th scope='col' className='px-6 py-3 max-sm:hidden'>Date</th>
//       <th scope='col' className='px-6 py-3'>Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     {comments.filter((comment)=>{
//       if(filter === "Approved") return comment.isApproved === true;
//       return comment.isApproved === false;
//     }).map((comment,index)=><CommentTableItem1 key={comment._id} comment={comment} index={index+1} fetchComments={fetchComments}/>)}
//   </tbody>
// </table>
// </div>
//     </div>
//   )
// }

// export default Comments1


import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets' // adjust if needed
import CommentTableItem1 from '../../components/admin1/CommentTableItem1'
import { useAppContext1 } from '../../context/AppContext1'
import toast from 'react-hot-toast'

const Comments1 = () => {
  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')

  const { axios } = useAppContext1()

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/admin1/comments1')
      if (data.success) {
        setComments(data.comments)
      } else {
        toast.error(data.message || 'Failed to fetch comments')
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred')
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <div className="flex justify-between items-center max-w-3xl">
        <h1 className="text-xl font-semibold">Comments</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter('Approved')}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-sm ${
              filter === 'Approved' ? 'text-primary' : 'text-gray-700'
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter('Not Approved')}
            className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-sm ${
              filter === 'Not Approved' ? 'text-primary' : 'text-gray-700'
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      <div className="relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-700 text-left uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Blog Title & Comment
              </th>
              <th scope="col" className="px-6 py-3 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {comments
              .filter((comment) =>
                filter === 'Approved' ? comment.isApproved : !comment.isApproved
              )
              .map((comment, index) => (
                <CommentTableItem1
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comments1
