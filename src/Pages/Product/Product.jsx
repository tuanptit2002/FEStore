import f1 from '../image/products/f1.jpg'
import f2 from '../image/products/f2.jpg'
import f3 from '../image/products/f3.jpg'
import f4 from '../image/products/f4.jpg'
import './Product.css'
const Product = ()=>{
    return(
        <div>
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={f1} width="100%" id="MainImg" alt="" />

                        <div className="small-img-group">
                            <div className="small-img-col">
                                <img src={f1} width="100%" className="small-img" alt="" />
                            </div>
                            <div className="small-img-col">
                                <img src={f2} width="100%" className="small-img" alt="" />
                            </div>
                            <div className="small-img-col">
                                <img src={f3} width="100%" className="small-img" alt="" />
                            </div>
                            <div className="small-img-col">
                                <img src={f4} width="100%" className="small-img" alt="" />
                            </div>
                        </div>

                </div>

                <div className="single-pro-details">
                    <h6>Home / T-Shirt</h6>
                    <h4>Men's Fashion T-Shirt</h4>
                    <h2>$139.00</h2>

                    <select>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large Size</option>
                    </select>

                    <input type="number" value="1" />
                        <button className="normal">Add To Cart</button>
                        <h4>Product Details</h4>
                        <span>The Gildian Ultra cotton T-Shirt is made from a substantial 6.0 oz. per
                sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk
                jersey kit provides unmatched comfort with each wear. Featuring a taped neck
                and shoulder and a seamless double needle collar, and available in a range
                of colors, it offers it all in the ultimate head turning package.</span>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="img/products/n1.jpg" alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i className="fa fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="img/products/n2.jpg" alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i className="fa fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="img/products/n3.jpg" alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
                    </div>
                    <div class="pro">
                        <img src="img/products/n4.jpg" alt="" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Product
