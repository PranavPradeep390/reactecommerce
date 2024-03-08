import React from 'react'
import './header.css'

function Header() {
  return (
    <>

<div className='Navbar'>
    <div>
        <i><h2>COLO<span style={{color:"red"}}>SHOP</span></h2></i>
    </div>
    <div className='nav2'>
        <p>HOME</p>
        <p>SHOP</p>
        <p>PROMOTIONS</p>
        <p>PAGES</p>
        <p>BLOG</p>
        <p>CONTACT</p>
       <p> <i className="fa-solid fa-magnifying-glass fa-2xl"></i></p>
    </div>

</div>

    </>
   
  )
}

export default Header