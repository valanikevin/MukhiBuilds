import React from "react";
import FooterBg from "../../../assets/img/bg/footer_bg.jpg";
import fInstaImg01 from "../../../assets/img/instagram/f_insta_img01.jpg";
import fInstaImg02 from "../../../assets/img/instagram/f_insta_img02.jpg";
import fInstaImg03 from "../../../assets/img/instagram/f_insta_img03.jpg";
import fInstaImg04 from "../../../assets/img/instagram/f_insta_img04.jpg";
import fInstaImg05 from "../../../assets/img/instagram/f_insta_img05.jpg";
import fInstaImg06 from "../../../assets/img/instagram/f_insta_img06.jpg";
import wLogo from "../../../assets/img/logo/w_logo.png";
function FooterOne() {
  return (
    <footer>
      <div
        className="footer-area footer-bg"
        style={{
          backgroundImage: `url(${FooterBg})`,
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-7">
                <div className="footer-widget">
                  <h2 className="fw-title">About Us</h2>
                  <div className="footer-content">
                    <p>
                      There are many variations of passages of Lore Ipsum
                      available, but the majori have alteration in some form, by
                      injected humour, ondomised word which don't look
                    </p>
                    <div className="footer-newsletter">
                      <h4 className="title">Subscribe to Our Newsletter</h4>
                      <form action="#">
                        <input type="text" placeholder="Enter your email" />
                        <button type="submit" className="btn btn-two">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h2 className="fw-title">Our Services</h2>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <a href="/project">
                          <i className="fas fa-angle-double-right"></i>Single
                          Ply Roofing
                        </a>
                      </li>
                      <li>
                        <a href="/project">
                          <i className="fas fa-angle-double-right"></i>Modified
                          Roofing
                        </a>
                      </li>
                      <li>
                        <a href="/project">
                          <i className="fas fa-angle-double-right"></i>Built-Up
                          Roofing
                        </a>
                      </li>
                      <li>
                        <a href="/project">
                          <i className="fas fa-angle-double-right"></i>Metal
                          Roofing
                        </a>
                      </li>
                      <li>
                        <a href="/project">
                          <i className="fas fa-angle-double-right"></i>
                          Vegetative Roofing
                        </a>
                      </li>
                      <li>
                        <a href="/project">
                          <i className="fas fa-angle-double-right"></i>Specialty
                          Metal
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h2 className="fw-title">Quick Links</h2>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <a href="/contact">
                          <i className="fas fa-angle-double-right"></i>Terms &
                          Conditions
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="fas fa-angle-double-right"></i>Tax & Vat
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="fas fa-angle-double-right"></i>Refund
                          Policy
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="fas fa-angle-double-right"></i>Typically
                          Solutions
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="fas fa-angle-double-right"></i>Our
                          Process
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="fas fa-angle-double-right"></i>Contact
                          Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="footer-widget">
                  <h2 className="fw-title">Instagram Posts</h2>
                  <div className="footer-instagram">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">
                          <img src={fInstaImg01} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={fInstaImg02} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={fInstaImg03} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={fInstaImg04} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={fInstaImg05} alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={fInstaImg06} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-logo-area">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-12">
                  <div className="logo">
                    <a href="/">
                      <img src={wLogo} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer-contact">
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <span>Phone No</span>
                      <a href="tel:0123456789">+000 (123) 456 88</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div className="footer-social">
                    <h2 className="title">Follow Us:</h2>
                    <ul className="list-wrap">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p>© Copyright 2025. All Right Reserved</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-bootom-menu">
                  <ul className="list-wrap">
                    <li>
                      <a href="/contact">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/contact">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterOne;
