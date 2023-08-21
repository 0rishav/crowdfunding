import React from "react";
import { RxRadiobutton } from "react-icons/rx";

export const Footer = () => {
  
  return (
    <>
     <footer>
      <div className="main-footer">
        <div className="left-footer">
          <img src={process.env.PUBLIC_URL + '/images/logo-white.png'} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean comm odo ligula eget dolor massa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam.</p>
          <div className="footer-icons">
            <RxRadiobutton style={{color:"yellow"}}/>
            <h2>Choose Your Favourite Cause</h2>
            <RxRadiobutton style={{color:"red"}}/>
            <h2>Donate Amount You Like</h2>
          </div>
          <div className="footer-icons">
            <RxRadiobutton style={{color:"blue"}}/>
            <h2>Register to our website !</h2>
            <RxRadiobutton style={{marginLeft:"2rem",color:"#00baa3"}}/>
            <h2>Stay tunned about cause</h2>
          </div>
        </div>
        <div className="right-footer">
          <h1>Our Partners</h1>
          <div className="footer-img">
            <img src={process.env.PUBLIC_URL + '/images/logo-11.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/logo-12.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/logo-13.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/logo-14.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/logo15.png'} alt="" />
          </div>
          <h3>Newsletter</h3>
          <input type="email" placeholder="Email" />
          <button>Send</button>
        </div>
      </div>
     </footer>
     
    </>
  );
};
