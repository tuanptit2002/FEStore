import './Blog.css';
import b1 from '../image/blog/b1.jpg'
import b2 from '../image/blog/b2.jpg'
import b3 from '../image/blog/b3.jpg'
import b4 from '../image/blog/b4.jpg'
import b5 from '../image/blog/b5.jpg'
import b6 from '../image/blog/b6.jpg'
import b7 from '../image/blog/b7.jpg'

const Blog = () => {
    return (
        <div>
            <section id="page-header" className="blog-header">
                <h2>#readmore</h2>
                <p>Read all case studies about our products!</p>
            </section>

            <section id="blog">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={b1} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>The Cotton-Jersey Zip-Up Hoodies</h4>
                        <p>Kickstarter man briad godard coloring book. Raclette wasitcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING </a>
                    </div>
                    <h1>13/01</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={b2} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>How to Style a Quiff</h4>
                        <p>Kickstarter man briad godard coloring book. Raclette wasitcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING </a>
                    </div>
                    <h1>14/01</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={b3} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>Must Have Skater Girl Items</h4>
                        <p>Kickstarter man briad godard coloring book. Raclette wasitcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING </a>
                    </div>
                    <h1>12/01</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={b4} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>Runway-Inspired Trends</h4>
                        <p>Kickstarter man briad godard coloring book. Raclette wasitcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING </a>
                    </div>
                    <h1>16/01</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={b6} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>AW20 Menswear Trends</h4>
                        <p>Kickstarter man briad godard coloring book. Raclette wasitcoat selfies
                            yr wolf chartreuse hexagon irony, godard...
                        </p>
                        <a href="#">CONTINUE READING </a>
                    </div>
                    <h1>10/03</h1>
                </div>
            </section>

            <section id="pagination" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i className="fa fa-long-arrow-alt-right"></i></a>
            </section>
        </div>
    )
}
export default Blog;