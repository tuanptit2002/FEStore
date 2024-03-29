import './Featured.css'
import {Link} from "react-router-dom";
const Featured = () => {
    return (
        <div>
            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro" >
                        <Link to={'/product/1'}>
                        <img src="img/products/f1.jpg" alt="" />
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
                        </Link>
                    </div>
                    <div className="pro">
                        <img src="img/products/f2.jpg" alt="" />
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
                        <img src="img/products/f3.jpg" alt="" />
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
                        <img src="img/products/f4.jpg" alt="" />
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
                        <img src="img/products/f5.jpg" alt="" />
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
                        <img src="img/products/f6.jpg" alt="" />
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
                        <img src="img/products/f7.jpg" alt="" />
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
                        <img src="img/products/f8.jpg" alt="" />
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
                </div>
            </section>
        </div>
    )
}
export default Featured;
