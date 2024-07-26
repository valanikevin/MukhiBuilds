import React, { useState } from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import FooterOne from "../Layouts/Footers/FooterOne";
import NewsLetterArea from "./NewsLetterArea";
import Hero from "./Hero";
import AppointmentWid from "./AppointmentWid";
import AboutArea from "./AboutArea";
import WorkArea from "./WorkArea";
import HistoryArea from "./HistoryArea";
import Services from "./Services";
import EngrWorks from "./EngrWorks";
import WhereEngrWork from "./WhereEngrWork";
import ProjectArea from "./ProjectArea";
import FaqArea from "./FaqArea";
import Blogs from "./Blogs";
import PopupVideo from "./PopupVideo";
import UnitedStates from "../../assets/img/icon/united-states.jpg";
import Russia from "../../assets/img/icon/russia.jpg";
import India from "../../assets/img/icon/india.jpg";
import Bangladesh from "../../assets/img/icon/bangladesh.jpg";
import ServiceArea from "../ServiceArea";
import MultipleArea from "../MultipleArea";

function HomeThree() {
  const [videoPop, setVideoPop] = useState(false);
  const videoHandler = (e) => {
    e.preventDefault();
    setVideoPop(!videoPop);
  };
  return (
    <>
      {videoPop && (
        <PopupVideo
          handler={videoHandler}
          videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
        />
      )}
      <div className="header-top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9">
              <div className="header-top-left">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:17788989924">(778)898-9924</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:kuldippadshala@gmail.com">
                      hello@mukhibuilds.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3">
              <div className="header-top-right">
                <div className="header-social">
                  <ul className="list-wrap">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderThree />
      <main>
        <Hero />

        <ServiceArea />
        <MultipleArea />
        {/*<WorkArea />
        <HistoryArea videoHandler={videoHandler} />
        <Services />
        <EngrWorks videoHandler={videoHandler} />
        <WhereEngrWork />
        <ProjectArea />
        <FaqArea />
        <Blogs />
        <NewsLetterArea /> */}
      </main>
      <FooterOne />
    </>
  );
}

export default HomeThree;
