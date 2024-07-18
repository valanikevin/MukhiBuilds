import React from "react";
import BannerImg1 from "../../assets/img/banner/h3_banner_img.jpg";
import BannerShape1 from "../../assets/img/banner/h3_banner_shape01.png";
import BannerShape2 from "../../assets/img/banner/h3_banner_shape02.png";
import BannerShape3 from "../../assets/img/banner/h3_banner_shape03.png";
import BannerShape4 from "../../assets/img/banner/h3_banner_shape04.png";
import BannerShape5 from "../../assets/img/banner/h3_banner_shape05.png";
import BannerShape6 from "../../assets/img/banner/h3_banner_shape06.png";
import BannerShape7 from "../../assets/img/banner/h3_banner_shape07.png";
import HeroBasement from "../../assets/img/images/SocialBasementRenosRenova.jpg";
function Hero() {
  return (
    <section className="banner-area-two parallax">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10 order-0 order-lg-2">
            <div className="banner-img-wrap">
              <img src={HeroBasement} alt="" />
              <div className="overly-text">
                <h2 className="title">Basement</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-content-two">
              <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                Serving Edmonton with Love
              </span>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                Transform Your Basement into a Dream Space
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                From Vision to Reality, We Build Spaces You'll Love"
              </p>
              <a
                href="https://form.jotform.com/241915179823059"
                className="btn wow fadeInUp"
                data-wow-delay=".8s"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-wrap">
        <ul className="list-wrap">
          <li>
            <img src={BannerShape1} alt="" className="layer" data-depth="0.3" />
          </li>
          <li>
            <img src={BannerShape2} alt="" className="layer" data-depth="0.3" />
          </li>
          <li>
            <img src={BannerShape3} alt="" className="layer" data-depth="0.1" />
          </li>
          <li>
            <img src={BannerShape4} alt="" className="layer" data-depth="0.2" />
          </li>
          <li>
            <img
              src={BannerShape5}
              alt=""
              className="wow fadeInLeft"
              data-wow-delay=".4s"
            />
          </li>
          <li>
            <img src={BannerShape6} alt="" />
          </li>
          <li>
            <img src={BannerShape7} alt="" className="rotateme" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
