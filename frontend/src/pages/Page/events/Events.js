import React from "react";
import "./events.css";
import {Link} from "react-router-dom"

const Events = () => {
  return (
    <div>
      <div className="main-Event">
        <h1>Events Category Events</h1>
        <div className="input-event">
          <input type="text" placeholder="search for events" />
          <button>Find Events</button>
        </div>
        <div className="straight-height"></div>
        <div className="events-box">
          <div className="events-box-card">
            <div className="event-box-1">
              <h5>TUE</h5>
              <h6>14</h6>
            </div>
            <div className="event-box-2">
              <h4>MAY 14, 2030 @ 8:00 AM - 5:00 PM</h4>
             <Link to={"/events/grammar-Books"}><h2>Grammar Books</h2></Link>
              <h3>
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                erat dignissim sed quis.
              </h3>
            </div>

            <div className="event-box-3">
              <Link to={"/events/grammar-Books"}><img
                src={process.env.PUBLIC_URL + '/images/child-16.jpg'}
                alt=""
              /></Link>
            </div>
          </div>
          <div className="straight-height"></div>
          <div className="events-box-card">
            <div className="event-box-1">
              <h5>THU</h5>
              <h6>6</h6>
            </div>
            <div className="event-box-2">
              <h4>MAY 14, 2030 @ 8:00 AM - 5:00 PM</h4>
              <Link><h2>Water Properties</h2></Link>
              <h3>
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                erat dignissim sed quis.
              </h3>
            </div>
            <div className="event-box-3">
              <img
                src={process.env.PUBLIC_URL + '/images/child-17.jpg'}
                alt=""
              />
            </div>
          </div>
          <div className="events-box-card">
            <div className="event-box-1">
              <h5>THU</h5>
              <h6>6</h6>
            </div>
            <div className="event-box-2">
              <h4>MAY 14, 2030 @ 8:00 AM - 5:00 PM</h4>
              <h2>New Teachers</h2>
              <h3>
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                erat dignissim sed quis.
              </h3>
            </div>
            <div className="event-box-3">
              <img
                src={process.env.PUBLIC_URL + '/images/child-12.jpg'}
                alt=""
              />
            </div>
          </div>
          <div className="events-box-card">
            <div className="event-box-1">
              <h5>THU</h5>
              <h6>6</h6>
            </div>
            <div className="event-box-2">
              <h4>MAY 14, 2030 @ 8:00 AM - 5:00 PM</h4>
              <h2>Drought Info</h2>
              <h3>
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                erat dignissim sed quis.
              </h3>
            </div>
            <div className="event-box-3">
              <img
                src={process.env.PUBLIC_URL + '/images/child-13.jpg'}
                alt=""
              />
            </div>
          </div>
          <div className="events-box-card">
            <div className="event-box-1">
              <h5>TUE</h5>
              <h6>18</h6>
            </div>
            <div className="event-box-2">
              <h4>MAY 14, 2030 @ 8:00 AM - 5:00 PM</h4>
              <h2>Clothes Coming</h2>
              <h3>
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                erat dignissim sed quis.
              </h3>
            </div>
            <div className="event-box-3">
              <img
                src={process.env.PUBLIC_URL + '/images/child-14.jpg'}
                alt=""
              />
            </div>
          </div>
          <div className="straight-height"></div>
          <div className="events-box-card">
            <div className="event-box-1">
              <h5>TUE</h5>
              <h6>18</h6>
            </div>
            <div className="event-box-2">
              <h4>MAY 14, 2030 @ 8:00 AM - 5:00 PM</h4>
              <h2>History of Tibet</h2>
              <h3>
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                erat dignissim sed quis.
              </h3>
            </div>
            <div className="event-box-3">
              <img
                src={process.env.PUBLIC_URL + '/images/child-15.jpg'}
                alt=""
              />
            </div>
          </div>
          <div className="straight-height"></div>
          {/* button  */}
          <div className="pagination">
                <button>previous events</button>
                <button style={{padding:"8px 25px"}}>next events</button>
            </div>
        </div>

       
      </div>
    </div>
  );
};

export default Events;
