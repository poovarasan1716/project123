import React, { useState } from 'react'
import { useAppContext1 } from '../../context/AppContext1'
import toast from 'react-hot-toast'

const Login1 = () => {
 

    const {axios, setToken} = useAppContext1();

    const[email1,setEmail] = useState('')
    const[password1,setPassword] = useState('')


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post('/api/admin1/login1', {email1, password1})

            if(data.success){
                setToken(data.token1)
                localStorage.setItem('token1', data.token1)
                axios.defaults.headers.common['Authorization'] = data.token1;
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
            <div className='flex flex-col items-center justify-center'>
            <div className='w-full py-6 text-center'>
                <h1 className='text-3xl font-bold'><span className='text-primary'>Ds club</span> Login</h1>
                <p className='font-light'>Enter your credentials to access the admin panel</p>
            </div>
            <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
             <div className='flex flex-col'>
                <label>Email</label>
                <input onChange={e=> setEmail(e.target.value)} value={email1}
                type='email' required placeholder='your email id' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
             </div>
             <div className='flex flex-col'>
                <label>Password</label>
                <input  onChange={e=> setPassword(e.target.value)} value={password1}
                type='password' required placeholder='your password' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
             </div>
             <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'>Login</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login1


// import React, { useState } from 'react';
// import { useAppContext1 } from '../../context/AppContext1';
// import toast from 'react-hot-toast';

// const Login1 = () => {
//   const { axios, setToken, navigate } = useAppContext1();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.post('/api/admin1/login1', { email, password });

//       if (data.success) {
//         setToken(data.token1);
//         localStorage.setItem('token1', data.token1);
//         axios.defaults.headers.common['Authorization'] = data.token1;
//         toast.success('Login successful!');
//         navigate('/dashboard1'); // Adjust path as needed
//       } else {
//         toast.error(data.message || 'Login failed!');
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-50">
//       <div className="w-full max-w-sm p-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
//         <div className="w-full py-6 text-center">
//           <h1 className="text-3xl font-bold">
//             <span className="text-primary">DS Club</span> Login
//           </h1>
//           <p className="text-gray-500 text-sm mt-1">Enter your credentials to access the admin panel</p>
//         </div>
//         <form onSubmit={handleSubmit} className="mt-6 w-full">
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               required
//               placeholder="Your email ID"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-primary"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-1">Password</label>
//             <input
//               type="password"
//               required
//               placeholder="Your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border-b-2 border-gray-300 outline-none focus:border-primary"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 font-medium bg-primary text-white rounded hover:bg-primary/90 transition-all"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login1;
