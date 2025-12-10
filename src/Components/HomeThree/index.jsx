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
import MultipleAreaTwo from "./MultipleAreaTwo";
import { FaLocationPin } from "react-icons/fa6";
import ImageSlider from "./ImageSlider";

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
                    <a href="tel:18258889924">(825)888-9924</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:kuldippadshala@gmail.com">
                      hello@mukhiconstruction.ca
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3">
              <div className="header-top-right">
                <div className="header-social text-white">Edmonton, AB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderThree />
      <main>
        <Hero />
        <ImageSlider />

        <ServiceArea />
        <MultipleAreaTwo />
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
