import React from "react";
import AreaBg3 from "../../assets/img/bg/area_bg03.jpg";
import ProjectImg1 from "../../assets/img/project/h3_project_img01.jpg";
import ProjectImg2 from "../../assets/img/project/h3_project_img02.jpg";
import ProjectImg3 from "../../assets/img/project/h3_project_img03.jpg";
import ProjectImg4 from "../../assets/img/project/h3_project_img04.jpg";
import ProjectImg5 from "../../assets/img/project/h3_project_img05.jpg";
import ProjectImg6 from "../../assets/img/project/h3_project_img06.jpg";

function ProjectArea() {
  return (
    <section className="project-area-three">
      <div
        className="project-bg-two"
        style={{
          backgroundImage: `url(${AreaBg3})`,
        }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center white-title mb-60 tg-heading-subheading animation-style3">
              <span className="sub-title tg-element-title">Our Projects</span>
              <h2 className="title tg-element-title">Our Latest Projects</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img src={ProjectImg1} alt="" />
                </a>
              </div>
              <div className="project-content-two">
                <span>Product Design</span>
                <h2 className="title">
                  <a href="/project-details">Web Application</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img src={ProjectImg2} alt="" />
                </a>
              </div>
              <div className="project-content-two">
                <span>Product Design</span>
                <h2 className="title">
                  <a href="/project-details">Web Application</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img src={ProjectImg3} alt="" />
                </a>
              </div>
              <div className="project-content-two">
                <span>Product Design</span>
                <h2 className="title">
                  <a href="/project-details">Web Application</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img src={ProjectImg4} alt="" />
                </a>
              </div>
              <div className="project-content-two">
                <span>Product Design</span>
                <h2 className="title">
                  <a href="/project-details">Web Application</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img src={ProjectImg5} alt="" />
                </a>
              </div>
              <div className="project-content-two">
                <span>Product Design</span>
                <h2 className="title">
                  <a href="/project-details">Web Application</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img src={ProjectImg6} alt="" />
                </a>
              </div>
              <div className="project-content-two">
                <span>Product Design</span>
                <h2 className="title">
                  <a href="/project-details">Web Application</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="learn-more-btn text-center mt-25">
          <a href="/project" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectArea;
