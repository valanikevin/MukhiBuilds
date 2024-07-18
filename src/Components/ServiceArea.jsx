import React from "react";
import {
  BiHomeCircle,
  BiBrush,
  BiBuildingHouse,
  BiGridAlt,
  BiBoltCircle,
  BiBath,
  BiClipboard,
} from "react-icons/bi";

function ServiceArea({ className }) {
  return (
    <section className={className || "py-5 bg-light"}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
              <span className="sub-title tg-element-title">What We Do</span>
              <h2 className="title tg-element-title">Our Services Areas</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".2s"
              style={{
                background: `url("../../assets/img/services/services_item01.jpg")`,
              }}
            >
              <div className="services-icon">
                <BiHomeCircle />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/services-details">Basement Finishing</a>
                </h2>
                <h2 className="number">01</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/services-details">Basement Finishing</a>
                </h2>
                <p>
                  Transform your basement into a functional and beautiful living
                  space with our finishing and remodeling services.
                </p>
                <a
                  href="https://form.jotform.com/241915179823059"
                  className="read-more"
                >
                  Get Your Quote <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".4s"
              style={{
                background: `url("../../assets/img/services/services_item02.jpg")`,
              }}
            >
              <div className="services-icon">
                <BiBrush />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/services-details">Custom Design</a>
                </h2>
                <h2 className="number">02</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/services-details">Custom Design</a>
                </h2>
                <p>
                  Tailored design and planning to meet your unique style and
                  needs, ensuring a personalized living space.
                </p>
                <a
                  href="https://form.jotform.com/241915179823059"
                  className="read-more"
                >
                  Get Your Quote <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".6s"
              style={{
                background: `url("../../assets/img/services/services_item03.jpg")`,
              }}
            >
              <div className="services-icon">
                <BiBuildingHouse />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/services-details">Insulation & Drywall</a>
                </h2>
                <h2 className="number">03</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/services-details">Insulation & Drywall</a>
                </h2>
                <p>
                  Ensure comfort and energy efficiency with our professional
                  insulation and drywall installation services.
                </p>
                <a
                  href="https://form.jotform.com/241915179823059"
                  className="read-more"
                >
                  Get Your Quote <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                background: `url("../../assets/img/services/services_item04.jpg")`,
              }}
            >
              <div className="services-icon">
                <BiGridAlt />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/services-details">Flooring & Tile</a>
                </h2>
                <h2 className="number">04</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/services-details">Flooring & Tile</a>
                </h2>
                <p>
                  Enhance your space with our expert flooring and tile
                  installation, offering a wide range of options.
                </p>
                <a
                  href="https://form.jotform.com/241915179823059"
                  className="read-more"
                >
                  Get Your Quote <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".6s"
              style={{
                background: `url("../../assets/img/services/services_item05.jpg")`,
              }}
            >
              <div className="services-icon">
                <BiBoltCircle />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/services-details">Electrical Upgrades</a>
                </h2>
                <h2 className="number">05</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/services-details">Electrical Upgrades</a>
                </h2>
                <p>
                  Modernize your home with our electrical and lighting upgrades,
                  ensuring safety and efficiency.
                </p>
                <a
                  href="https://form.jotform.com/241915179823059"
                  className="read-more"
                >
                  Get Your Quote <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".9s"
              style={{
                background: `url("../../assets/img/services/services_item06.jpg")`,
              }}
            >
              <div className="services-icon">
                <BiBath />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/services-details">Bathroom & Kitchen</a>
                </h2>
                <h2 className="number">06</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/services-details">Bathroom & Kitchen</a>
                </h2>
                <p>
                  Upgrade your home with stylish and functional bathroom and
                  kitchen installations tailored to your needs.
                </p>
                <a
                  href="https://form.jotform.com/241915179823059"
                  className="read-more"
                >
                  Get Your Quote <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay="1.2s"
              style={{
                background: `url("../../assets/img/services/services_item07.jpg")`,
              }}
            >
              <div className="services-icon">
                <BiClipboard />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/services-details">Permits & Inspections</a>
                </h2>
                <h2 className="number">07</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/services-details">Permits & Inspections</a>
                </h2>
                <p>
                  Ensure your project meets all regulations with our
                  comprehensive permit and inspection services.
                </p>
                <a
                  href="https://form.jotform.com/241915179823059"
                  className="read-more"
                >
                  Get Your Quote <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
