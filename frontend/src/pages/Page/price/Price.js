import React from "react";
import "./price.css";
import {SiGooglemarketingplatform} from "react-icons/si"
import {BsFillBagFill} from "react-icons/bs"
import {SiSimpleanalytics} from "react-icons/si"
import {AiFillMail} from "react-icons/ai"
import {AiFillPhone} from "react-icons/ai"
import {FaLocationArrow} from "react-icons/fa"
import {BiTimeFive} from "react-icons/bi"
import {BiSolidTime} from "react-icons/bi"
import {BsFillBellFill} from "react-icons/bs"

const Price = () => {
  return (
    <div>
      {/* 1st content  */}
      <div className="image-box-price">
        <img src={process.env.PUBLIC_URL + "/images/price-2.png"} alt="" />
      </div>
      <div className="main-box-price">
        <div className="left-box-price">
          <h1>BEST HELP IN OUR TOWN</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et metus augue. Mauris ut libero eget erat scelerisque vehicula.
            Phasellus nec blandit metus. Nulla quis molestie risus.
          </p>
          <button>More Info</button>
        </div>
        <div className="right-box-price">
          <div className="right-left-box">
            <div className="right-left-top-box">
              <div className="right-left-top-box-content">
                <h1>Basic Plan</h1>
                <p>$74.99</p>
                <h2>annual</h2>
              </div>
            </div>
            <div className="right-left-bottom-box">
              <p>
                Praesent ultrices urna purus Sed vitae tristique nisl ultric
                Donec a ligula lacinia, cons Nunc scelerisque velit a pul
              </p>
              <button>Check</button>
            </div>
          </div>
          <div className="right-right-box">
          <div className="right-right-top-box">
              <div className="right-right-top-box-content">
                <h1>Popular Plan</h1>
                <p>$79.99</p>
                <h2>monthly</h2>
              </div>
            </div>
            <div className="right-right-bottom-box">
              <p>
                Praesent ultrices urna purus Sed vitae tristique nisl ultric
                Donec a ligula lacinia, cons Nunc scelerisque velit a pul
              </p>
              <button>Check</button>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd content  */}
     
        <div className="facility">
          <div className="background-image-facility">
            <h2>Our Facility</h2>
            <h1>The Best Services</h1>

            <div className="facility-box">
            <div className="facility-content" style={{backgroundColor:"#EFC94C",opacity:"0.8"}}>
              <h3>01</h3>
              <h4>Services</h4>
              <div className="icon-cover">
                <SiGooglemarketingplatform/>
                <p>Marketing</p>
              </div>
              <div className="icon-cover">
                <BsFillBagFill/>
                <p>Selling</p>
              </div>
              <div className="icon-cover">
               <SiSimpleanalytics/>
                <p>Analytics</p>
              </div>
            </div>
              <div className="facility-content">
                <img src={process.env.PUBLIC_URL + "/images/child-4.jpg"} alt="" />
              </div>
              <div className="facility-content" style={{backgroundColor:"#00d084",opacity:"0.8"}}>
              <h3>03</h3>
              <h4>Time Schedule</h4>
              <div className="icon-cover">
              <BiTimeFive/>
                <p>Mon - Fry 09:00 12:00</p>
              </div>
              <div className="icon-cover">
              <BiSolidTime/>
                <p>Sat - Sun 14:00 18:00</p>
              </div>
              <div className="icon-cover">
              <BsFillBellFill/>
                <p>Open to public 11 - 18</p>
              </div>
              </div>
              <div className="facility-content">
                <img src={process.env.PUBLIC_URL + "/images/women.jpg"} alt="" />
              </div>
              <div className="facility-content" style={{backgroundColor:"#6EC1E4",opacity:"0.8"}}>
              <h3>05</h3>
              <h4>Contact Us</h4>
              <div className="icon-cover">
              <AiFillMail/>
                <p>karunodaya@site.com</p>
              </div>
              <div className="icon-cover">
              <AiFillPhone/>
                <p>+91 8899765324</p>
              </div>
              <div className="icon-cover">
              <FaLocationArrow/>
                <p>Gaya , Bihar</p>
              </div>
              </div>
              <div className="facility-content">
                <img src={process.env.PUBLIC_URL + "/images/child-3.jpg"} alt="" />
              </div>
            </div>
          </div>
        </div>
        
    </div>
   
  );
};

export default Price;
