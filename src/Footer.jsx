import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
         <footer>
        <div class="footer-content">
            
            <div class="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Shop</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h3>Contact Us</h3>
                <p>Email: info@fashionluxe.com</p>
                <p>Phone: +123 456 789</p>
            </div>
            <div class="footer-section about">
            <h3>Follow Us</h3>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2024 Velora | All Rights Reserved</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer