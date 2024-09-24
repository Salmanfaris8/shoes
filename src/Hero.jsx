import React from 'react'
import './Hero.css'
import shoes1 from '../src/assets/shoe1.png'
import shoes2 from '../src/assets/shoe2.png'

const Hero = () => {
  return (
    <div>
      <section id="home" class="hero">
        <div class="hero-text">
            <h1>"Elegance Elevated"</h1>
            <p>Discover our exclusive collection of premium shoes, crafted for style and comfort.</p>
            <a href="#products" class="btn-primary">Shop Now</a>
            <img className='shoe1' style={{position:'absolute',top:'70px',right:'100px',rotate:'-20deg'}} width={'190px'} src={shoes1} alt="" />
            <img className='shoe2' style={{position:'absolute',bottom:'90px',left:'80px',rotate:'20deg'}} width={'200px'} src={shoes2} alt="" />
        </div>
    </section>
    </div>
  )
}

export default Hero