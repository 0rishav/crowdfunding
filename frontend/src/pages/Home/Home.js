import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import "./home.css";

const Home = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [animateSupport, setAnimateSupport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageContainer = document.querySelector(".image-container");
      const distancefromBottom = imageContainer.getBoundingClientRect().bottom;

      if (distancefromBottom <= window.innerHeight * 0.7) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* 1st section   */}
      <div className={`image-container ${isBlurred ? "blurred" : "unblurred"}`}>
         <img
          src={process.env.PUBLIC_URL + '/images/home-banner-1.jpg'}
          alt="student"
        /> 
        <div className="image-content" id="hover-effect" >
          <h1>Help People Life and their formation</h1>
          <button>Check Our Causes</button>
        </div>
      </div>

      {/* second section  */}
      <div className="main-div">
        <div className="first-div">
          <div className="div-heading">
            <h1>
              Thanks to the <span>Results </span>achieved with you
            </h1>
          </div>
          <div className="number">
            <div className="first-num">
              <h1>6893</h1>
              <span>Helped people</span>
            </div>
            <div className="first-num">
              <h1>1200</h1>
              <span>volunteers</span>
            </div>
          </div>
          <div className="div-content"></div>
        </div>

        <div className="second-div">
          <div className="second-div-content">
            <h2>Next goals</h2>
            <div className="goal">
              <p>New Hospital</p>
              <span>25 may</span>
            </div>
            <div className="goal">
              <p>New Teacher</p>
              <span>03 june</span>
            </div>
            <div className="goal">
              <p>Water Well</p>
              <span>14 april</span>
            </div>
            <div className="goal">
              <p>New Vaccine</p>
              <span>soon</span>
            </div>
          </div>
        </div>

        <div className="third-div">
          <div className="third-content">
            <p>Help us</p>
            <h1>Next Goals</h1>
            <button>Check it</button>
          </div>
        </div>
      </div>
      {/* 3rd Section  */}

      <section>
        <div className="main-section">
          <div className="background-container"></div>
          <div className="left-section">
            <img
              src={process.env.PUBLIC_URL + '/images/mother-child.jpg'}
              alt=""
            />
          </div>
          <div className="left-section-2">
            <img
              src={process.env.PUBLIC_URL + '/images/women.jpg'}
              alt=""
            />
          </div>
          <div className="right-section">
            <h1>The house of help</h1>
            <div className="right-data">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                minus quisquam voluptatem eos pariatur sunt ad blanditiis!
                Laudantium voluptatum perspiciatis iste repudiandae explicabo,
                expedita veritatis error adipisci, ipsum aut amet sunt
                voluptatum.
              </p>
            </div>
            <div className="right-para">
              <div className="img-data">
                <img
                  src={process.env.PUBLIC_URL + '/images/women-2.jpg'}
                  alt=""
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  voluptatibus minus nostrum expedita, voluptate nulla delectus
                  facere provident illum quis!
                </p>
              </div>
            </div>
            <div className="right-data">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate saepe, natus nesciunt corporis deserunt rerum quisquam
                nulla, eveniet ullam perspiciatis eius nemo fuga temporibus quas
                id sint accusamus quo sapiente labore provident nam voluptatum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 4th section  */}
      
      <section>
        <div className="main-card">
          <div className="background-card"></div>
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/images/child-1.jpg'}
              alt=""
            />
            <button style={{ backgroundColor: "#9b51e0" }}>donate now</button>
            <div className="card-content">
              <h2>water wells</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                impedit sequi dolor rem natus voluptas animi non nesciunt
                praesentium ut!
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/images/mother-child-2.jpg'}
              alt=""
            />
            <button style={{ backgroundColor: "#ff6900" }}>donate now</button>
            <div className="card-content">
              <h2>help to mothers</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                impedit sequi dolor rem natus voluptas animi non nesciunt
                praesentium ut!
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src={process.env.PUBLIC_URL + '/images/child-2.jpg'}
              alt=""
            />
            <button style={{ backgroundColor: "#2ea2cc" }}>donate now</button>
            <div className="card-content">
              <h2>child support</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                impedit sequi dolor rem natus voluptas animi non nesciunt
                praesentium ut!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5th section  */}
      <section>
        <div className="main-support">
          <motion.div className="left-support-us" initial={{x:-200}}  animate = {{ x: animateSupport ? 0 : -200 }}  transition={{ duration: 1, ease: 'easeOut' }} onViewportEnter={() => setAnimateSupport(true)}
          onViewportLeave={() => setAnimateSupport(false)}>
            <div className="left-support-content">
              <h1>Support us</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Minima
                ullam excepturi sjlaborum, recusandae culpa magni voluptatem
                quia facilis quod, blanditiis commodi sequi assumenda.
               </p>
            </div>
            <div className="icons">
              <RiVisaLine style={{ fontSize: "40px" }} />
              <FaCcPaypal style={{ fontSize: "40px" }} />
              <SiPaytm style={{ fontSize: "40px" }} />
              <FaCcStripe style={{ fontSize: "40px" }} />
            </div>
            <div className="price">
              <p>
                $4,950 <span>of $10,000 raised</span>
              </p>
            </div>
            <div className="color">
              <div className="yellow"></div>
              <div className="white"></div>
            </div>
            <div className="left-input">
              <h4>$</h4>
              <input type="text" />
            </div>
            <div className="btn">
              <button
            
              >
                $50
              </button>
              <button
                
              >
                $100.00
              </button>
              <button
                
              >
                $150.00
              </button>
              <button
                
              >
                $200.00
              </button>
              <button
               
              >
                custom
              </button>
            </div>
            <div className="btn-two">
              <button>Donate Now</button>
            </div>
          </motion.div>
          <div className="right-adoption">
            <h1>Adoptions</h1>
            <div className="iamge-content">
              <div className="iamge">
                <img
                  src={process.env.PUBLIC_URL + '/images/women.jpg'}
                  alt=""
                />
              </div>
              <div className="iamge-heading">
                <h5>Central Africa</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, perspiciatis.
                </p>
              </div>
              <div className="iamge-price">
                <span>$ 1200</span>
                <button>new</button>
              </div>
            </div>
            <div className="iamge-content">
              <div className="iamge">
                <img
                  src={process.env.PUBLIC_URL + '/images/child-3.jpg'}
                  alt=""
                />
              </div>
              <div className="iamge-heading">
                <h5>Central Africa</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, perspiciatis.
                </p>
              </div>
              <div className="iamge-price">
                <span>$ 1200</span>
                <button style={{ backgroundColor: "yellow" }}>new</button>
              </div>
            </div>
            <div className="iamge-content">
              <div className="iamge">
                <img
                  src={process.env.PUBLIC_URL + '/images/child-3.jpg'}
                  alt=""
                />
              </div>
              <div className="iamge-heading">
                <h5>Sri Lanka</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, perspiciatis.
                </p>
              </div>
              <div className="iamge-price">
                <span>$ 1200</span>
                <button style={{ backgroundColor: "#54595F" }}>new</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6th section  */}
      <div className="main-logo">
        <img
          src={process.env.PUBLIC_URL + '/images/logo-1.png'}
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + '/images/logo-2.png'}
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + '/images/logo-3.png'}
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + '/images/logo-4.png'}
          alt=""
        />
        <img
          src={process.env.PUBLIC_URL + '/images/logo-5.png'}
          alt=""
        />
      </div>
      <br />
      {/* 7th section  */}
      <div className="courossel-slider">
        <AiOutlineLeft style={{ fontSize: "24px", cursor: "pointer" }} />
        <div className="slider">
          <img
            src={process.env.PUBLIC_URL + '/images/women-3.jpg'}
            alt=""
          />
        </div>
        <div className="slider">
          <img
            src={process.env.PUBLIC_URL + '/images/child-4.jpg'}
            alt=""
          />
        </div>
        <div className="slider">
          <img
            src={process.env.PUBLIC_URL + '/images/women-4.jpg'}
            alt=""
          />
        </div>
        <div className="slider">
          <img
            src={process.env.PUBLIC_URL + '/images/women-5.jpg'}
            alt=""
          />
        </div>
        <AiOutlineRight style={{ fontSize: "24px", cursor: "pointer" }} />
      </div>

      {/* 8th section   */}
      <div className="main-products-page">
        <p>Aid Contribution</p>
        <h1>Buy Your Products</h1>
        <div className="products-page">
          <div className="product-detail"> 
            <img
              src={process.env.PUBLIC_URL + '/images/child-5.jpg'}
              alt=""
            />
            <div className="product-heading">
              <h2>The Wolves</h2>
            </div>
            <div className="prod-btn">
              <button>$ 13.40</button>
            </div>
          </div>
          <div className="product-detail">
            <img
              src={process.env.PUBLIC_URL + '/images/child-6.jpg'}
              alt=""
            />
            <div className="product-heading">
              <h2>Social work</h2>
            </div>
            <div className="prod-btn">
              <button style={{ backgroundColor: "#00baa3" }}>$ 13.40</button>
            </div>
          </div>
          <div className="product-detail">
            <img
              src={process.env.PUBLIC_URL + '/images/child-7.jpg'}
              alt=""
            />
            <div className="product-heading">
              <h2>The Wolves</h2>
            </div>
            <div className="prod-btn">
              <button>$ 13.40</button>
            </div>
          </div>
          <div className="product-detail">
            <img
              src={process.env.PUBLIC_URL + '/images/child-8.jpg'}
              alt=""
            />
            <div className="product-heading">
              <h2 >Child Protection</h2>
            </div>
            <div className="prod-btn">
              <button style={{ backgroundColor: "#00baa3" }}>$ 13.40</button>
            </div>
          </div>
          <div className="product-detail">
            <img
              src={process.env.PUBLIC_URL + '/images/child-9.jpg'}
              alt=""
            />
            <div className="product-heading">
              <h2>Orca Project</h2>
            </div>
            <div className="prod-btn">
              <button style={{ backgroundColor: "purple" }}>$ 13.40</button>
            </div>
          </div>
          <div className="product-detail">
            <img
              src={process.env.PUBLIC_URL + '/images/child-10.jpg'}
              alt=""
            />
            <div className="product-heading">
              <h2>Paws Partners</h2>
            </div>
            <div className="prod-btn">
              <button style={{ backgroundColor: "black" }}>$ 13.40</button>
            </div>
          </div>
        </div>
      </div>
      {/* 9th section  */}
      <div className="main-blog">
        <p>The Blog</p>
        <h1>check our news</h1>
        <div className="main-blog-box">
          <div className="box">
            <div className="blog-img">
              <img src={process.env.PUBLIC_URL + '/images/mother-child.jpg'} alt="" />
            </div>
            <div className="blog-contents">
              <span>8 sep-standard</span>
              <h2>New Services</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores incidunt a officiis quo dolorem beatae.</p>
              <button style={{backgroundColor:"#2780ba"}}>Read more</button>
            </div>
          </div>
          <div className="box">
            <div className="blog-img">
              <img src={process.env.PUBLIC_URL + '/images/mother-child.jpg'} alt="" />
            </div>
            <div className="blog-contents">
              <span>8 sep-standard</span>
              <h2>Our Reviews</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores incidunt a officiis quo dolorem beatae.</p>
              <button style={{backgroundColor:"#2780ba"}}>Read more</button>
            </div>
          </div>
          <div className="box">
          <div className="blog-img">
              <img src={process.env.PUBLIC_URL + '/images/mother-child.jpg'} alt="" />
            </div>
            <div className="blog-contents">
              <span>8 sep-standard</span>
              <h2>Latest Event</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores incidunt a officiis quo dolorem beatae.</p>
              <button style={{backgroundColor:"#2780ba"}}>Read more</button>
            </div>
          </div>
           <div className="box">
           <div className="blog-img">
              <img src={process.env.PUBLIC_URL + '/images/mother-child.jpg'} alt="" />
            </div>
            <div className="blog-contents">
              <span>8 sep-standard</span>
              <h2>New Website</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores incidunt a officiis quo dolorem beatae.</p>
              <button style={{backgroundColor:"#2780ba"}}>Read more</button>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
