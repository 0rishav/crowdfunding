import React from "react";
import "./give.css";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";

const Give = () => {
  return (
    <div>
      <div className="give">
        <div className="background-give">
          <div className="give-left-content">
            <h1>Give</h1>
            <h2>Order now</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              et metus augue. Mauris ut libero eget erat scelerisque vehicula.
              Phasellus nec blandit metus.
            </p>
            <div className="give-icon">
              <RiVisaLine />
              <FaCcPaypal />
              <SiPaytm />
              <FaCcStripe />
            </div>
            <div className="give-btn">
              <button>Order now</button> 
              <button>Read more</button>
            </div>
          </div>
          <div className="give-right-support-us">
            <div className="give-right-support-content">
              <h1>Support us</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Minima
                ullam excepturi sjlaborum, recusandae culpa magni voluptatem
                quia facilis quod, blanditiis commodi sequi assumenda.
              </p>
            </div>

            <div className="give-left-input">
              <h4>$</h4>
              <input type="text" />
            </div>
            <div className="give-right-btn">
              <button>$50</button>
              <button>$100.00</button>
              <button>$150.00</button>
              <button>$200.00</button>
              <button>custom</button>
            </div>
            <div className="give-btn-two">
              <button>Donate Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-give">
        <div className="give-order">
          <h2>order now</h2>
          <h1>Best Causes</h1>
          <div className="main-give-card">
            <div className="give-card">
              <img
                src={process.env.PUBLIC_URL + '/images/child-12.jpg'}
                alt=""
              />
              <h4>Child Support</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                vitae fugit culpa tempore delectus doloremque aliquid dolores
                deleniti{" "}
              </p>
              <h6>Donate</h6>
              <div className="last-give-card">
                <div className="give-color">
                  <div className="give-green"></div>
                  <div className="give-white"></div>
                </div>
                <div className="give-order-price">
                  <div className="give-calculation">
                    <h6>27%</h6>
                    <h3>of 100%</h3>
                  </div>
                  <div className="give-calculation">
                    <h6>2</h6>
                    <h3>donations</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="give-card">
              <img
                src={process.env.PUBLIC_URL + '/images/child-13.jpg'}
                alt=""
              />
              <h4>Education</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                vitae fugit culpa tempore delectus doloremque aliquid dolores
                deleniti{" "}
              </p>
              <h6>Donate</h6>
              <div className="last-give-card">
                <div className="give-color">
                  <div className="give-green"></div>
                  <div className="give-white"></div>
                </div>
                <div className="give-order-price">
                  <div className="give-calculation">
                    <h6>27%</h6>
                    <h3>of 100%</h3>
                  </div>
                  <div className="give-calculation">
                    <h6>2</h6>
                    <h3>donations</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="give-card">
              <img
                src={process.env.PUBLIC_URL + '/images/child-14.jpg'}
                alt=""
              />
              <h4>Open Canteens</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                vitae fugit culpa tempore delectus doloremque aliquid dolores
                deleniti{" "}
              </p>
              <h6>Donate</h6>
              <div className="last-give-card">
                <div className="give-color">
                  <div className="give-green"></div>
                  <div className="give-white"></div>
                </div>
                <div className="give-order-price">
                  <div className="give-calculation">
                    <h6>27%</h6>
                    <h3>of 100%</h3>
                  </div>
                  <div className="give-calculation">
                    <h6>2</h6>
                    <h3>donations</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="give-card">
              <img
                src={process.env.PUBLIC_URL + '/images/child-15.jpg'}
                alt=""
              />
              <h4>Adoptions</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                vitae fugit culpa tempore delectus doloremque aliquid dolores
                deleniti{" "}
              </p>
              <h6>Donate</h6>
              <div className="last-give-card">
                <div className="give-color">
                  <div className="give-green"></div>
                  <div className="give-white"></div>
                </div>
                <div className="give-order-price">
                  <div className="give-calculation">
                    <h6>27%</h6>
                    <h3>of 100%</h3>
                  </div>
                  <div className="give-calculation">
                    <h6>2</h6>
                    <h3>donations</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="give-card">
              <img
                src={process.env.PUBLIC_URL + '/images/child-16.jpg'}
                alt=""
              />
              <h4>New Wells</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                vitae fugit culpa tempore delectus doloremque aliquid dolores
                deleniti{" "}
              </p>
              <h6>Donate</h6>
              <div className="last-give-card">
                <div className="give-color">
                  <div className="give-green"></div>
                  <div className="give-white"></div>
                </div>
                <div className="give-order-price">
                  <div className="give-calculation">
                    <h6>27%</h6>
                    <h3>of 100%</h3>
                  </div>
                  <div className="give-calculation">
                    <h6>2</h6>
                    <h3>donations</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="give-card">
              <img
                src={process.env.PUBLIC_URL + '/images/child-17.jpg'}
                alt=""
              />
              <h4>Free Water</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                vitae fugit culpa tempore delectus doloremque aliquid dolores
                deleniti{" "}
              </p>
              <h6>Donate</h6>
              <div className="last-give-card">
                <div className="give-color">
                  <div className="give-green"></div>
                  <div className="give-white"></div>
                </div>
                <div className="give-order-price">
                  <div className="give-calculation">
                    <h6>27%</h6>
                    <h3>of 100%</h3>
                  </div>
                  <div className="give-calculation">
                    <h6>2</h6>
                    <h3>donations</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Give;
