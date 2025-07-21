// import React from 'react'
// import {assets} from '../assets/assets'
// import {useNavigate} from 'react-router-dom'
// import { useAppContext } from '../context/AppContext'
// const Navbar = () => {

//    const {navigate, token} = useAppContext()

//   return (
//     <div className='bg-gradient-to-r from-sky-900 to-blue-800 text-white shadow-md'>
//           {/* <img  onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer'/> */}
//           <div className='container mx-auto px-4 py-6 max-w-7xl'>
//             <div className='flex justify-between items-center'>
//            <h1 className="text-3xl font-bold">Panimalar Events Portal</h1>
//              {/* <img  onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-32 sm:w-44 cursor-pointer'/> */}
//            <div className='hidden md:flex space-x-6'>
//           <button onClick={()=>navigate('/admin')}  className="text-white hover:text-blue-200 transition cursor-pointer whitespace-nowrap">
//             {token ? 'Dashboard' : 'Login'}
//             {/* <img src={assets.arrow} className='w-3' alt='arrow'/> */}
//           </button>
//            <button onClick={()=>navigate('/admin1')} className="text-white hover:text-blue-200 transition cursor-pointer whitespace-nowrap">
//              {token ? 'DS Club' : 'Login'}
//            </button>
//               <button onClick={()=>navigate('/admin')} className="text-white hover:text-blue-200 transition cursor-pointer whitespace-nowrap">
//                  {token ? 'AI club' : 'Login'}
//               </button>
//           </div>
//            </div>
//           </div>
//     </div>
  
//   )
// }

// export default Navbar


// import React from 'react';
// import { assets } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { useAppContext } from '../context/AppContext';

// const Navbar = () => {
//   const { navigate, token } = useAppContext();

//   return (
//     <div className='bg-gradient-to-r from-indigo-900 to-purple-800 shadow-lg'>
//       <div className='container mx-auto px-4 py-4 max-w-7xl'>
//         <div className='flex justify-between items-center'>
//           {/* Logo/Title with hover effect */}
//           <div 
//             onClick={() => navigate('/')} 
//             className='flex items-center space-x-2 cursor-pointer group'
//           >
//             {/* Uncomment if using a logo */}
//             {/* <img src={assets.logo} alt="logo" className='w-10 h-10 sm:w-12 sm:h-12' /> */}
//             <h1 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-200 transition-all">
//               Panimalar Events Portal
//             </h1>
//           </div>

//           {/* Navigation Buttons */}
//           <div className='hidden md:flex space-x-4 items-center'>
//             <button 
//               onClick={() => navigate('/admin')} 
//               className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-105 shadow-sm"
//             >
//               {token ? 'Dashboard' : 'Login'}
//             </button>
//             <button 
//               onClick={() => navigate('/admin1')} 
//               className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all hover:scale-105 shadow-sm"
//             >
//               {token ? 'DS Club' : 'Register'}
//             </button>
//             <button 
//               onClick={() => navigate('/admin')} 
//               className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all hover:scale-105 shadow-sm"
//             >
//               {token ? 'AI Club' : 'Events'}
//             </button>
//           </div>

//           {/* Mobile Menu Button (Optional) */}
//           <button className='md:hidden text-white'>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { useAppContext } from '../context/AppContext';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const { navigate, token } = useAppContext();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { 
//       path: '/admin', 
//       text: token ? 'Dashboard' : 'Login',
//       bg: 'bg-white/10 hover:bg-white/20'
//     },
//     { 
//       path: '/admin1', 
//       text: token ? 'DS Club' : 'Register',
//       bg: 'bg-indigo-600 hover:bg-indigo-700'
//     },
//     { 
//       path: '/admin', 
//       text: token ? 'AI Club' : 'Events',
//       bg: 'bg-purple-600 hover:bg-purple-700'
//     }
//   ];

//   return (
//     <div className='bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 shadow-lg sticky top-0 z-50'>
//       <div className='container mx-auto px-4 py-3 max-w-7xl'>
//         <div className='flex justify-between items-center'>
//           {/* Logo/Title with enhanced hover effect */}
//           <motion.div 
//             onClick={() => navigate('/')} 
//             className='flex items-center space-x-2 cursor-pointer group'
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {/* Uncomment if using a logo */}
//             {/* <motion.img 
//               src={assets.logo} 
//               alt="logo" 
//               className='w-10 h-10 sm:w-12 sm:h-12'
//               animate={{ rotate: [0, 10, -10, 0] }}
//               transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
//             /> */}
//             <motion.h1 
//               className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-200 transition-all"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="text-white">
//                 Panimalar
//               </span>{' '}
//               <span className="text-white">Events</span>
//             </motion.h1>
//           </motion.div>

//           {/* Desktop Navigation Buttons */}
//           <div className='hidden md:flex space-x-4 items-center'>
//             {navItems.map((item, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => navigate(item.path)}
//                 className={`px-5 py-2.5 rounded-lg text-white font-medium transition-all shadow-sm ${item.bg}`}
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.3 }}
//               >
//                 {item.text}
//               </motion.button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button 
//             className='md:hidden text-white p-2'
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//             </svg>
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div 
//               className='md:hidden mt-4 space-y-3 pb-4'
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {navItems.map((item, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => {
//                     navigate(item.path);
//                     setMobileMenuOpen(false);
//                   }}
//                   className={`w-full px-4 py-3 rounded-lg text-white font-medium transition-all ${item.bg}`}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.2 }}
//                 >
//                   {item.text}
//                 </motion.button>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { navigate, token } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      path: '/admin', 
      text: token ? 'Dashboard' : 'Admin',
    },
    { 
      path: '/admin1', 
      text: token ? 'DS Club' : 'DS Portal',
    },
    { 
      path: '/admin2', 
      text: token ? 'AI Club' : 'AI Portal',
    },
    { 
      path: '/admin3', 
      text: token ? 'AR-VR Club' : 'AR-VR Portal',
    }
  ];

  return (
    <div className='bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-3 max-w-7xl'>
        <div className='flex justify-between items-center'>
          {/* Logo/Title with enhanced hover effect */}
          <motion.div 
            onClick={() => navigate('/')} 
            className='flex items-center space-x-2 cursor-pointer group'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-200 transition-all"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white">
                Panimalar
              </span>{' '}
              <span className="text-white">Events</span>
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation Buttons */}
          <div className='hidden md:flex space-x-4 items-center'>
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => navigate(item.path)}
                className={`px-5 py-2.5 rounded-lg text-white font-medium transition-all bg-white/10 hover:bg-white/20`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {item.text}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className='md:hidden text-white p-2'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className='md:hidden mt-4 space-y-3 pb-4'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg text-white font-medium transition-all bg-white/10 hover:bg-white/20`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                >
                  {item.text}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;



// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAppContext } from '../context/AppContext';

// const Navbar = () => {
//   const { navigate, token } = useAppContext();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { 
//       path: '/admin', 
//       text: token ? 'Dashboard' : 'Login',
//       icon: token ? '📊' : '🔑'
//     },
//     { 
//       path: '/admin1', 
//       text: token ? 'DS Club' : 'Register',
//       icon: token ? '🧮' : '📝'
//     },
//     { 
//       path: '/admin', 
//       text: token ? 'AI Club' : 'Events',
//       icon: token ? '🤖' : '🎪'
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: -20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <motion.div 
//       className='bg-gradient-to-r from-indigo-800 to-purple-900 shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-90'
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", damping: 10 }}
//     >
//       <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-3'>
//         <div className='flex justify-between items-center'>
//           {/* Logo/Title with animation */}
//           <motion.div 
//             onClick={() => navigate('/')} 
//             className='flex items-center space-x-2 cursor-pointer'
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <motion.div 
//               className='bg-white/10 p-2 rounded-lg backdrop-blur-sm'
//               whileHover={{ rotate: 360 }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className='text-2xl'>🎓</span>
//             </motion.div>
//             <motion.h1 
//               className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               Panimalar <span className="font-extrabold">Events</span>
//             </motion.h1>
//           </motion.div>

//           {/* Desktop Navigation with staggered animations */}
//           <motion.div 
//             className='hidden md:flex space-x-3 items-center'
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {navItems.map((item, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => navigate(item.path)}
//                 className={`px-4 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2
//                   ${index === navItems.length - 1 ? 
//                     'bg-gradient-to-r from-pink-500 to-rose-500 text-white' : 
//                     'bg-white/10 hover:bg-white/20 text-white'}`}
//                 variants={itemVariants}
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 {item.text}
//               </motion.button>
//             ))}
//           </motion.div>

//           {/* Animated Mobile Menu Button */}
//           <motion.button 
//             className='md:hidden text-white p-2'
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth={2} 
//                 d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
//               />
//             </svg>
//           </motion.button>
//         </div>

//         {/* Animated Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div 
//               className='md:hidden mt-4 space-y-3 pb-4'
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ 
//                 opacity: 1, 
//                 height: "auto",
//                 transition: { type: "spring", bounce: 0.4 }
//               }}
//               exit={{ 
//                 opacity: 0, 
//                 height: 0,
//                 transition: { duration: 0.3 }
//               }}
//             >
//               {navItems.map((item, index) => (
//                 <motion.button
//                   key={index}
//                   onClick={() => {
//                     navigate(item.path);
//                     setMobileMenuOpen(false);
//                   }}
//                   className={`w-full px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3
//                     ${index === navItems.length - 1 ? 
//                       'bg-gradient-to-r from-pink-500 to-rose-500 text-white' : 
//                       'bg-white/10 hover:bg-white/20 text-white'}`}
//                   initial={{ x: -50, opacity: 0 }}
//                   animate={{ 
//                     x: 0, 
//                     opacity: 1,
//                     transition: { delay: index * 0.1 }
//                   }}
//                   whileHover={{ x: 5 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <span className="text-xl">{item.icon}</span>
//                   <span>{item.text}</span>
//                 </motion.button>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;