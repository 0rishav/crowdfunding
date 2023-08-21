import React from "react";
import "./shop.css";

const Shop = () => {
  return (
    <div>
      <div className="shop">
        <div className="background-shop-image">
          <div className="shop-text">
            <h1>our shop</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec lobortis diam. Pellentesque nec enim ipsum. Fusce ex nisi,
              efficitur vel odio eu, egestas mattis{" "}
            </p>
            <button>buy now</button>
          </div>
        </div>
      </div>
      <div className="shopping-box">
        <p>monthly sale</p>
        <h1>Dialy Promotions</h1>
        <div className="shopping-details">
          <div className="shopping-content">
            <img src={process.env.PUBLIC_URL + '/images/child-5.jpg'} alt="" />
            <h2>Child Protection</h2>
            <h3>$ 22</h3>
            <button>Read more</button>
          </div>
          <div className="shopping-content">
          <img src={process.env.PUBLIC_URL + '/images/child-6.jpg'} alt="" />
            <h2>Orca Project</h2>
            <h3>$ 15.50</h3>
            <button>Read more</button>
          </div>
          <div className="shopping-content">
          <img src={process.env.PUBLIC_URL + '/images/child-7.jpg'} alt="" />
            <h2>Paws Partner</h2>
            <h3>$ 22.50</h3>
            <button>Read more</button>
          </div>
          <div className="shopping-content">
            <img src={process.env.PUBLIC_URL + '/images/child-8.jpg'} alt="" />
            <h2>Predator Defense</h2>
            <h3>$ 19.70</h3>
            <button>Read more</button>
          </div>
          <div className="shopping-content">
            <img src={process.env.PUBLIC_URL + '/images/child-9.jpg'} alt="" />
            <h2>The Wolves</h2>
            <h3>$ 13.40</h3>
            <button>Read more</button>
          </div>
          <div className="shopping-content">
            <img src={process.env.PUBLIC_URL + '/images/child-10.jpg'} alt="" />
            <h2>Rehabilitation</h2>
            <h3>$ 10.90</h3>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
