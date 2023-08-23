import React, { useState } from "react";
import "./blog.css";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

const Blog = () => {
  const [animateSupport, setAnimateSupport] = useState(false);
  return (
    <div>
      <div className="blog">
        <div className="background-blog-image">
          <div className="blog-text">
            <img
              src={process.env.PUBLIC_URL + '/images/logo-10.png'}
              alt=""
            />
            <h1>stay informed about your latest news.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec lobortis diam. Pellentesque nec enim ipsum. Fusce ex nisi,
              efficitur vel odio eu, egestas mattis{" "}
            </p>
            <button>Mail us</button>
          </div>
        </div>
      </div>
      <div className="blog-main">
        <div className="card-blog">
          <motion.div className="blog-card" initial={{ y: 100}} 
          animate={{ y: animateSupport ? 0 : 100 }}
         
          transition={{ duration: 1, ease: 'easeOut' }}
          onViewportEnter={() => setAnimateSupport(true)}
          onViewportLeave={() => setAnimateSupport(false)}
         >
            <h2>New Website</h2>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci utet.
            </p>
           <Link to={"/blog/detail-page"}><button style={{ backgroundColor: "#EFC94C" }}>Read more</button></Link>
          </motion.div>
          <motion.div className="blog-card" initial={{ y: 100}} 
          animate={{ y: animateSupport ? 0 : 100 }}
          
          transition={{ duration: 1, ease: 'easeOut' }}
          onViewportEnter={() => setAnimateSupport(true)}
          onViewportLeave={() => setAnimateSupport(false)}>
            <h2>Latest Event</h2>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci utet.
            </p>
           <Link to={"/blog/detail-page"}><button style={{ backgroundColor: "#00d084" }}>Read more</button></Link>
          </motion.div>
          <motion.div className="blog-card" initial={{ y: 100}} 
          animate={{ y: animateSupport ? 0 : 100 }}
         
          transition={{ duration: 1, ease: 'easeOut' }}
          onViewportEnter={() => setAnimateSupport(true)}
          onViewportLeave={() => setAnimateSupport(false)}>
            <h2>Our Reviews</h2>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci utet.
            </p>
            <Link to={"/blog/detail-page"}><button style={{ backgroundColor: "#ff6900" }}>Read more</button></Link>
          </motion.div>
          <motion.div className="blog-card" initial={{ y: 100}} 
          animate={{ y: animateSupport ? 0 : 100 }}
         
          transition={{ duration: 1, ease: 'easeOut' }}
          onViewportEnter={() => setAnimateSupport(true)}
          onViewportLeave={() => setAnimateSupport(false)}>
            <h2>New Services</h2>
            <p>
              Phasellus enim libero, blandit vel sapien vitae, condimentum
              ultricies magna et. Quisque euismod orci utet.
            </p>
           <Link to={"/blog/detail-page"}><button style={{ backgroundColor: "#0693e3" }}>Read more</button></Link>
          </motion.div>
        </div>
        <div className="content-blog">
          <div className="content-blog-details">
            <div className="blog-details-img">
              <img
                src={process.env.PUBLIC_URL + '/images/child-18.jpg'}
                alt=""
              />
            </div>
            <div className="blog-details-heading">
              <h3>New Services</h3>
              <Link to={"/blog/detail-page"}><button style={{ backgroundColor: "#0693e3" }}>Read More</button></Link>
            </div>
          </div>
          <div className="content-blog-details">
            <div className="blog-details-img">
              <img
                src={process.env.PUBLIC_URL + '/images/child-18.jpg'}
                alt=""
              />
            </div>
            <div className="blog-details-heading">
              <h3>Our Reviews</h3>
              <Link to={"/blog/detail-page"}><button style={{ backgroundColor: "#ff6900" }}>Read More</button></Link>
            </div>
          </div>
          <div className="content-blog-details">
            <div className="blog-details-img">
              <img
                src={process.env.PUBLIC_URL + '/images/child-18.jpg'}
                alt=""
              />
            </div>
            <div className="blog-details-heading">
              <h3>Latest Event</h3>
              <Link to={"/blog/detail-page"}><button style={{ backgroundColor: "#00d084" }}>Read More</button></Link>
            </div>
          </div>
          <div className="content-blog-details">
            <div className="blog-details-img">
              <img
                src={process.env.PUBLIC_URL + '/images/child-18.jpg'}
                alt=""
              />
            </div>
            <div className="blog-details-heading">
              <h3>New Website</h3>
              <Link to={"/blog/detail-page"}><button style={{ backgroundColor: "#EFC94C" }}>Read More</button></Link>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd content  */}
      <div className="foundation">
        <div className="background-page">
          <div className="foundation-detail">
            {/* <div className="foundation-heading">
              <p>
                13 <span></span>
              </p>
            </div>
            <div className="foundation-heading">
              <p>
                13 <span></span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
      {/* 3rd content  */}
      <div className="price-blog">
        <div className="price-blog-details">
          <h4>THE ORIGIN OF THE BUSINESS & THE BEST PRICES PLANS</h4>
          <p>Cras consectetur placerat nisl, ullamcorper feugiat est aliquet eu. Quisque in dolor euismod, interdum felis mattis, dignissim velit. Vestibulum ultricies euismod arcu tincidunt pellentesque. Pellentesque a purus vehicula, interdum eros porttitor, ullamcorper augue.</p>
        </div>
      </div>
      <div className="last-content">
        <div className="last-image-content">
          <img src={process.env.PUBLIC_URL + '/images/women-6.jpg'} alt="" />
        </div>
        <div className="last-image-content">
          <img src={process.env.PUBLIC_URL + '/images/women-6.jpg'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
