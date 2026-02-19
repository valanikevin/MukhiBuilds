import React from "react";
import BannerShape1 from "../../assets/img/banner/h3_banner_shape01.png";
import BannerShape2 from "../../assets/img/banner/h3_banner_shape02.png";
import BannerShape3 from "../../assets/img/banner/h3_banner_shape03.png";
import BannerShape4 from "../../assets/img/banner/h3_banner_shape04.png";
import BannerShape5 from "../../assets/img/banner/h3_banner_shape05.png";
import BannerShape6 from "../../assets/img/banner/h3_banner_shape06.png";
import BannerShape7 from "../../assets/img/banner/h3_banner_shape07.png";

// Real project photos for the collage
import Img1 from "../../assets/img/mukhi/1.jpg";
import Img2 from "../../assets/img/mukhi/2.jpg";
import Img3 from "../../assets/img/mukhi/3.jpg";
import Img4 from "../../assets/img/mukhi/4.jpg";
import Img7 from "../../assets/img/mukhi/7.jpg";
import Img8 from "../../assets/img/mukhi/8.jpg";
import Img10 from "../../assets/img/mukhi/10.JPG";
import Img11 from "../../assets/img/mukhi/11.JPG";
import Img12 from "../../assets/img/mukhi/12.JPG";
import Img13 from "../../assets/img/mukhi/13.JPG";

const collageImages = [
  { src: Img10, alt: "Construction project 1" },
  { src: Img1, alt: "Construction project 2" },
  { src: Img2, alt: "Landscaping project 1" },
  { src: Img3, alt: "Renovation project 1" },
  { src: Img7, alt: "Renovation project 2" },
  { src: Img11, alt: "Construction project 3" },
  { src: Img12, alt: "Landscaping project 2" },
  { src: Img13, alt: "Construction project 4" },
  { src: Img4, alt: "Renovation project 3" },
  { src: Img8, alt: "Construction project 5" },
];

function Hero() {
  return (
    <section className="banner-area-two parallax">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10 order-0 order-lg-2">
            <div className="hero-collage-grid">
              {collageImages.slice(0, 6).map((img, i) => (
                <div
                  key={i}
                  className={`hero-collage-item hero-collage-item--${i + 1}`}
                >
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>

            {/* badge moved below collage (was overlay) */}
            <div className="hero-collage-below">
              <span className="hero-collage-badge">
                <strong>Over 340+</strong> Projects Completed
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-content-two">
              <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                Construction & Landscaping in Edmonton
              </span>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                Transform Your Property into a Dream Space
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                From vision to reality — we build spaces you'll love. Basements,
                landscaping, renovations & more.
              </p>
              <div className="hero-cta-group wow fadeInUp" data-wow-delay=".8s">
                <a
                  href="https://form.jotform.com/241915179823059"
                  className="btn"
                >
                  Get Free Quote
                </a>
                <a
                  href="tel:18258889924"
                  className="btn btn-outline-secondary hero-call-btn"
                >
                  <i className="fas fa-phone-alt"></i> (825) 888-9924
                </a>
              </div>
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
