// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const AppContext3 = createContext();

// export const AppProvider3 = ({ children }) => {
//   const navigate = useNavigate();

//   const [token3, setToken3] = useState(null);
//   const [blogs, setBlogs] = useState([]);
//   const [input, setInput] = useState("");

//   const fetchBlogs = async () => {
//     try {
//       const { data } = await axios.get("/api/blog/all");
//       data.success ? setBlogs(data.blogs) : toast.error(data.message);
//     } catch (error) {
//       toast.error(error?.response?.data?.message || error.message);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//     const storedToken3 = localStorage.getItem("token3");
//     if (storedToken3) {
//       setToken3(storedToken3);
//       axios.defaults.headers.common["Authorization"] = storedToken3;
//     }
//   }, []);

//   const value = {
//     axios,
//     navigate,
//     token3,
//     setToken3,
//     blogs,
//     setBlogs,
//     input,
//     setInput,
//   };

//   return (
//     <AppContext3.Provider value={value}>
//       {children}
//     </AppContext3.Provider>
//   );
// };

// export const useAppContext3 = () => {
//   return useContext(AppContext3);
// };


// import { createContext, useContext, useEffect, useState } from "react"
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL ;

// const AppContext3 = createContext();

// export const AppProvider3 = ({children})=>{

//     const navigate = useNavigate()
  
//     const [token3, setToken] = useState(null)
//     const [blogs, setBlogs] = useState([])
//     const [input, setInput] = useState("")


//     const fetchBlogs = async ()=>{
//       try {
//        const {data} = await axios.get('/api/blog/all');
//        data.success ? setBlogs(data.blogs) : toast.error(data.message)
//       } catch (error) {
//          toast.error(error.message)
//       }
//     }


//    useEffect(()=>{
//     fetchBlogs();
//     const token3 = localStorage.getItem('token3')
//     if(token3){
//       setToken(token3);
//       axios.defaults.headers.common['Authorization'] = `${token3}`;
//     }
//    },[])

//     const value = {
//         axios, navigate, token3, setToken, blogs, setBlogs, input, setInput
//     }

//     return (
//       <AppContext3.Provider value={value}>
//         {children}
//       </AppContext3.Provider>
//     )
// }

// export const useAppContext3 = ()=>{
//     return useContext(AppContext3)
// };



// import { createContext, useContext, useEffect, useState } from "react"
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL ;

// const AppContext3 = createContext();

// export const AppProvider3 = ({children})=>{

//     const navigate = useNavigate()
  
//     const [token3, setToken] = useState(null)
//     const [blogs, setBlogs] = useState([])
//     const [input, setInput] = useState("")


//     const fetchBlogs = async ()=>{
//       try {
//        const {data} = await axios.get('/api/blog/all');
//        data.success ? setBlogs(data.blogs) : toast.error(data.message)
//       } catch (error) {
//          toast.error(error.message)
//       }
//     }


//    useEffect(()=>{
//     fetchBlogs();
//     const token3 = localStorage.getItem('token3')
//     if(token3){
//       setToken(token3);
//       axios.defaults.headers.common['Authorization'] = `${token3}`;
//     }
//    },[])

//     const value = {
//         axios, navigate, token3, setToken, blogs, setBlogs, input, setInput
//     }

//     return (
//       <AppContext3.Provider value={value}>
//         {children}
//       </AppContext3.Provider>
//     )
// }

// export const useAppContext3 = ()=>{
//     return useContext(AppContext3)
// };




import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Set base URL from environment
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// Create context

const AppContext3 = createContext();

export const AppProvider3 = ({children})=>{

    const navigate = useNavigate()
  
    const [token3, setToken] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [input, setInput] = useState("")


    const fetchBlogs = async ()=>{
      try {
       const {data} = await axios.get('/api/blog/all');
       data.success ? setBlogs(data.blogs) : toast.error(data.message)
      } catch (error) {
         toast.error(error.message)
      }
    }


   useEffect(()=>{
    fetchBlogs();
    const token3 = localStorage.getItem('token3')
    if(token3){
      setToken(token3);
      axios.defaults.headers.common['Authorization'] = `${token3}`;
    }
   },[])

    const value = {
        axios, navigate, token3, setToken, blogs, setBlogs, input, setInput
    }

  return (
    <AppContext3.Provider value={value}>
      {children}
    </AppContext3.Provider>
  );
};

// Custom hook
export const useAppContext3 = () => {
  return useContext(AppContext3);
};
