import React from "react";
import "./about.css";
import { AiOutlineCheck } from "react-icons/ai";

const About = () => {
  return (
    <div>
      {/* 1st section  */}
      <div className="about-us">
        <div className="about-us-content">
          <img
            src={process.env.PUBLIC_URL + '/images/women-6.jpg'}
            alt=""
          />
        </div>
        <div className="about-us-content">
          <h3>our history</h3>
          <h1>THE ORIGIN OF THE FUNDRAISER</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eu maximus ante, eget sollicitudin metus. Sed fringilla efficitur
            fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices​
          </p>
          <div className="about-us-heading">
            <AiOutlineCheck style={{ fontSize: "20px" }} />
            <h5> In sit amet augue non dui sodale dui sodale</h5>
            <AiOutlineCheck style={{ fontSize: "20px" }} />
            <h5> In sit amet augue non dui sodale dui sodale</h5>
          </div>
          <div className="about-us-heading">
            <AiOutlineCheck style={{ fontSize: "20px" }} />
            <h5> In sit amet augue non dui sodale dui sodale </h5>
            <AiOutlineCheck style={{ fontSize: "20px" }} />
            <h5> In sit amet augue non dui sodale dui sodale </h5>
          </div>
          <button>View Prices</button>
        </div>
      </div>
      <hr style={{ padding: "2rem 0rem" }} />
      {/* 2nd section  */}
      <div className="about-us-number">
        <div className="number-count">
          <h1>01</h1>
          <h3>The Start</h3>
          <p>
            Nunc diam nulla, commodo sed neque in, dignissim volutpat orci.
            Maecenas tempus massa, in feugiat.
          </p>
        </div>
        <div className="number-count">
          <h1>02</h1>
          <h3>Settling</h3>
          <p>
            Nunc diam nulla, commodo sed neque in, dignissim volutpat orci.
            Maecenas tempus massa, in feugiat.
          </p>
        </div>
        <div className="number-count">
          <h1>03</h1>
          <h3>Today</h3>
          <p>
            Nunc diam nulla, commodo sed neque in, dignissim volutpat orci.
            Maecenas tempus massa, in feugiat.
          </p>
        </div>
      </div>

      {/* 3rd section  */}

      <div className="about-us-promotion">
        <div className="promotion-details-one">
          <img
            src={process.env.PUBLIC_URL + '/images/women-6.jpg'}
            alt=""
          />
          <h5>price plans</h5>
          <h1>Daily Promotions</h1>
          <p>
            Nam vulputate auctor nibh sed posuere. Sed nunc orci, varius ut
            felis in, finibus viverra ipsum.
          </p>
          <button>More Info</button>
        </div>
        <div className="promotion-details-two">
          <div className="promotion">
            <div className="img-promotion">
              <img
                src={process.env.PUBLIC_URL + '/images/logo-6.png'}
                alt=""
              />
            </div>
            <div className="promotion-heading">
              <h4>Ideation</h4>
              <h6>
                Aliquam auctor auctor leo, vel tempor magna scelerisque non.
              </h6>
              <button>more info</button>
            </div>
          </div>
          <div className="promotion">
            <div className="img-promotion">
              <img
                src={process.env.PUBLIC_URL + '/images/logo-7.png'}
                alt=""
              />
            </div>
            <div className="promotion-heading">
              <h4>Create</h4>
              <h6>
                Aliquam auctor auctor leo, vel tempor magna scelerisque non.
              </h6>
              <button>more info</button>
            </div>
          </div>
          <div className="promotion">
            <div className="img-promotion">
              <img
                src={process.env.PUBLIC_URL + '/images/logo-8.png'}
                alt=""
              />
            </div>
            <div className="promotion-heading">
              <h4>Processing</h4>
              <h6>
                Aliquam auctor auctor leo, vel tempor magna scelerisque non.
              </h6>
              <button>more info</button>
            </div>
          </div>
          <div className="promotion">
            <div className="img-promotion">
              <img
                src={process.env.PUBLIC_URL + '/images/logo-9.png'}
                alt=""
              />
            </div>
            <div className="promotion-heading">
              <h4>Finalization</h4>
              <h6>
                Aliquam auctor auctor leo, vel tempor magna scelerisque non.
              </h6>
              <button>more info</button>
            </div>
          </div>
        </div>
      </div>

      {/* 4th section  */}

      <div className="experience">
        <div className="background-experience-image">
          <div className="experience-content">
            <h1>Best Experience</h1>
            <h2>********</h2>
            <p>
              Duis commodo enim dui, ac ultricies justo aliquam ut. Sed sed
              tortor commodo, elementum justo ut, dignissi.
            </p>
            <img
              src={process.env.PUBLIC_URL + '/images/women-7.jpg'}
              alt=""
            />
            <h3>Emily Allen</h3>
            <h4>customers</h4>
          </div>
        </div>
      </div>
      {/* 5th section  */}

      <div className="summer">
        <div className="summer-content">
          <h2>summer promotion</h2>
          <h1>check the adoption</h1>
        </div>
        <div className="summer-promotion">
          <div className="summer-promotion-content">
            <div className="promotion-content">
              <img
                src={process.env.PUBLIC_URL + '/images/women-7.jpg'}
                alt=""
              />

              <div className="promotion-head">
                <h3>Central Africa</h3>
                <p>
                  Mauris et tortor sit amet ex sagittis feugiat praesent rutrum,
                  lorem ipsum dolor sit
                </p>
              </div>
              <div className="promotion-price">
                <p>45 $</p>
                <button>Sale</button>
              </div>
            </div>
            <div className="promotion-content">
              <img
                src={process.env.PUBLIC_URL + '/images/child-4.jpg'}
                alt=""
              />

              <div className="promotion-head">
                <h3>Sri Lanka</h3>
                <p>
                  Mauris et tortor sit amet ex sagittis feugiat praesent rutrum,
                  lorem ipsum dolor sit
                </p>
              </div>
              <div className="promotion-price">
                <p>35 $</p>
                <button>hot</button>
              </div>
            </div>
            <div className="promotion-content">
              <img
                src={process.env.PUBLIC_URL + '/images/women-3.jpg'}
                alt=""
              />

              <div className="promotion-head">
                <h3>Indonesia</h3>
                <p>
                  Mauris et tortor sit amet ex sagittis feugiat praesent rutrum,
                  lorem ipsum dolor sit
                </p>
              </div>
              <div className="promotion-price">
                <p>50 $</p>
                <button>promo</button>
              </div>
            </div>
          </div>
          <div className="summer-promotion-content">
            <div className="promotion-content">
              <img
                src={process.env.PUBLIC_URL + '/images/women.jpg'}
                alt=""
              />

              <div className="promotion-head">
                <h3>African Island</h3>
                <p>
                  Mauris et tortor sit amet ex sagittis feugiat praesent rutrum,
                  lorem ipsum dolor sit
                </p>
              </div>
              <div className="promotion-price">
                <p>29 $</p>
                <button>best</button>
              </div>
            </div>
            <div className="promotion-content">
              <img
                src={process.env.PUBLIC_URL + '/images/women-3.jpg'}
                alt=""
              />

              <div className="promotion-head">
                <h3>South Africa</h3>
                <p>
                  Mauris et tortor sit amet ex sagittis feugiat praesent rutrum,
                  lorem ipsum dolor sit
                </p>
              </div>
              <div className="promotion-price">
                <p>50 $</p>
                <button>promo</button>
              </div>
            </div>
            <div className="promotion-content">
              <img
                src={process.env.PUBLIC_URL + '/images/women.jpg'}
                alt=""
              />

              <div className="promotion-head">
                <h3>Indonesia</h3>
                <p>
                  Mauris et tortor sit amet ex sagittis feugiat praesent rutrum,
                  lorem ipsum dolor sit
                </p>
              </div>
              <div className="promotion-price">
                <p>50 $</p>
                <button>Sale</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6th section  */}

      <div className="customer">
        <div className="background-customer">
          <div className="customer-details">
            <img src={process.env.PUBLIC_URL + '/images/child-16.jpg'} alt="" />
            <div className="customer-heading">
              <h2>Our Commitment is a Satisfied Customer</h2>
              <p>Lorem ipsum dolor sit amet, tempus iaculis duis pretium​ Lorem ipsum dolor sit amet, tempus iaculis</p>
            </div>
            <button>shop now</button>
          </div>
        </div>
      </div>

      {/* 7th section  */}
      <div className="about-us-boxes">
        <div className="about-us-map">
          <img src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/image-03.jpg" alt="" />
        </div>
        <div className="about-us-map">
          {/* <iframe src="https://www.google.com/maps/@24.7980345,85.0048291,17z/data=!4m2!7m1!2e1?entry=ttu" frameborder="0"></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default About;
