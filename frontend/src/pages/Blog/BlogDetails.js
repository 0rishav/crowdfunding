import React from "react";
import "./blogDetails.css";

const BlogDetails = () => {
  return (
    <div>
      <div className="child">
        <div className="student-image">
          <div className="child-image-1">
            <img src={process.env.PUBLIC_URL + "/images/child-19.jpg"} alt="" />
          </div>
          <div className="child-image-2">
            <div className="child-image-3">
              <h1>Details</h1>
              <div className="child-bio">
                <h2>Reading Time</h2>
                <p>3 Min</p>
              </div>
              <div className="child-bio">
                <h2>Category</h2>
                <p>News</p>
              </div>
              <div className="child-bio">
                <h2>Author</h2>
                <p>Milly Smith</p>
              </div>
              <div className="child-bio">
                <h2>Topic</h2>
                <p>Promotion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section  */}
      <div className="blogDetails-page">
        <div className="left-blogDetails-page">
          <h1>Morbi malesuada imperdiet imperdiet.</h1>
          <p>
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
            sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum,
            venenatis malesuada felis quis, ultricies convallis neque.
            Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in
            dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt
            nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur
            leo at, congue quam
          </p>
          <div className="inside-blogDetail">
            <div className="blogDetail-one">
              <img
                src={process.env.PUBLIC_URL + "/images/mother-child.jpg"}
                alt=""
              />
              <h2>New Website</h2>
            </div>
            <div className="blogDetail-one">
              <img
                src={process.env.PUBLIC_URL + "/images/women-4.jpg"}
                alt=""
              />
              <h2>Latest Event</h2>
            </div>
          </div>
          <h3>
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
            sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum,
            venenatis malesuada felis quis, ultricies convallis neque.
            Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in
            dolor pharetra, a euismod nulla dignissim. Nunc sit amet tellus
            arcu.
          </h3>
          <h1>Praesent vestibulum, mauris varius euismo.</h1>
          <p>
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
            sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum,
            venenatis malesuada felis quis, ultricies convallis neque.
            Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in
            dolor pharetra, a euismod nulla dignissim. Nunc sit amet tellus arcu
          </p>
          <div className="another-div">
            <div className="inside-another-div">
                <img src={process.env.PUBLIC_URL + "/images/women-7.jpg"} alt="" />
                <div className="inside-another-div-heading">
                    <h4>Luz Dakota</h4>
                    <h5>Nam nulla ipsum, venenatis malesuada felis quis, ultricies</h5>
                </div>
            </div>
            <div className="inside-another-div">
            <img src={process.env.PUBLIC_URL + "/images/women-8.jpg"} alt="" />
                <div className="inside-another-div-heading">
                    <h4>Luz Dakota</h4>
                    <h5>Nam nulla ipsum, venenatis malesuada felis quis, ultricies</h5>
                </div>
            </div>
            <div className="inside-another-div">
                <img src={process.env.PUBLIC_URL + "/images/women-9.jpg"} alt="" />
                <div className="inside-another-div-heading">
                    <h4>Luz Dakota</h4>
                    <h5>Nam nulla ipsum, venenatis malesuada felis quis, ultricies</h5>
                </div>
            </div>
            <div className="inside-another-div">
            <img src={process.env.PUBLIC_URL + "/images/women-10.jpg"} alt="" />
                <div className="inside-another-div-heading">
                    <h4>Luz Dakota</h4>
                    <h5>Nam nulla ipsum, venenatis malesuada felis quis, ultricies</h5>
                </div>
            </div>
          </div>
        </div>
        <div className="right-blogDetails-page"></div>
      </div>
    </div>
  );
};

export default BlogDetails;
