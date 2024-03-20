import React, { useState } from "react";
import './Navbar.css'
import image from '../Assests/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {

    const [menu, setMenu] = useState("gioithieu")
    return (
        <div className={'navbar'}>


            <section id="header">
                <a href="#">
                    <img src={image} class="logo" alt="" />
                </a>

                <div>
                    <ul id="navbar">
                        <li><a class="active" href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li id="lg-bag">
                            <a href="cart.html">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                        </li>                        <a href="#" id="close"><i class="fa fa-times"></i></a>
                    </ul>
                </div>
                <div id="mobile">
                    <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
                    <i id="bar" class="fa-solid fa-outdent"></i>
                </div>
            </section>
        </div>
    )
}

export default Navbar
