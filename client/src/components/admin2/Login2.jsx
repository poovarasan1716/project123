import React, { useState } from 'react'
import { useAppContext2 } from '../../context/AppContext2';
import toast from 'react-hot-toast'

const Login2 = () => {
 

    const {axios, setToken} = useAppContext2();

    const[email2,setEmail] = useState('')
    const[password2,setPassword] = useState('')


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const {data} = await axios.post('/api/admin2/login2', {email2, password2})

            if(data.success){
                setToken(data.token2)
                localStorage.setItem('token2', data.token2)
                axios.defaults.headers.common['Authorization'] = data.token2;
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
                <h1 className='text-3xl font-bold'><span className='text-primary'>AI club</span> Login</h1>
                <p className='font-light'>Enter your credentials to access the admin panel</p>
            </div>
            <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
             <div className='flex flex-col'>
                <label>Email</label>
                <input onChange={e=> setEmail(e.target.value)} value={email2}
                type='email' required placeholder='your email id' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
             </div>
             <div className='flex flex-col'>
                <label>Password</label>
                <input  onChange={e=> setPassword(e.target.value)} value={password2}
                type='password' required placeholder='your password' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
             </div>
             <button type='submit' className='w-full py-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'>Login</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login2