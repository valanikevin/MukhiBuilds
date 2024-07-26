import React from "react";
import AreaBg1 from "../assets/img/bg/area_bg01.jpg";
import AreaBg2 from "../assets/img/bg/appointment_bg.jpg";
import CounterIcon1 from "../assets/img/icon/counter_icon01.svg";
import CounterIcon2 from "../assets/img/icon/counter_icon02.svg";
import CounterIcon3 from "../assets/img/icon/counter_icon03.svg";
import CounterIcon4 from "../assets/img/icon/counter_icon04.svg"; // Assuming this exists
import AppointmentImg from "../assets/img/images/appointment_img.png";

function MultipleArea() {
  return (
    <div className="area-bg">
      <div
        className="area-background-img jarallax"
        style={{
          backgroundImage: `url(${AreaBg1})`,
        }}
      ></div>
      <div className="counter-area-two">
        <div className="container">
          <div className="counter-inner wow fadeInUp" data-wow-delay=".2s">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="counter-item-two">
                  <div className="counter-icon">
                    <img src={CounterIcon1} alt="" />
                  </div>
                  <div className="counter-content">
                    <span className="count odometer">1500</span>
                    <p>Project Complete</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="counter-item-two">
                  <div className="counter-icon">
                    <img src={CounterIcon2} alt="" />
                  </div>
                  <div className="counter-content">
                    <span className="count odometer">8562</span>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="counter-item-two">
                  <div className="counter-icon">
                    <img src={CounterIcon3} alt="" />
                  </div>
                  <div className="counter-content">
                    <span className="count odometer">450</span>
                    <p>Experienced Staff</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="counter-item-two">
                  <div className="counter-icon">
                    <img src={CounterIcon4} alt="" />
                  </div>
                  <div className="counter-content">
                    <span className="count odometer">38</span>
                    <p>Awards Win</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="appointment-area pt-115">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title white-title mb-60">
                <span className="sub-title">
                  Your roof require professional attention
                </span>
                <h2 className="title">Book Your Appointment</h2>
              </div>
            </div>
          </div>
          <div
            className="appointment-inner"
            style={{
              backgroundImage: `url(${AreaBg2})`,
            }}
          >
            <div className="row">
              <div className="col-xl-7">
                <div className="appointment-form">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="name"
                            type="text"
                            placeholder="First Name"
                          />
                          <label htmlFor="name">
                            <i className="fas fa-user"></i>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                          />
                          <label htmlFor="lastName">
                            <i className="fas fa-user"></i>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="phone"
                            type="text"
                            placeholder="Phone Number"
                          />
                          <label htmlFor="phone">
                            <i className="fas fa-phone-alt"></i>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="email"
                            type="text"
                            placeholder="Email Address"
                          />
                          <label htmlFor="email">
                            <i className="fas fa-envelope"></i>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-grp">
                          <input
                            id="location"
                            type="text"
                            placeholder="Address"
                          />
                          <label htmlFor="location">
                            <i className="fas fa-map-marker-alt"></i>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp select-grp">
                          <select name="city" className="orderby">
                            <option value="City / Town">City / Town</option>
                            <option value="Dhaka, Bangladesh">
                              Dhaka, Bangladesh
                            </option>
                            <option value="Baltimore, MD">Baltimore, MD</option>
                            <option value="New York, NY">New York, NY</option>
                            <option value="New Orleans, LA">
                              New Orleans, LA
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp select-grp">
                          <select name="state" className="orderby">
                            <option value="State">State</option>
                            <option value="Dhaka, Bangladesh">
                              Dhaka, Bangladesh
                            </option>
                            <option value="Baltimore, MD">Baltimore, MD</option>
                            <option value="New York, NY">New York, NY</option>
                            <option value="New Orleans, LA">
                              New Orleans, LA
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn">
                      Request Submit Now
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="appointment-img">
                  <img src={AppointmentImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MultipleArea;
