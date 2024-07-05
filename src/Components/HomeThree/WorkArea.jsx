import React from "react";
import WorkImg1 from "../../assets/img/images/work_img01.png";
import WorkImg2 from "../../assets/img/images/work_img02.png";
import WorkImg3 from "../../assets/img/images/work_img03.png";
import WorkImg4 from "../../assets/img/images/work_img04.png";

function WorkArea() {
  return (
    <section className="work-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Working Plan</span>
              <h2 className="title">Roof Plan Working Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="work-item">
              <div className="work-thumb">
                <img src={WorkImg1} alt="" />
                <h4 className="number">01</h4>
              </div>
              <div className="work-content">
                <h2 className="title">Plan for Roofing</h2>
                <p>
                  Suffered alteration in some a form, by injected humour, or
                  randomised word
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="work-item">
              <div className="work-thumb">
                <img src={WorkImg2} alt="" />
                <h4 className="number">02</h4>
              </div>
              <div className="work-content">
                <h2 className="title">Schedule Estimate</h2>
                <p>
                  Suffered alteration in some a form, by injected humour, or
                  randomised word
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="work-item">
              <div className="work-thumb">
                <img src={WorkImg3} alt="" />
                <h4 className="number">03</h4>
              </div>
              <div className="work-content">
                <h2 className="title">Install New Roof</h2>
                <p>
                  Suffered alteration in some a form, by injected humour, or
                  randomised word
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="work-item">
              <div className="work-thumb">
                <img src={WorkImg4} alt="" />
                <h4 className="number">04</h4>
              </div>
              <div className="work-content">
                <h2 className="title">Enjoy Roofing</h2>
                <p>
                  Suffered alteration in some a form, by injected humour, or
                  randomised word
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkArea;
