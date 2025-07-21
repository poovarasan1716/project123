// import React, { useRef } from 'react';
// import { assets } from '../assets/assets';
// import { useAppContext } from '../context/AppContext';

// const Header = () => {
//   const { setInput, input } = useAppContext();
//   const inputRef = useRef();

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     setInput(inputRef.current.value);
//   };

//   const onClear = () => {
//     setInput('');
//     inputRef.current.value = '';
//   };

//   return (
//     <div className='min-h-screen'>
//       {/* ------------------ Hero Section ------------------ */}
//       <div  className='h-[600px] bg-gray-50'>
//       <section className="relative h-[600px] overflow-hidden mb-[30px]">
//         <video
//           className="absolute w-full h-[80%] object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source
//             src="https://panimalar.ac.in/assets/video/PEC-Homepage.mp4"
//             type="video/mp4"
//           />
//         </video>

//         <div className="container mx-auto px-4 h-full max-w-7xl relative">
//           <div className="flex items-center h-full">
//             <div className="text-white z-10 max-w-2xl">
//               <h2 className="text-6xl font-bold mb-6">
//                 Panimalar Engineering College Events
//               </h2>
//               <p className="text-2xl mb-8 leading-relaxed">
//                 Experience excellence in education through our diverse range of
//                 academic, cultural, and technical events. Join us in shaping the
//                 future of innovation and learning.
//               </p>

//               <div className="flex gap-4">
//                 <button
//                   onClick={() => {
//                     const eventsSection = document.getElementById('events-section');
//                     if (eventsSection) {
//                       eventsSection.scrollIntoView({ behavior: 'smooth' });
//                     }
//                   }}
//                   className="bg-primary hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg cursor-pointer"
//                 >
//                   Explore Events
//                 </button>

//                 <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg cursor-pointer">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </div>

//       {/* ------------------ Search Section (30px below Hero) ------------------ */}
//       <section id="events-section" className="px-8 sm:px-16 xl:px-24">
//         <div className="mx-8 pt-11 sm:mx-16 xl:mx-24 relative">
//           <div className="text-center mb-6">
//             <form
//               onSubmit={onSubmitHandler}
//               className="flex justify-between max-w-lg mx-auto border border-gray-300 bg-white rounded overflow-hidden max-sm:scale-75"
//             >
//               <input
//                 ref={inputRef}
//                 type="text"
//                 placeholder="Search for blogs"
//                 required
//                 className="w-full pl-4 py-2 outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer"
//               >
//                 Search
//               </button>
//             </form>
//           </div>

//           {input && (
//             <div className="text-center">
//               <button
//                 onClick={onClear}
//                 className="bg-primary text-white text-xs py-1 px-3 rounded-sm shadow-sm cursor-pointer"
//               >
//                 Clear Search
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Header;

// import React, { useRef } from 'react';
// import { useAppContext } from '../context/AppContext';

// const Header = () => {
//   const { setInput, input } = useAppContext();
//   const inputRef = useRef();

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     setInput(inputRef.current.value);
//   };

//   const onClear = () => {
//     setInput('');
//     inputRef.current.value = '';
//   };

//   return (
//     <div className='min-h-screen'>
//       {/* ------------------ Hero Section ------------------ */}
//       <section className="relative h-[700px] overflow-hidden mb-[10px] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
//         {/* Video with overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-0"></div>
//         <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
//           <video
//             className="h-full w-auto min-w-full min-h-full object-cover z-0"
//             autoPlay
//             muted
//             loop
//             playsInline
//           >
//             <source
//               src="https://panimalar.ac.in/assets/video/PEC-Homepage.mp4"
//               type="video/mp4"
//             />
//           </video>
//         </div>

//         {/* Hero content */}
//         <div className="container mx-auto px-4 h-full max-w-7xl relative z-10 flex items-center">
//           <div className="text-white max-w-2xl animate-fadeIn">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
//                 Panimalar Engineering College
//               </span>{' '}
//               <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Events</span>
//             </h1>
//             <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed text-white/90 font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
//               Experience excellence in education through our diverse range of
//               academic, cultural, and technical events. Join us in shaping the
//               future of innovation and learning.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={() => {
//                   const eventsSection = document.getElementById('events-section');
//                   if (eventsSection) {
//                     eventsSection.scrollIntoView({ behavior: 'smooth' });
//                   }
//                 }}
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
//               >
//                 Explore Events
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ------------------ Search Section ------------------ */}
//       <section id="events-section" className="px-4 sm:px-6 lg:px-8 xl:px-10 py-8 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-4xl mx-auto"> {/* Reduced container width */}
//           <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
//             Discover <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Exciting Events</span>
//           </h3>
          
//           <div className="relative max-w-lg mx-auto"> {/* Narrower search container */}
//             <form
//               onSubmit={onSubmitHandler}
//               className="flex items-center bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300"
//             >
//               <input
//                 ref={inputRef}
//                 type="text"
//                 placeholder="Search events..."
//                 required
//                 className="w-full pl-4 py-3 outline-none text-gray-700 placeholder-gray-400 text-base" /* Reduced padding and font size */
//               />
//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 transition-all duration-300 cursor-pointer flex items-center gap-2" /* Reduced padding */
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//                 <span className="font-medium text-sm">Search</span> {/* Smaller text */}
//               </button>
//             </form>

//             {input && (
//               <div className="text-center mt-3"> {/* Reduced margin */}
//                 <button
//                   onClick={onClear}
//                   className="text-blue-600 hover:text-blue-800 text-xs font-medium transition-all duration-300 flex items-center mx-auto hover:scale-105" /* Smaller text */
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                   Clear Search
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Header;



import React, { useRef } from 'react';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();
  const eventsSectionRef = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput('');
    inputRef.current.value = '';
  };

  const scrollToEvents = () => {
    if (eventsSectionRef.current) {
      // Calculate the exact position to stop (top of the section minus some padding)
      const offset = 80; // Adjust this value as needed
      const elementPosition = eventsSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='min-h-screen'>
      {/* ------------------ Hero Section ------------------ */}
      <section className="relative h-[700px] overflow-hidden mb-[10px] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Video with overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-0"></div>
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <video
            className="h-full w-auto min-w-full min-h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://panimalar.ac.in/assets/video/PEC-Homepage.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Hero content */}
        <div className="container mx-auto px-4 h-full max-w-7xl relative z-10 flex items-center">
          <div className="text-white max-w-2xl animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Panimalar Engineering College
              </span>{' '}
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Events</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed text-white/90 font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Experience excellence in education through our diverse range of
              academic, cultural, and technical events. Join us in shaping the
              future of innovation and learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToEvents}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ Search Section ------------------ */}
      <section 
        id="events-section" 
        ref={eventsSectionRef}
        className="px-4 sm:px-6 lg:px-8 xl:px-10 py-8 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Discover <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Exciting Events</span>
          </h3>
          
          <div className="relative max-w-lg mx-auto">
            <form
              onSubmit={onSubmitHandler}
              className="flex items-center bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Search events..."
                required
                className="w-full pl-4 py-3 outline-none text-gray-700 placeholder-gray-400 text-base"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="font-medium text-sm">Search</span>
              </button>
            </form>

            {input && (
              <div className="text-center mt-3">
                <button
                  onClick={onClear}
                  className="text-blue-600 hover:text-blue-800 text-xs font-medium transition-all duration-300 flex items-center mx-auto hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;