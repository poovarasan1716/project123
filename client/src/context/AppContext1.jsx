import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL ;

const AppContext1 = createContext();

export const AppProvider1 = ({children})=>{

    const navigate = useNavigate()
  
    const [token1, setToken] = useState(null)
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
    const token1 = localStorage.getItem('token1')
    if(token1){
      setToken(token1);
      axios.defaults.headers.common['Authorization'] = `${token1}`;
    }
   },[])

    const value = {
        axios, navigate, token1, setToken, blogs, setBlogs, input, setInput
    }

    return (
      <AppContext1.Provider value={value}>
        {children}
      </AppContext1.Provider>
    )
}

export const useAppContext1 = ()=>{
    return useContext(AppContext1)
};


// import { createContext, useContext, useEffect, useState } from "react"
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL ;

// const AppContext1 = createContext();

// export const AppProvider = ({children})=>{

//     const navigate = useNavigate()
  
//     const [token1, setToken] = useState(null)
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
//     const token1 = localStorage.getItem('token1')
//     if(token1){
//       setToken(token1);
//       axios.defaults.headers.common['Authorization'] = `${token1}`;
//     }
//    },[])

//     const value = {
//         axios, navigate, token1, setToken, blogs, setBlogs, input, setInput
//     }

//     return (
//       <AppContext1.Provider value={value}>
//         {children}
//       </AppContext1.Provider>
//     )
// }

// export const useAppContext1 = ()=>{
//     return useContext(AppContext1)
// };