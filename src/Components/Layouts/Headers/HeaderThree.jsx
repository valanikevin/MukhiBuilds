import React, { useEffect, useState } from "react";
import Logo from "../../../assets/img/logo/Logo.svg";
function HeaderThree({ className = "menu-area-three" }) {
  const [drawer, setDrawer] = useState(false);
  useEffect(() => {
    if (drawer) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  }, [drawer]);
  return (
    <header>
      <div id="header-fixed-height"></div>
      <div id="sticky-header" className={`menu-area  ${className || ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                onClick={() => setDrawer(!drawer)}
                className="mobile-nav-toggler"
              >
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <a href="/">
                      <img src={Logo} alt="Logo" style={{ width: "100%" }} />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className="">
                        <a href="#">Home</a>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/services">Services Page</a>
                          </li>
                          <li>
                            <a href="/services/services-details">
                              Services Details
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <a href="/contact" className="btn">
                          Get a Quoute
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="mobile-menu">
                <nav className="menu-box">
                  <div onClick={() => setDrawer(!drawer)} className="close-btn">
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="nav-logo">
                    <a href="/">
                      <img src={Logo} alt="Logo" />
                    </a>
                  </div>
                  <div className="menu-outer">
                    <ul className="navigation">
                      <li className="active">
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="/about">About us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/services">Services Page</a>
                          </li>
                          <li>
                            <a href="/services/services-details">
                              Services Details
                            </a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>

                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul className="clearfix list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderThree;
