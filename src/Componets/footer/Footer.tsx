import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterestP,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <section id="newsletter" className="section-p1 section-m1">
                <div className="newtext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>

                <div className="form">
                    <input type="text" placeholder="Your e-mail address" />
                    <button className="normal">Sign up</button>
                </div>
            </section>
            <footer className="section-p1">
                <div className="col">
                    <img src="img/222.png" className="logo" alt="" />
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> C19,oloruntele street, Abeokuta</p>
                    <p><strong>Phone:</strong> |+22990649530 08038986593</p>
                    <p><strong>Hours:</strong> 10:00 - 18:00,   Mon-Sat</p>

                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                            <i><FontAwesomeIcon icon={faFacebookF} /></i>
                            <i><FontAwesomeIcon icon={faTwitter} /></i>
                            <i><FontAwesomeIcon icon={faInstagram} /></i>
                            <i><FontAwesomeIcon icon={faPinterestP} /></i>
                            <i><FontAwesomeIcon icon={faYoutube} /></i>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <h4>About</h4>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Contact Us</a>
                </div>

                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">Track My Order</a>
                    <a href="#">Help</a>
                </div>


                <div className="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className="row">
                        <img src="img/pay/app.jpg" alt="" />
                        <img src="img/pay/play.jpg" alt="" />
                    </div>
                    <p>Secure Payment Gateways</p>
                    <img src="img/pay/pay.png" alt="" />
                </div>


                <div className="copyright">
                    <p>&copy; 2023, yusufcodes - HTML CSS E-Commerce Template</p>
                </div>
            </footer>
        </>


    )
}

export default Footer;