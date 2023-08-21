import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <div className="main-contacts">
        <div className="first-divs">
          <div className="div-contents">
            <img
              src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-01.jpg"
              alt=""
            />
            <h1>Close to the Client</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eius voluptates explicabo eaque,  pulvinar dapibus leo.</p>
          </div>
          <div className="div-contents">
          <img
              src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-02.jpg"
              alt=""
            />
            <h1>Attention to detail</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eius voluptates explicabo eaque,  pulvinar dapibus leo.</p>
          </div>
        </div>
        <div className="contact-us">
          <div className="contact-us-content">
              <h2>get in touch</h2>
              <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, consequatur. Molestiae, esse possimus. Nisi placeat non iste fugit iusto! Ex?</h5>
              <button>view prices</button>
          </div>
          <div className="contact-us-form">
            <input type="text" className="input-with-cursor" required placeholder="Name"/>
            <input type="email" className="input-with-cursor" required placeholder="Email"/>
            <textarea name="message" className="input-with-cursor" id="" cols="30" placeholder="Message" rows="10"></textarea>
            <button>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
