import React from "react";
import "./events.css";

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
              <h2>Grammar Books</h2>
              <h3>
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                erat dignissim sed quis.
              </h3>
            </div>

            <div className="event-box-3">
              <img
                src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2020/06/give-1.jpg"
                alt=""
              />
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
              <h2>Water Properties</h2>
              <h3>
                Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas
                erat dignissim sed quis.
              </h3>
            </div>
            <div className="event-box-3">
              <img
                src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2020/06/give-2.jpg"
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
                src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2020/06/give-3.jpg"
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
                src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2020/06/give-5.jpg"
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
                src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2020/06/give-6.jpg"
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
                src="http://www.nicdarkthemes.com/themes/charity-foundation/wp/demo/charity-foundation/wp-content/uploads/sites/2/2022/10/give-7.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="straight-height"></div>
          {/* button  */}
          <div className="pagination">
                <button>previous events</button>
                <button>next events</button>
            </div>
        </div>

       
      </div>
    </div>
  );
};

export default Events;
