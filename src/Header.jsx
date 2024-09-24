import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <div class="logo">
        <img width={'50px'} src="./src/assets/shape.png" alt="" />
        Velora</div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Shop</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="side-menu">
            <span><i class="fa-solid fa-cart-shopping"></i></span>
            <span><i class="fa-solid fa-user"></i></span>
            <span><i class="fa-solid fa-bars"></i></span>
        </div>
        <div class="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
    </div>
  )
}

export default Header