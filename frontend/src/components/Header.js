import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { BiUserCircle } from "react-icons/bi";
import {motion} from "framer-motion"

const Header = () => {
 
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("click")
    setNavOpen(!navOpen);
}  

const closeNav = () => {
  setNavOpen(false); // Close the navigation menu
}
  return (
    <>
      {/* <nav>
        <div className="logo">
            <img src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/logo-white.png" alt="charity" />
        </div>
        <div>
          <ul id="navbar" className={open ? "show":""}>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Causes</Link>
            </li>
           <li className={`dropdown ${open ? "open" : ""}`}>
              <div className="dropdown-toggle" onClick={toggleMenu}>
                Causes
              </div>
              <ul className="dropdown-menu">
              <li>
                  <Link to="/cause">Causes</Link>
                </li>
                <li>
                  <Link to="/cause1">Features</Link>
                </li>
               
                <li>
                  <Link to="/cause2">Documents</Link>
                </li>
                <li>
                  <Link to="/cause2">Donors</Link>
                </li>
                <li>
                  <Link to="/cause2">Comments</Link>
                </li>
                <li>
                  <Link to="/cause2">maps</Link>
                </li>
                
                Add more cause links as needed
              </ul> 
            </li>
            <li>
              <Link>Give</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link>Pages</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/signup"}><BiUserCircle style={{fontSize:"30px"}}/></Link>
            </li>
            <button>Donate Now</button>
          </ul>
    </div>
    <div id="mobile" onClick={toggleMenu}>
       {open ? <RxCross2 className="icons"/>:<GiHamburgerMenu className="icons"/>}
        
    </div>
      </nav>  */}
      <motion.nav initial={{y:-100}} animate={{y:0}} exit={{y:-100}} transition={{ duration: 1, ease: 'easeOut' }}>
        <div className="navbar">
        <GiHamburgerMenu className="sidebar_icon-2" onClick={toggleNav} />
          <div className="logoes">
           <img
              src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/logo-white.png"
              alt=""
            />
          </div>
          <div className={`nav-links ${navOpen ? "open" : ""}`}>
            <div className="sidebar_logo">
              
              <img src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/logo-white.png" className="image_name" alt="" />
              <RxCross2 className="sidebar_icon-1"  onClick={closeNav}/>
            </div>
           
            <ul className="links">
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"#"}>CAUSES</Link>
                <ul className="cause-sub-menu">
                  
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
                <ul className="page-sub-menu">
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
