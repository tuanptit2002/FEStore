import React, { useState } from "react";
import './Navbar.css'
import image from '../Assests/image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
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
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><a> <Link to={'/shop'}>Shop</Link></a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contract'}>Contract</Link></li>
                        <li id="lg-bag">
                            <a >
                                <Link to={'/cart'}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                </Link>
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
