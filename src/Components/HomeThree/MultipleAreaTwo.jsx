import React from "react";
import SliderCom from "./SliderCom";
import areaBg02 from "../../assets/img/bg/area_bg02.jpg";
import testiAvatar01 from "../../assets/img/h2_testi_avatar03.png";
import testiAvatar02 from "../../assets/img/h2_testi_avatar03.png";
import testiAvatar03 from "../../assets/img/h2_testi_avatar03.png";

function MultipleAreaTwo() {
  const sliderOneSettings = {
    centerMode: true,
    autoplay: false,
    infinite: true,
    dots: true,
    speed: 1500,
    arrows: false,
    centerPadding: "0",
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "0",
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "0",
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          arrows: false,
        },
      },
    ],
  };

  const sliderTwoSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      className="area-bg-two pt-5"
      style={{
        backgroundImage: `url(${areaBg02})`,
      }}
    >
      <section className="testimonial-area-two ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Our Testimonial</span>
                <h2 className="title">What Our Clients Say</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="testimonial-inner">
                <div className="testimonial-active-two">
                  <SliderCom settings={sliderTwoSettings}>
                    <div className="testimonial-item-two">
                      <div className="testimonial-content-two">
                        <div className="content-top">
                          <div className="icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          MukhiBuilds did an amazing job on our property. They
                          turned our basement into a cozy, functional space and
                          transformed our backyard with beautiful landscaping.
                          The team was professional and completed the work on
                          time. Highly recommend!
                        </p>
                        <div className="content-bottom">
                          <h4 className="title">Alex Johnson</h4>
                          <span>Homeowner</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item-two">
                      <div className="testimonial-content-two">
                        <div className="content-top">
                          <div className="icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          I can't thank Mukhi Builds enough for the fantastic
                          job they did on our home renovation. They were
                          professional, efficient, and the quality of work was
                          outstanding. They transformed our property inside and
                          out — from the basement to the landscaping. We love
                          it!
                        </p>
                        <div className="content-bottom">
                          <h4 className="title">Darrell Steward</h4>
                          <span>Homeowner</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item-two">
                      <div className="testimonial-content-two">
                        <div className="content-top">
                          <div className="icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Mukhi Builds exceeded our expectations in every way.
                          From the initial consultation to the final touches,
                          their team was friendly and knowledgeable. They took
                          our ideas and made them a reality. Highly recommend
                          them for any construction or landscaping project!
                        </p>
                        <div className="content-bottom">
                          <h4 className="title">Robert C. Simmons</h4>
                          <span>Homeowner</span>
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-item-two">
                      <div className="testimonial-content-two">
                        <div className="content-top">
                          <div className="icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Working with Mukhi Builds was a pleasure from start to
                          finish. Their attention to detail and commitment to
                          quality is unmatched. Our property looks completely
                          renewed, and we couldn't be happier with the results.
                        </p>
                        <div className="content-bottom">
                          <h4 className="title">Karikoka Ahli</h4>
                          <span>Homeowner</span>
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-item-two">
                      <div className="testimonial-content-two">
                        <div className="content-top">
                          <div className="icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Mukhi Builds did an amazing job on our home. They were
                          punctual, professional, and very easy to work with.
                          The end result is a beautiful, functional space that
                          we enjoy every day. I would definitely recommend them
                          to anyone looking for quality construction and
                          landscaping work.
                        </p>
                        <div className="content-bottom">
                          <h4 className="title">Ayesha Khan</h4>
                          <span>Homeowner</span>
                        </div>
                      </div>
                    </div>
                  </SliderCom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MultipleAreaTwo;
