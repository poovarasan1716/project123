// import React from 'react'
// import { assets } from '../../assets/assets'
// import { Outlet, useNavigate } from 'react-router-dom'
// import SideBar1 from '../../components/admin1/SideBar1'
// import axios from 'axios'
// import { useAppContext1 } from '../../context/AppContext1';

// const Layout1 = () => {

//   const {axios, setToken, navigate} = useAppContext1();

//   const logout = ()=>{
//     localStorage.removeItem('token1');
//     axios.defaults.headers.common['Authorization'] = null;
//     setToken(null)
//     navigate('/')
//   }
    
//   return (
//    <>
//     <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
//         <img src={assets.logo} className='w-32 sm:w-40 cursor-pointer' onClick={()=> navigate('/')}/>
//         <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
//     </div>
//     <div className='flex h-[calc(100vh-70px)]'>
//       <SideBar1/>
//       <Outlet/>
//     </div>
//    </>
//   )
// }

// export default Layout1



import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar1 from '../../components/admin1/SideBar1'
import { useAppContext1 } from '../../context/AppContext1'

const Layout1 = () => {
  const navigate = useNavigate(); // Correct: from react-router-dom
  const { axios, setToken } = useAppContext1(); // axios & setToken from context

  const logout = () => {
    localStorage.removeItem('token1');
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null);
    navigate('/');
  }

  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img
          src={assets.logo}
          className='w-32 sm:w-40 cursor-pointer'
          onClick={() => navigate('/')}
          alt="Logo"
        />
        <button
          onClick={logout}
          className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'
        >
          Logout
        </button>
      </div>
      <div className='flex h-[calc(100vh-70px)]'>
        <SideBar1 />
        <Outlet />
      </div>
    </>
  );
}

export default Layout1;
