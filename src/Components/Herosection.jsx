import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Herosection() {
  return (
    <div>
      <section className="work-process-area-two pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="work-process-card-two ">
                    <h4>SECURITY</h4>
                    <p>
                      With our integrated and managed security systems, you can
                      be assured of getting the maximum security... <br />
                      <br />
                    </p>
                    <Link to="/about-us" className="learn-btnHome">
                      Learn More about security
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="work-process-card-two">
                    <h4>COMFORT</h4>
                    <p>
                      Experience unmatched comfort with a better quality of
                      lighting and temperature control for the desired
                      ambience..
                      <br /> <br />
                    </p>
                    <Link to="/about-us" className="learn-btnHome">
                      Learn More about comfort
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="work-process-card-two">
                    <h4>FUTURE PROOF</h4>
                    <p>
                      We offer multiple options and platforms for innovation and
                      expansion with state-of-the-art integrated solutions...
                      <br /> <br />
                    </p>
                    <Link to="/about-us" className="learn-btnHome">
                      Learn More
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="work-process-card-two">
                    <h4>ENERGY EFFICIENCY </h4>
                    <p>
                      Smart energy management is an integral part of our
                      solutions. We keep in mind the ease of affordability ....
                      <br /> <br />
                    </p>
                    <Link to="/about-us" className="learn-btnHome">
                      Learn More Energy
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ paddingLeft: "20px" }}>
              <div className="work-process-rightside ">
                <div className="section-title">
                  <span className="" style={{ color: "black" }}>
                    About Us
                  </span>
                  <h2>Our Solutions Will Help You to Grow Your Business</h2>
                  <p>
                    We are the leaders in the design, deployment, integration
                    and management of advanced communication networks in India,
                    with a comprehensive, integrated platform solution for high
                    performance fiber networks. We work hand-in-hand with India
                    most innovative and successful builders, building
                    future-ready homes with seamless digital services, including
                    IP and IoT services, security management, energy management
                    and home automation solutions customized to their
                    requirements.
                  </p>
                </div>
                <Link
                  to="/contact-us"
                  className="default-btn btn-bg-two border-radius-5 text-center"
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
