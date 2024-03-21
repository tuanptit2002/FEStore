import p1 from '../image/people/1.png'
import p2 from '../image/people/2.png'
import p3 from '../image/people/3.png'
import './Contract.css'
const Contract = () =>{
    return(
        <div>
            <section id="page-header" className="about-header">
                <h2>#Let's_talk</h2>
                <p>LEAVE A MESSAGE,We love to hear from you!</p>
            </section>

            <section id="contact-details" className="section-p1">
                <div className="details">
                    <span>GET IN TOUCH</span>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Head office</h3>
                    <div>
                        <li>
                            <i className="fa fa-map"></i>
                            <p>56 Glassford Street Glasgow G1 1UL New York</p>
                        </li>
                        <li>
                            <i className="fa fa-envelope"></i>
                            <p>contact@YusufCodes.com</p>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <p>+22990649530 - 09132687110</p>
                        </li>
                        <li>
                            <i className="fa fa-clock"></i>
                            <p>Monday to Saturday: 9:00am to 16:00pm</p>
                        </li>
                    </div>
                </div>

                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4635006094795!2d3.2892140741861566!3d7.072136416546385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bb3ef236f79ef%3A0x5ed36f40e00cf387!2sNew%20Obada%20Market!5e0!3m2!1sen!2sng!4v1681943196718!5m2!1sen!2sng" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section id="form-details">
                <form action="">
                    <span>LEAVE A MESSAGE</span>
                    <h2>We love to hear from you</h2>
                    <input type="text" placeholder="Your Name"/>
                        <input type="text" placeholder="E-mail"/>
                            <input type="text" placeholder="Subject"/>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                                <button className="normal">Submit</button>
                </form>

                <div className="people">
                    <div>
                        <img src={p1} alt=""/>
                            <p><span>John Doe</span>Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/> Email: Yusuffcodes111@gmail.com</p>
                    </div>
                    <div>
                        <img src={p2} alt=""/>
                            <p><span>William Smith</span>Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/> Email: Yusuffcodes111@gmail.com</p>
                    </div>
                    <div>
                        <img src={p3} alt=""/>
                            <p><span>Emma Stone</span>Senior Marketing Manager <br/> Phone: + 000 123 000 77 88 <br/> Email: Yusuffcodes111@gmail.com</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contract;
