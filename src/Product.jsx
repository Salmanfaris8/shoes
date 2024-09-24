import React from 'react'
import './Product.css'
import product1 from '../src/assets/product1.png' 
import product2 from '../src/assets/product2.png' 
import product3 from '../src/assets/product3.png' 
import product4 from '../src/assets/product4.png' 

const Product = () => {
  return (
    <div>
    <section id="products">
        <h2>Featured Products</h2>
        <div class="product-grid">
            <div class="product-card">
                <img src={product1} alt="Product 1"/>
                <h3>Sneakers</h3>
            </div>
            <div class="product-card">
                <img src={product2} alt="Product 2"/>
                <h3>Snow Boots</h3>
            </div>
            <div class="product-card">
                <img src={product3} alt="Product 3"/>
                <h3>Running shoes</h3>
            </div>
            <div class="product-card p-4">
                <img src={product4} alt="Product 3"/>
                <h3>Chelsea Boots</h3>
            </div>
        </div>
        <button className='product-btn'>See more</button>
    </section>
    </div>
  )
}

export default Product