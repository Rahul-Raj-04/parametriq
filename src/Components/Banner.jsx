import React from "react";
import dental from "../assets/imagenew/home-banner.mp4";
import img from "../assets/imagenew/shape4.png";
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

class Banner extends React.Component {
  render() {
    return (
      <div className="banner-six banner-eight">
        <video loop muted autoPlay poster="#" className="background-video">
          <source src={dental} type="video/mp4" title="video bg" />
        </video>
        <div className="container">
          <div className="banner-six-content">
            <h1>PARAMETRIQUE INNOVATIVE & INTEGRATED SOLUTIONS</h1>
            <p>Designing , Deployment, Integration & Management</p>
            <div className="banner-btn">
              <Link
                to="/about-us"
                className="default-btn btn-bg-two border-radius-5"
              >
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="banner-six-shape">
          <img src={img} alt="Banner" style={{ height: "100%" }} />
        </div>
      </div>
    );
  }
}

export default Banner;
