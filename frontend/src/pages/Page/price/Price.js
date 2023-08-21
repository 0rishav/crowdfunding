import React from "react";
import "./price.css";

const Price = () => {
  return (
    <div>
      <div className="main-box-price">
        <div className="left-price-boxes">
          <h1>BEST HELP IN OUR TOWN.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et metus augue. Mauris ut libero eget erat scelerisque vehicula.
            Phasellus nec blandit metus. Nulla quis molestie risus.
          </p>
          <button className="left-price-btn">More Info</button>
        </div>
        <div className="right-price-box">
          <div className="left-price-plan">
            <div className="left-top-price-plan">
              <h2>Basic Plan</h2>
              <h3>$ 74.99</h3>
              <h5>Annual</h5>
            </div>
            <div className="left-bottom-price-plan">
              <p>
                Praesent ultrices urna purus Sed vitae tristique nisl ultric
                Donec a ligula lacinia, cons Nunc scelerisque velit a pul
              </p>
              <button>check</button>
            </div>
          </div>
          <div className="right-price-plan">
            <div className="left-top-price-plan" style={{backgroundColor:"black"}}>
              <h2>Popular</h2>
              <h3>$ 79.99</h3>
              <h5>monthly</h5>
            </div>
            <div className="left-bottom-price-plan">
              <p>
                Praesent ultrices urna purus Sed vitae tristique nisl ultric
                Donec a ligula lacinia, cons Nunc scelerisque velit a pul
              </p>
              <button style={{backgroundColor:"#5c5c5c"}}>check</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
