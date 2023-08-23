import React from "react";
import "./eventDetail.css";

const EventDetail = () => {
  return (
    <div>
      <div className="event-detail">
        <div className="event-image">
          <img src={process.env.PUBLIC_URL + "/images/women-6.jpg"} alt="" />
        </div>
      </div>

      <div className="event-page">
        <div className="event-detail-page">
          <h1>Grammar Books</h1>
          <div className="grammarBook-image">
            <img src={process.env.PUBLIC_URL + "/images/child-17.jpg"} alt="" />
          </div>
          <h2>OUR CAUSES</h2>
          <p>
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
            sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum,
            venenatis malesuada felis quis, ultricies convallis neque.
            Pellentesque tristique fringilla tempus. Vivamus bibendum nibh in
            dolor pharetra, a euismod nulla dignissim. Aenean viverra tincidunt
            nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur
            leo at, congue quam. Nullam hendrerit porta ante vitae tristique.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Vestibulum ligula libero, feugiat faucibus
            mattis eget, pulvinar et ligula.
          </p>
          <hr style={{ marginTop: "2rem" }} />
        </div>
      </div>

      <div className="evenDetail-organizer">
        <div className="details">
          <h1>Details</h1>
          <h2>Date</h2>
          <p>May 14, 2030</p>
          <h2>Time</h2>
          <p>8:00 am - 10:00 am</p>
          <h2>Event Category</h2>
          <p>Category Event</p>
        </div>
        <div className="organizer">
            <h1>Organizer</h1>
            <p>Organizer Name</p>
            <h2>Phone</h2>
          <p>Phone</p>
          <h2>Email</h2>
          <p>Karunodaya@gmail.com</p>
          <p>Email View</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
