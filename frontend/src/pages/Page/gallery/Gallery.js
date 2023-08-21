import React from "react";
import "./gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="gallery-first">
        <div className="left-gallery-box">
          <h1>
            HELLO. OUR BUSINESS HAS BEEN PRESENT FOR OVER 20 YEARS IN CITY.
          </h1>
        </div>
        <div className="right-gallery-box">
          <div className="gallery-img">
            <img
              src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-09.jpg"
              alt=""
            />
            <div className="gallery-head">
              <h2>Betty Stuart</h2>
              <p>director</p>
            </div>
          </div>
          <div className="gallery-img">
            <img
              src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-10.jpg"
              alt=""
            />
            <div className="gallery-head">
              <h2>Lucas Pine</h2>
              <p>copartner</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-second">
        <div className="card-gallery">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-06.jpg"
            alt=""
          />
        </div>
        <div className="card-gallery">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-09.jpg"
            alt=""
          />
        </div>
        <div className="card-gallery">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-08.jpg"
            alt=""
          />
        </div>
        <div className="card-gallery">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-07.jpg"
            alt=""
          />
        </div>
        <div className="card-gallery">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-10.jpg"
            alt=""
          />
        </div>
        <div className="card-gallery">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-05.jpg"
            alt=""
          />
        </div>
        <div className="card-gallery">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-15.jpg"
            alt=""
          />
        </div>
        <div className="card-gallery">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-16.jpg"
            alt=""
          />
        </div>
      </div>
      {/* 3rd content  */}
      <div className="third-gallery">
        <div className="background-gallery"></div>
      </div>

      {/* 4th content  */}

      <div className="fourth-gallery">
        <div className="left-fourth-gallery">
          <h1>THE ORIGIN OF THE BUSINESS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et metus augue. Mauris ut libero eget erat scelerisque vehicula.
            Phasellus nec blandit metus. Nulla quis molestie risus.
          </p>
          <button>View Prices</button>
        </div>
        <div className="right-fourth-gallery">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/square-17.jpg"
            alt=""
          />
        </div>
      </div>

      {/* 5th content  */}
      <div className="fifth-gallery">
        <div className="ngo-detail">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/icon-05.png"
            alt=""
          />
          <div className="ngo-detail-heading">
            <h2>The Beginning</h2>
            <p>
              Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.
            </p>
          </div>
        </div>
        <div className="ngo-detail">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/icon-04.png"
            alt=""
          />
          <div className="ngo-detail-heading">
            <h2>Production</h2>
            <p>
              Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.
            </p>
          </div>
        </div>
        <div className="ngo-detail">
          <img
            src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/icon-06.png"
            alt=""
          />
          <div className="ngo-detail-heading">
            <h2>Current Day</h2>
            <p>
              Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
