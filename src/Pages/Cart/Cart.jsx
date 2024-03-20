import React from 'react';
import './Cart.css'
import f1 from '../image/products/f1.jpg'
import f2 from '../image/products/f1.jpg'
import f3 from '../image/products/f1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Cart = () =>{
    return(
        <div>
            <section id="page-header" className="about-header">
                <h2>#Cart</h2>
                <p>Add your coupon code and SAVE upto 70%!</p>
            </section>
            <section id="cart" class="section-p1">
                <table width="100%">
                    <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="#"><i class="far fa-times-circle" ><FontAwesomeIcon icon={faTimes}/></i></a></td>
                    <td><img src={f1} alt=""/></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1"/></td>
                    <td>$118.19</td>
                    </tr>
                    <tr>
                        <td><a href="#"><i className="far fa-times-circle" ><FontAwesomeIcon icon={faTimes}/></i></a></td>
                    <td><img src={f2} alt=""/></td>
                    <td>Cartoon Astronaut T-Shirts</td>
                    <td>$118.19</td>
                    <td><input type="number" value="1"/></td>
                    <td>$118.19</td>
                </tr>
                <tr>
                    <td><a href="#"><i className="far fa-times-circle" ><FontAwesomeIcon icon={faTimes}/></i></a></td>
                <td><img src={f3} alt=""/></td>
                <td>Cartoon Astronaut T-Shirts</td>
                <td>$118.19</td>
                <td><input type="number" value="1"/></td>
                <td>$118.19</td>
            </tr>
        </tbody>
</table>
</section>
            <section id="cart-add" className="section-p1">
                <div id="coupon">
                    <h3>Apply coupon</h3>
                    <input type="text" placeholder="Enter Your Coupon"/>
                        <button className="normal">Apply</button>
                </div>

                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$335</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td><strong>Total</strong></td>
                            <td><strong>$ 335</strong></td>
                        </tr>
                    </table>
                    <button class="normal">Proceed to checkout</button>
                </div>
            </section>
            </div>
    )
}
export default Cart
