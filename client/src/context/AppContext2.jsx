import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL ;

const AppContext2 = createContext();

export const AppProvider2 = ({children})=>{

    const navigate = useNavigate()
  
    const [token2, setToken] = useState(null)
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
    const token2 = localStorage.getItem('token2')
    if(token2){
      setToken(token2);
      axios.defaults.headers.common['Authorization'] = `${token2}`;
    }
   },[])

    const value = {
        axios, navigate, token2, setToken, blogs, setBlogs, input, setInput
    }

    return (
      <AppContext2.Provider value={value}>
        {children}
      </AppContext2.Provider>
    )
}

export const useAppContext2 = ()=>{
    return useContext(AppContext2)
};