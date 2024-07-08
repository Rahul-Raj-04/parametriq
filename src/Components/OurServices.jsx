import React from "react";
import "../App.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/fonts/flaticon.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/magnific-popup.css";

import "../assets/css/nice-select.min.css";
import "../assets/css/meanmenu.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/theme-dark.css";
import { Link } from "react-router-dom";
import asseccontroimg from "../assets/imagenew/Access control 2.jpeg";
import cctvimg from "../assets/imagenew/CCTV2.jpeg";
import ftthimage from "../assets/imagenew/FTTH2.jpeg";
import fireimage from "../assets/imagenew/Fire Alarm2.jpeg";
import smarthomeimg from "../assets/imagenew/Smarthome auto2.jpeg";
import videodoorimg from "../assets/imagenew/videodoor45.jpeg";
import boomimg from "../assets/imagenew/boom barrier2.jpeg";

import energymeterimg from "../assets/imagenew/prepaidmeterimg3.png";

function OurServices() {
  return (
    <>
      <section className="services-area-four pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center flex  center flex-col items-center lg:ml-[250px] ">
            <span className="sp-color2">Our Services</span>
            <h2>
              We provide Integrated Solutions for Residential & Commercial
              Buildings
            </h2>
            <p className="margin-auto">
              FTTX, Video Door Phones, Intercoms, Metering & Building Management
              Systems - All Under One Roof
            </p>
          </div>
          <div className="row justify-content-center align-items-center pt-45">
            <div className="col-lg-3 col-md-6">
              <div className="services-card services-card-color-bg2 ">
                <div>
                  <img src={energymeterimg} alt="energymeterimg" />
                </div>
                <h5 className="">
                  <Link to="#"> PREPAID ENERGY METER</Link>
                </h5>
                <p style={{ lineHeight: "1.5rem" }}>
                  Measure the use of your residential and business resources
                  with advanced energy management
                </p>
                <Link to="#" className="learn-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services-card services-card-color-bg2">
                <div>
                  <img src={ftthimage} alt="ftthimage" />
                </div>
                <h5 style={{}}>
                  <Link to="#">FTTH</Link>
                </h5>
                <p style={{ lineHeight: "1.5rem" }}>
                  You can enjoy the benefit of smart communication systems by
                  enabling the home and office with superior quality technology
                </p>
                <Link to="#" className="learn-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services-card services-card-color-bg2">
                <div>
                  <img src={videodoorimg} alt="videodoorimg" />
                </div>
                <h5>
                  <Link to="#">VIDEO DOOR PHONE</Link>
                </h5>
                <p style={{ lineHeight: "1.5rem" }}>
                  The concept of a video door phone is a two-way communication
                  system that allows you to visually verify visitors.
                </p>
                <Link to="#" className="learn-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services-card services-card-color-bg2">
                <div>
                  <img src={smarthomeimg} alt="smarthomeimg" />
                </div>
                <h5>
                  <Link to="#">HOME AUTOMATION</Link>
                </h5>
                <p style={{ lineHeight: "1.5rem" }}>
                  We provide customized Home Automation Solution for residences,
                  commercial buildings,hotels and the public utility sector
                </p>
                <Link to="#" className="learn-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center pt-45">
            <div className="col-lg-3 col-md-6">
              <div className="services-card services-card-color-bg2">
                <div>
                  <img src={cctvimg} alt="cctvimg" />
                </div>
                <h5>
                  <Link to="#">CCTV </Link>
                </h5>
                <p style={{ lineHeight: "1.5rem" }}>
                  Paramtrique provides Security solution designing, maintaining
                  and 24X7 monitoring HD Images with integrated POS can help
                  identify offenders
                </p>
                <Link to="#" className="learn-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services-card services-card-color-bg2">
                <div>
                  <img src={asseccontroimg} alt="asseccontroimg" />
                </div>
                <h5>
                  <Link to="#">ACCESS CONTROL</Link>
                </h5>
                <p style={{ lineHeight: "1.5rem" }}>
                  Provides a safe working atmosphere Assists in auditing of time
                  and attendance Access to multiple facilities through one
                  interface
                </p>
                <Link to="#" className="learn-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services-card services-card-color-bg2">
                <div>
                  <img src={boomimg} alt="boomimg" />
                </div>
                <h5>
                  <Link to="#">BOOM BARRIER</Link>
                </h5>
                <p style={{ lineHeight: "1.5rem" }}>
                  Parametrique, improving comfort and efficiency of our clients.
                  Smart solution forthe security of residential and business
                  property
                </p>
                <Link to="#" className="learn-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services-card services-card-color-bg2">
                <div>
                  <img src={fireimage} alt="fireimage" />
                </div>
                <h5>
                  <Link to="#">FIRE ALARM SYSTEM</Link>
                </h5>
                <p style={{ lineHeight: "1.5rem" }}>
                  A fire alarm is a unit made of several devices, which uses
                  visual and audio signaling to warn people about a possible
                  fire, smoke
                </p>
                <Link to="#" className="learn-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurServices;
