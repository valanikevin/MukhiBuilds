import React from "react";
import AboutImg1 from "../../assets/img/images/about_img01.jpg";
import AboutImg2 from "../../assets/img/images/about_img02.jpg";
import AboutIcon1 from "../../assets/img/icon/about_icon01.svg";
import AboutIcon2 from "../../assets/img/icon/about_icon02.svg";

function AboutArea({ className }) {
  return (
    <section className={`about-area pb-120 ${className || ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
            <div className="about-img-wrap">
              <img
                src={AboutImg1}
                alt=""
                className="wow fadeInRight"
                data-wow-delay=".4s"
              />
              <img
                src={AboutIcon2}
                alt=""
                className="wow fadeInRight"
                data-wow-delay=".2s"
              />
              <div className="about-experiences-wrap">
                <div className="experiences-item">
                  <div className="icon">
                    <img src={AboutIcon1.default} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">
                      We have more than 10 years of experiences
                    </h6>
                  </div>
                </div>
                <div className="experiences-item">
                  <div className="icon">
                    <img src={AboutIcon2.default} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">
                      We use professional and experienced person
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  About Our Company
                </span>
                <h2 className="title tg-element-title">
                  We’re Committed to Roofing Excellence
                </h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majori have suffered alteration in some form, by
                injected humour, or randomised word which don't look even
                slightly believable.
              </p>
              <div className="about-list">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check"></i>32k Partners have worked us.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Professional and experienced
                    human resources.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Provide the best roof
                    services
                  </li>
                </ul>
              </div>
              <a href="/about" className="btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutArea;
