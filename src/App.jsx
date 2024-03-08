import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import { useState } from 'react'
import Addtocart from './Pages/Addtocart'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist/:productId' element={<Wishlist/>} />
        <Route path='/addtocart/:productId' element={<Addtocart/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

