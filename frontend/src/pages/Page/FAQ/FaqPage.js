import React from "react";
import "./faqpage.css";
import { AiOutlineCheck } from "react-icons/ai";

const FaqPage = () => {
  return (
    <div>
      <div className="faq">
        <div className="background-faq">
          <img src={process.env.PUBLIC_URL + "/images/faq-image.jpg"} alt="" />
        </div>
      </div>
      <div className="faq-main">
        <div className="faq-heading">
          <p>Frequent Question</p>
          <h1>Feel Free To Contact Us !</h1>
        </div>
      </div>
      <div className="faq-detail">
        <div className="faq-detail-page">
          <h2>1</h2>
          <h3>Analyses</h3>
          <h4>
            Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condim.
          </h4>
          <div className="faq-icon">
            <AiOutlineCheck style={{ color: "rgb(136, 131, 131)" }} />
            <p>In sit amet augue non dui</p>
          </div>
          <div className="faq-icon">
            <AiOutlineCheck style={{ color: "rgb(136, 131, 131)" }} />
            <p>In sit amet augue non dui</p>
          </div>
        </div>
        <div className="faq-detail-page">
          <h2>2</h2>
          <h3>Creation</h3>
          <h4>
            Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condim.
          </h4>
          <div className="faq-icon">
            <AiOutlineCheck style={{ color: "rgb(136, 131, 131)" }} />
            <p>In sit amet augue non dui</p>
          </div>
          <div className="faq-icon">
            <AiOutlineCheck style={{ color: "rgb(136, 131, 131)" }} />
            <p>In sit amet augue non dui</p>
          </div>
        </div>
        <div className="faq-detail-page">
          <h2>3</h2>
          <h3>Marketing</h3>
          <h4>
            Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condim.
          </h4>
          <div className="faq-icon">
            <AiOutlineCheck style={{ color: "rgb(136, 131, 131)" }} />
            <p>In sit amet augue non dui</p>
          </div>
          <div className="faq-icon">
            <AiOutlineCheck style={{ color: "rgb(136, 131, 131)" }} />
            <p>In sit amet augue non dui</p>
          </div>
        </div>
        <div className="faq-detail-page">
          <h2>4</h2>
          <h3>Selling</h3>
          <h4>
            Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit.
            Proin tempor nunc vel nisl condim.
          </h4>
          <div className="faq-icon">
            <AiOutlineCheck style={{ color: "rgb(136, 131, 131)" }} />
            <p>In sit amet augue non dui</p>
          </div>
          <div className="faq-icon">
            <AiOutlineCheck style={{ color: "rgb(136, 131, 131)" }} />
            <p>In sit amet augue non dui</p>
          </div>
        </div>
      </div>
      <div className="last-faq">
        <div className="faq-left">
          <img src={process.env.PUBLIC_URL + "/images/child-17.jpg"} alt="" />
        </div>
        <div className="faq-right">
          <p>Best Faq</p>
          <h1>CHECK ALL QUESTIONS BELOW</h1>
          <h2>
            Sed tristique ac lorem quis maximus. Aliquam pharetra, dui vel
            finibus porta, elit massa vestibulum sapien, eu molestie odio lacus
            a odio. In ornare felis vitae lacus congue pretium. Donec ligula
            arcu, ultrices nec vulputate a, lacinia sed lectus. Donec vel eros
            hendrerit, iaculis arcu vel, euismod ligula.
          </h2>
          <div className="faq-question">
            <h4>1. LOREM IPSUM.</h4>
            <h4>2. DOLOR SIT AMET.</h4>
          </div>
          <div className="faq-question">
            <h4>3. AVENIC CONSIC.</h4>
            <h4>4. GIM CUL AMENIS.</h4>
          </div>
          <div className="faq-question">
            <h4>5. ALET OMENTIS.</h4>
            <h4>6. LOBERNA ASTRUBAL.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
