import './Homepage.css'
import f1 from '../image/features/f1.png'
import f2 from '../image/features/f2.png'
import f3 from '../image/features/f3.png'
import f4 from '../image/features/f4.png'
import f5 from '../image/features/f5.png'
import f6 from '../image/features/f6.png'
import Featured from './Featured/Featured'
import Arrival from './Arrivals/Arrival'
const Homepage = () => {
    return (
        <div>
            <section id="hero">
                <h4>Trade-In-Offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>save more with coupons & 70% off!</p>
                <button >Shop Now</button>
            </section>
            <section id="feature" className="section-p1">
                <div className="f-box">
                    <img src={f1} alt="" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="f-box">
                    <img src={f2} alt="" />
                    <h6>Online Order</h6>
                </div>
                <div className="f-box">
                    <img src={f3} alt="" />
                    <h6>Save Money</h6>
                </div>
                <div className="f-box">
                    <img src={f4} alt="" />
                    <h6>Promotions</h6>
                </div>
                <div className="f-box">
                    <img src={f5} alt="" />
                    <h6>Happy Sell</h6>
                </div>
                <div className="f-box">
                    <img src={f6} alt="" />
                    <h6>F24/7 Support</h6>
                </div>
            </section>
            <Featured></Featured>
            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% off</span> - All t-Shirts & Accessories</h2>
                <button className="normal">Explore More</button>
            </section>
            <Arrival></Arrival>
            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic sell is on sale at cera</span>
                    <button className="white">Learn More</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>spring/summer</h4>
                    <h2>upcoming season</h2>
                    <span>The best classic sell is on sale at cera</span>
                    <button className="white">Collection</button>
                </div>
            </section>
            <section id="banner3">
                <div className="banner-box">
                    <h2>SEASON SALE</h2>
                    <h3>Winter Collection -50% OFF</h3>
                </div>
                <div className="banner-box banner-box2">
                    <h2>NEW FOOTWEAR COLLECTION</h2>
                    <h3>Spring / Summer 2023</h3>
                </div>
                <div className="banner-box banner-box3">
                    <h2>T-SHIRTS</h2>
                    <h3>New Trendy Prints</h3>
                </div>
            </section>
        </div>
    )
}
export default Homepage;