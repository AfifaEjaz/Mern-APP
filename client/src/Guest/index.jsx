import React from 'react'
import Home from './pages/Home'
import Category from './pages/Category'
import Brand from './pages/Brand'
import Product from './pages/Product'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './components/Footer'

export default function index() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to='/login' replace={true} />} />
      </Routes>
      <Footer />
    </>

  )
}
