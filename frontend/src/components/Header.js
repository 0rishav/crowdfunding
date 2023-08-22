import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BiUserCircle } from "react-icons/bi";
import {motion} from "framer-motion"

const Header = () => {
  
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const subMenuToggle = (event) => {
    event.stopPropagation();
      setIsSubMenu(!isSubMenu);
  }

  const toggleNav = () => {
    console.log("click")
    setNavOpen(!navOpen);
}  

const closeNav = () => {
  setNavOpen(false); 
}
  return (
    <>
      
      <motion.nav initial={{y:-100}} animate={{y:0}} exit={{y:-100}} transition={{ duration: 1, ease: 'easeOut' }}>
        <div className="navbar">
        <GiHamburgerMenu className="sidebar_icon-2" onClick={toggleNav} />
          <div className="logoes">
           <img
              src={process.env.PUBLIC_URL + '/images/logo-white.png'}
              alt=""
            />
          </div>
          <div className={`nav-links ${navOpen ? "open" : ""}`}>
            <div className="sidebar_logo">
              
              <img src={process.env.PUBLIC_URL + '/images/logo-white.png'} className="image_name" alt="" />
              <RxCross2 className="sidebar_icon-1"  onClick={closeNav}/>
            </div>
           
            <ul className="links">
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"#"} onClick={subMenuToggle}>CAUSES</Link>
                <ul className={`cause-sub-menu ${isSubMenu ? 'open' : ' '}`}>
                  
                  <li>
                    <Link to={"/cause/features"}>Features</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={"/cause/documents"}>Documents</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={"/cause/donate-now"}>Donate now</Link>
                  </li>
                  <hr />
                  <li>
                    <Link>Comments</Link>
                  </li>
                  <hr />
                  <li>
                    <Link>Maps</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/give"}>GIVE</Link>
              </li>
              <li>
                <Link to={"/about"}>ABOUT US</Link>
              </li>
              <li>
                <Link to={"#"}>PAGES</Link>
                <ul className={`page-sub-menu ${isSubMenu ? 'open' : ' '}`}>
                  <li>
                    <Link to={"/pages/events"}>Events</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={"/pages/gallery"}>Gallery</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={"/pages/prices"}>Prices</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={"/pages/services"}>Services</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={"/pages/FAQ"}>FAQ</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={"/about"}>About us</Link>
                  </li>
                  <hr />
                  <li>
                    <Link to={"/shop"}>Shop</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/shop"}>SHOP</Link>
              </li>
              <li>
                <Link to={"/blog"}>BLOG</Link>
              </li>
              <li>
                <Link to={"/contact"}>CONTACT</Link>
              </li>
              <li>
                <Link to={"/signup"}>
                  <BiUserCircle
                    style={{ fontSize: "30px", marginTop: "20px" }}
                  />
                </Link>
              </li>
              {/* <button>donate now</button> */}
            </ul>
          </div>
          <div className="header-btn">
            <button>Donate</button>
          </div>
          
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
