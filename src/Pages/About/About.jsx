import React from 'react';
import './About.css'
import img6 from '../image/about/a6.jpg';
import imgVideo from '../image/about/1.mp4'
import f1 from '../image/features/f1.png'
import f2 from '../image/features/f2.png'
import f3 from '../image/features/f3.png'
import f4 from '../image/features/f4.png'
import f5 from '../image/features/f5.png'
import f6 from '../image/features/f6.png'
const About = () => {
    return (
        <div>
            <section id="page-header" className="about-header">
                <h2>#KnowUs</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>

            <section id="about-head" className="section-p1">
                <img src={img6} alt=""/>
                    <div>
                        <h2>Who We Are?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugiat incidunt voluptatem ad repudiandae. Architecto aut eum aperiam
                            iusto dignissimos quibusdam, corrupti dolor accusamus adipisci illum
                            numquam distinctio? Vero.</p>

                        <abbr title="">Create stunning images with a much or as little control as
                            you like, thanks to a love of Basic and Creative modes.
                        </abbr>

                        <br/><br/>

                            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%" >Create stunning images with a much or as little control as
                                you like, thanks to a love of Basic and Creative modes.</marquee>
                    </div>

            </section>

            <section id="about-app" className="section-p1">
                <h1>Download Our <a href="#">App</a></h1>
                <div className="video">
                    <video autoPlay muted loop src={imgVideo}></video>
                </div>
            </section>

            <section id="feature" className="section-p1">
                <div className="f-box">
                    <img src={f1} alt=""/>
                        <h6>Free Shipping</h6>
                </div>
                <div className="f-box">
                    <img src={f2} alt=""/>
                        <h6>Online Order</h6>
                </div>
                <div className="f-box">
                    <img src={f3} alt=""/>
                        <h6>Save Money</h6>
                </div>
                <div className="f-box">
                    <img src={f4} alt=""/>
                        <h6>Promotions</h6>
                </div>
                <div className="f-box">
                    <img src={f5} alt=""/>
                        <h6>Happy Sell</h6>
                </div>
                <div class="f-box">
                    <img src={f6} alt=""/>
                        <h6>F24/7 Support</h6>
                </div>
            </section>

            <section id="newsletter" class="section-p1 section-m1">
                <div class="newtext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                </div>

                <div class="form">
                    <input type="text" placeholder="Your e-mail address"/>
                        <button class="normal">Sign up</button>
                </div>
            </section>
        </div>
    );
}

export default About;
