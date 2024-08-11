// import { useState } from 'react'
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Header from './component/Header'
import Landing from './pages/Landing/Landing'
// import Footer from './component/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
function App() {
  // const [count, setCount] = useState(0)
const router =createBrowserRouter([
  {
    path:"/",
    element : <Header/>
  },
  {
    path :"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/home",
    element:<Landing/>
  }
])
return <RouterProvider router={router}></RouterProvider>
  // return (
  //   <>
  //     <Header></Header>

  //     <Login></Login>

  //     <Register></Register>
      
  //     <Landing></Landing>
  //   </>
  // )
}

export default App