import React from "react";
import HistoryImg1 from "../../assets/img/images/history_img01.jpg";
import HistoryImg2 from "../../assets/img/images/history_img02.jpg";
import HistoryImg3 from "../../assets/img/images/history_img03.jpg";

function HistoryArea({ videoHandler }) {
  return (
    <section className="history-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="history-img-wrap">
              <ul className="list-wrap">
                <li>
                  <img src={HistoryImg1} alt="" />
                </li>
                <li>
                  <img src={HistoryImg2} alt="" />
                  <a
                    onClick={(e) => videoHandler(e)}
                    href="https://www.youtube.com/watch?v=PFkXoK5x5KE"
                    className="play-btn popup-video pulse"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
                <li>
                  <img src={HistoryImg3} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="history-content">
              <div className="section-title mb-20">
                <span className="sub-title">Our Roofing History</span>
                <h2 className="title">
                  Roofing when an unknown printer took to make type book
                </h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majori our as have suffered alteration in some form, by
                injected humour, or randomised word which don't look even
                slightly believable.
              </p>
              <div className="history-list">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Technology management
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Roofing Solutions
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Modern Worker Working
                    here
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Quick Response
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryArea;
