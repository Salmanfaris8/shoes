import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div>
    <section id="products">
        <h2>Featured Products</h2>
        <div class="product-grid">
            <div class="product-card">
                <img src="./src/assets/product1.png" alt="Product 1"/>
                <h3>Sneakers</h3>
            </div>
            <div class="product-card">
                <img src="./src/assets/product2.png" alt="Product 2"/>
                <h3>Snow Boots</h3>
            </div>
            <div class="product-card">
                <img src="./src/assets/product3.png" alt="Product 3"/>
                <h3>Running shoes</h3>
            </div>
            <div class="product-card p-4">
                <img src="./src/assets/product4.png" alt="Product 3"/>
                <h3>Chelsea Boots</h3>
            </div>
        </div>
        <button className='product-btn'>See more</button>
    </section>
    </div>
  )
}

export default Product