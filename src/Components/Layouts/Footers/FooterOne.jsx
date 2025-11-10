import React from "react";
import FooterBg from "../../../assets/img/bg/footer_bg.jpg";
import fInstaImg01 from "../../../assets/img/instagram/f_insta_img01.jpg";
import fInstaImg02 from "../../../assets/img/instagram/f_insta_img02.jpg";
import fInstaImg03 from "../../../assets/img/instagram/f_insta_img03.jpg";
import fInstaImg04 from "../../../assets/img/instagram/f_insta_img04.jpg";
import fInstaImg05 from "../../../assets/img/instagram/f_insta_img05.jpg";
import fInstaImg06 from "../../../assets/img/instagram/f_insta_img06.jpg";
import wLogo from "../../../assets/img/logo/Logo.jpeg";
import { FaClipboard, FaClipboardCheck, FaPage4 } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
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
            <div className="footer-logo-area bg-white">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-12">
                  <div className="logo">
                    <a href="/">
                      <img src={wLogo} alt="" style={{ maxHeight: "120px" }} />
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
                      <a href="tel:18258889924">(825)888-9924</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div className="footer-contact">
                    <div className="icon">
                      <FaClipboardCheck />
                    </div>
                    <div className="content">
                      <span> Quote</span>
                      <a href="https://form.jotform.com/241915179823059">
                        Get Your Free Quote <FiArrowRight />
                      </a>
                    </div>
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
