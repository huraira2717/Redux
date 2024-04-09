import { useState } from 'react'
import './App.css'
import Login from './Components/Pages/Login/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard'
import Cart from './Components/Pages/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element={<Login />} />
    <Route path='/Dashboard' element={<Dashboard />} />
    <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
    <ToastContainer />

    </>
  )
}

export default App
