// import React from 'react'
// import {Route, Routes} from 'react-router-dom'
// import Home from './pages/Home'
// import Blog from './pages/Blog'
// import Layout from './pages/admin/Layout'
// import Dashboard from './pages/admin/Dashboard'
// import AddBlog from './pages/admin/AddBlog'
// import ListBlog from './pages/admin/ListBlog'
// import Comments from './pages/admin/Comments'
// import Login from './components/admin/Login'
// import Login1 from './components/admin1/Login1'
// import Layout1 from  './pages/admin1/Layout1'
// import Dashboard1 from './pages/admin1/Dashboard1'
// import AddBlog1 from './pages/admin1/AddBlog1'
// import ListBlog1 from './pages/admin1/ListBlog1'
// import Comments1 from './pages/admin1/Comments1'
// import Login2 from './components/admin2/Login2'
// import Layout2 from  './pages/admin2/Layout2'
// import Dashboard2 from './pages/admin2/Dashboard2'
// import AddBlog2 from './pages/admin2/AddBlog2'
// import ListBlog2 from './pages/admin2/ListBlog2'
// import Comments2 from './pages/admin2/Comments2'
// import Login3 from './components/admin3/Login3'
// import Layout3 from  './pages/admin3/Layout3'
// import Dashboard3 from './pages/admin3/Dashboard3'
// import AddBlog3 from './pages/admin3/AddBlog3'
// import ListBlog3 from './pages/admin3/ListBlog3'
// import Comments3 from './pages/admin3/Comments3'
// import 'quill/dist/quill.snow.css'
// import {Toaster} from 'react-hot-toast'
// import { useAppContext } from '../src/context/AppContext'
// import { useAppContext1 } from './context/AppContext1'



// const App = () => {

//   const {token} = useAppContext()
//   const {token1} = useAppContext1()



//   return (
//     <div>
//     <Toaster/>
//       <Routes>
//        <Route path='/' element={<Home/>} />
//        <Route path='/blog/:id' element={<Blog/>} />
//        <Route path='/admin' element={token ? <Layout/> : <Login/>}>
//         <Route index element={<Dashboard/>}/>
//         <Route path='addBlog' element={<AddBlog/>}/>
//         <Route path='listBlog' element={<ListBlog/>}/>
//         <Route path='comments' element={<Comments/>}/>
//        </Route>
//        <Route path='/admin1' element={token1 ? <Layout1/> : <Login1/>}>
//         <Route index element={<Dashboard1/>}/>
//         <Route path='addBlog' element={<AddBlog1/>}/>
//         <Route path='listBlog' element={<ListBlog1/>}/>
//         <Route path='comments' element={<Comments1/>}/>
//        </Route>
//        <Route path='/admin2' element={token ? <Layout2/> : <Login2/>}>
//         <Route index element={<Dashboard2/>}/>
//         <Route path='addBlog' element={<AddBlog2/>}/>
//         <Route path='listBlog' element={<ListBlog2/>}/>
//         <Route path='comments' element={<Comments2/>}/>
//        </Route>
//        <Route path='/admin3' element={token ? <Layout3/> : <Login3/>}>
//         <Route index element={<Dashboard3/>}/>
//         <Route path='addBlog' element={<AddBlog3/>}/>
//         <Route path='listBlog' element={<ListBlog3/>}/>
//         <Route path='comments' element={<Comments3/>}/>
//        </Route>
//       </Routes>
//     </div>
//   )
// }

// export default 


import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

// Admin 0
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'

// Admin 1
import Login1 from './components/admin1/Login1'
import Layout1 from './pages/admin1/Layout1'
import Dashboard1 from './pages/admin1/Dashboard1'
import AddBlog1 from './pages/admin1/AddBlog1'
import ListBlog1 from './pages/admin1/ListBlog1'
import Comments1 from './pages/admin1/Comments1'

// Admin 2
import Login2 from './components/admin2/Login2'
import Layout2 from './pages/admin2/Layout2'
import Dashboard2 from './pages/admin2/Dashboard2'
import AddBlog2 from './pages/admin2/AddBlog2'
import ListBlog2 from './pages/admin2/ListBlog2'
import Comments2 from './pages/admin2/Comments2'

// Admin 3
import Login3 from './components/admin3/Login3'
import Layout3 from './pages/admin3/Layout3'
import Dashboard3 from './pages/admin3/Dashboard3'
import AddBlog3 from './pages/admin3/AddBlog3'
import ListBlog3 from './pages/admin3/ListBlog3'
import Comments3 from './pages/admin3/Comments3'

// Styles & Context
import 'quill/dist/quill.snow.css'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import { useAppContext1 } from './context/AppContext1'
// You must create these two if using token2/token3
import { useAppContext2 } from './context/AppContext2'
import { useAppContext3 } from './context/AppContext3'

const App = () => {
  const { token } = useAppContext()          // admin
  const { token1 } = useAppContext1()        // admin1
  const { token2 } = useAppContext2()        // admin2
  const { token3 } = useAppContext3()        // admin3

  return (
    <div>
      <Toaster />
      <Routes>

        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />

        {/* Admin Portal 0 */}
        <Route path='/admin' element={token ? <Layout /> : <Navigate to="/admin/login" />} >
          <Route index element={<Dashboard />} />
          <Route path='addBlog' element={<AddBlog />} />
          <Route path='listBlog' element={<ListBlog />} />
          <Route path='comments' element={<Comments />} />
        </Route>
        <Route path='/admin/login' element={<Login />} />

        {/* Admin Portal 1 */}
        <Route path='/admin1' element={token1 ? <Layout1 /> : <Navigate to="/admin1/login1" />} >
          <Route index element={<Dashboard1 />} />
          <Route path='addBlog' element={<AddBlog1 />} />
          <Route path='listBlog' element={<ListBlog1 />} />
          <Route path='comments' element={<Comments1 />} />
        </Route>
        <Route path='/admin1/login1' element={<Login1 />} />

        {/* Admin Portal 2 */}
        <Route path='/admin2' element={token2 ? <Layout2 /> : <Navigate to="/admin2/login2" />} >
          <Route index element={<Dashboard2 />} />
          <Route path='addBlog' element={<AddBlog2 />} />
          <Route path='listBlog' element={<ListBlog2 />} />
          <Route path='comments' element={<Comments2 />} />
        </Route>
        <Route path='/admin2/login2' element={<Login2 />} />

        {/* Admin Portal 3 */}
        <Route path='/admin3' element={token3 ? <Layout3 /> : <Navigate to="/admin3/login3" />} >
          <Route index element={<Dashboard3 />} />
          <Route path='addBlog' element={<AddBlog3 />} />
          <Route path='listBlog' element={<ListBlog3 />} />
          <Route path='comments' element={<Comments3 />} />
        </Route>
        <Route path='/admin3/login3' element={<Login3 />} />

      </Routes>
    </div>
  )
}

export default App
