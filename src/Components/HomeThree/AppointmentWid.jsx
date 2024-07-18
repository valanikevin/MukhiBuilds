import React, { useEffect } from "react";
import AppointmentBG from "../../assets/img/bg/appointment_bg.jpg";

function AppointmentWid() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-241915179823059']",
        "https://form.jotform.com/"
      );
    };
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="appointment-area-two pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="appointment-inner-two tg-heading-subheading animation-style3"
              style={{
                backgroundImage: `url(${AppointmentBG})`,
              }}
            >
              <div>
                <iframe
                  id="JotFormIFrame-241915179823059"
                  title="Mukhi Builds Contact Form"
                  onLoad={() => window.parent.scrollTo(0, 0)}
                  allowTransparency="true"
                  allow="geolocation; fullscreen"
                  src="https://form.jotform.com/241915179823059"
                  frameBorder="0"
                  style={{
                    width: "100%",
                    height: "300px !important",
                    border: "none",
                  }}
                  scrolling="no"
                  className="h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentWid;
