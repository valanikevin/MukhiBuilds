import React from "react";
import SliderCom from "./SliderCom";

// Import images
import Img1 from "../../assets/img/mukhi/1.jpg";
import Img2 from "../../assets/img/mukhi/2.jpg";
import Img3 from "../../assets/img/mukhi/3.jpg";
import Img4 from "../../assets/img/mukhi/4.jpg";
import Img5 from "../../assets/img/mukhi/5.heic";
import Img6 from "../../assets/img/mukhi/6.heic";
import Img7 from "../../assets/img/mukhi/7.jpg";
import Img8 from "../../assets/img/mukhi/8.jpg";
import Img9 from "../../assets/img/mukhi/9.HEIC";
import Img10 from "../../assets/img/mukhi/10.JPG";
import Img11 from "../../assets/img/mukhi/11.JPG";
import Img12 from "../../assets/img/mukhi/12.JPG";
import Img13 from "../../assets/img/mukhi/13.JPG";

const images = [
  Img10,
  Img1,
  Img2,
  Img3,
  Img4,
  //   Img5,
  //   Img6,
  Img7,
  Img8,
  //   Img9,

  Img11,
  Img12,
  Img13,
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    className: "mukhi-slider-main",
  };

  return (
    <section className="image-gallery-area pt-100 pb-100">
      <div className="container">
        {/* === Section Title Area === */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
              <span
                className="sub-title tg-element-title wow fadeInUp"
                data-wow-delay=".2s"
              >
                Our Completed Projects
              </span>
              <h2
                className="title tg-element-title wow fadeInUp"
                data-wow-delay=".4s"
              >
                A Visual Showcase of Our Work
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <SliderCom settings={settings} className="mukhi-slider-wrapper">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="gallery-slide-item" // 1. Apply the wrapper class here
                >
                  <img
                    src={image}
                    alt={`Project Image ${index + 1}`}
                    className="slide-image-fit" // 2. Apply the image fitting class here
                  />
                </div>
              ))}
            </SliderCom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
