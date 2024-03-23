import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight,faStar,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchAllItem} from "../../Service/Items/itemsService";


const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAllItem()
            .then(response => {
                setProducts(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <>
            <section id="page-header">
                <h2>#stayhome</h2>
                <p>save more with coupons & 70% off!</p>
            </section>

            <section id="product1" className="section-p1">
                <div className="pro-container">
                    {products.map(product =>(<div className="pro" >
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt="" />

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
                                <h4>${product.price}</h4>
                            </div>
                            <a href="#"><i className="fa fa-shopping-cart cart"><FontAwesomeIcon icon={faCartShopping} /></i></a>
                        </Link>
                    </div>))}
                </div>
            </section>

            <section id="pagination" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                </a>
            </section>
        </>
    )
}
export default Shop;
