import n1 from '../image/products/n1.jpg'
import n2 from '../image/products/n2.jpg'
import n3 from '../image/products/n3.jpg'
import n4 from '../image/products/n4.jpg'
import './Product.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchItemById} from "../../Service/Items/itemsService";
import {faCartShopping, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Product = ()=>{
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(id)
    useEffect(() => {
        fetchItemById(id)
            .then(response => {
                setProduct(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);
    return(
        // <div>ok</div>
        <div>
            {product && (
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={product.image} width="100%" id="MainImg" alt="" />

                        <div className="small-img-group">
                            <div className="small-img-col">
                                <img src={product.image} width="100%" className="small-img" alt="" />
                            </div>
                            <div className="small-img-col">
                                <img src={product.image} width="100%" className="small-img" alt="" />
                            </div>
                            <div className="small-img-col">
                                <img src={product.image} width="100%" className="small-img" alt="" />
                            </div>
                            <div className="small-img-col">
                                <img src={product.image} width="100%" className="small-img" alt="" />
                            </div>
                        </div>

                </div>

                <div className="single-pro-details">
                    <h6>Home / T-Shirt</h6>
                    <h4>Men's Fashion T-Shirt</h4>
                    <h2>${product.price}</h2>

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
            )}
            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src={n1} alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i className="fa fa-shopping-cart cart"><FontAwesomeIcon icon={faCartShopping} /></i></a>
                    </div>
                    <div className="pro">
                        <img src={n2} alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i className="fa fa-shopping-cart cart"><FontAwesomeIcon icon={faCartShopping} /></i></a>
                    </div>
                    <div className="pro">
                        <img src={n3} alt="" />
                            <div className="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div className="star">
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i className="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i class="fa fa-shopping-cart cart"><FontAwesomeIcon icon={faCartShopping} /></i></a>
                    </div>
                    <div class="pro">
                        <img src={n4} alt="" />
                            <div class="des">
                                <span>adidas</span>
                                <h5>Cartoon Astronaut T-Shirts</h5>
                                <div class="star">
                                    <i class="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i class="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i class="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i class="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                    <i class="fas fa-star"><FontAwesomeIcon icon={faStar} /></i>
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i class="fa fa-shopping-cart cart"><FontAwesomeIcon icon={faCartShopping} /></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Product
