import React from "react";
import "./service.css";

const Services = () => {
  return (
    <div>
      <div className="service-first">
        <div className="left-service-box">
          <h1>INDUSTRY HAS BEEN PRESENT FOR OVER 20 YEARS HERE IN THE CITY.</h1>
        </div>
        <div className="right-service-box">
          <div className="service-img">
            <img
              src={process.env.PUBLIC_URL + '/images/women-5.jpg'}
              alt=""
            />
            <div className="service-head">
              <h2>Our Shop</h2>
              <p>more info</p>
            </div>
          </div>
          <div className="service-img">
            <img
              src={process.env.PUBLIC_URL + '/images/child-4.jpg'}
              alt=""
            />
            <div className="service-head">
              <h2>From 1950</h2>
              <p>Read more</p>
            </div>
          </div>
        </div>
      </div>

      <div className="service-second">
        <div className="service-card-detail">
          <img
            src={process.env.PUBLIC_URL + '/images/logo-9.png'}
            alt=""
          />
          <div className="service-card-para">
            <p>
              Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.
              Ut velit augue, imperdiet vel leo id, cursus vehicula urna.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="service-card-detail">
          <img
            src={process.env.PUBLIC_URL + '/images/logo-9.png'}
            alt=""
          />
          <div className="service-card-para">
            <p>
              Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.
              Ut velit augue, imperdiet vel leo id, cursus vehicula urna.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="service-card-detail">
          <img
            src={process.env.PUBLIC_URL + '/images/logo-9.png'}
            alt=""
          />
          <div className="service-card-para">
            <p>
              Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.
              Ut velit augue, imperdiet vel leo id, cursus vehicula urna.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="service-card-detail">
          <img
            src={process.env.PUBLIC_URL + '/images/logo-9.png'}
            alt=""
          />
          <div className="service-card-para">
            <p>
              Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.
              Ut velit augue, imperdiet vel leo id, cursus vehicula urna.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="service-card-detail">
          <button className="more-info-btn">more Info</button>
        </div>
      </div>

      <div className="service-second">
        <div className="card-service">
          <img
            src={process.env.PUBLIC_URL + '/images/child-11.jpg'}
            alt=""
          />
        </div>
        <div className="card-service">
          <img
            src={process.env.PUBLIC_URL + '/images/child-12.jpg'}
            alt=""
          />
        </div>
        <div className="card-service">
          <img
            src={process.env.PUBLIC_URL + '/images/child-13.jpg'}
            alt=""
          />
        </div>
        <div className="card-service">
          <img
            src={process.env.PUBLIC_URL + '/images/child-14.jpg'}
            alt=""
          />
        </div>
        <div className="card-service">
          <img
            src={process.env.PUBLIC_URL + '/images/child-15.jpg'}
            alt=""
          />
        </div>
        <div className="card-service">
          <img
            src={process.env.PUBLIC_URL + '/images/child-16.jpg'}
            alt=""
          />
        </div>
        <div className="card-service">
          <img
            src={process.env.PUBLIC_URL + '/images/child-17.jpg'}
            alt=""
          />
        </div>
        <div className="card-service">
          <img
            src={process.env.PUBLIC_URL + '/images/child-4.jpg'}
            alt=""
          />
        </div>
      </div>

      <div className="fourth-service">
        <div className="left-fourth-service">
          <h1>THE ORIGIN OF THE BUSINESS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et metus augue. Mauris ut libero eget erat scelerisque vehicula.
            Phasellus nec blandit metus. Nulla quis molestie risus.
          </p>
          <button>View Prices</button>
        </div>
        <div className="right-fourth-service">
          <img
            src={process.env.PUBLIC_URL + '/images/child-13.jpg'}
            alt=""
          />
        </div>
      </div>

      <div className="second-last-service">
        <div className="service-creation">
            <img src={process.env.PUBLIC_URL + '/images/logo-9.png'} alt="" />
            <div className="service-creation-heading">
                <h1>Creation</h1>
                <p>Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.</p>
            </div>
        </div>
        <div className="service-creation">
        <img src={process.env.PUBLIC_URL + '/images/logo-7.png'} alt="" />
            <div className="service-creation-heading">
                <h1>Analyses</h1>
                <p>Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.</p>
            </div>
        </div>
        <div className="service-creation">
        <img src={process.env.PUBLIC_URL + '/images/logo-8.png'} alt="" />
            <div className="service-creation-heading">
                <h1>Marketing</h1>
                <p>Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
