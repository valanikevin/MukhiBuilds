import React from "react";
import NewsletterBg from "../../assets/img/bg/newsletter_bg.jpg";

function NewsLetterArea() {
  return (
    <section
      className="newsletter-area jarallax newsletter-bg"
      style={{
        backgroundImage: `url(${NewsletterBg})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <div className="newsletter-content">
              <div className="section-title white-title-two tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  Quality Roofing Contact From
                </span>
                <h2 className="title tg-element-title">
                  Need Roofing Any Services?
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="newsletter-form">
              <form action="#">
                <div className="form-grp">
                  <input type="text" placeholder="Name*" />
                </div>
                <div className="form-grp">
                  <input type="text" placeholder="Phone*" />
                </div>
                <button type="submit" className="btn btn-two">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetterArea;
