import React from "react";
import { Link } from "react-router-dom";
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
import { Helmet } from "react-helmet";

function Header() {
  return (
    <div>
      <Helmet>
        <meta
          name="keywords"
          content="Home Automation Solutions, Home Automation Company, Energy Management, Prepaid Meter, Smart CCTV Solutions, Intercom Service Provider, Smart CCTV Solutions In Delhi NCR, Automatic Boom Barrier Solutions, Video Door Phone System, Home Automation Company In Delhi NCR, FTTH, FTTX, GPON, Fire Alarm Company In Delhi NCR, Fire Alarm System, Intercom Service Provider In Delhi NCR"
        />
        <meta
          name="description"
          content=" Effortlessly handle design, deployment, integration, and management tasks with Parametrique. Simplify your workflow and maximize efficiency with our comprehensive solution."
        />
        <meta
          name="title"
          content=" Design, Deploy, Integrate & Manage Effortlessly with Parametrique"
        />
      </Helmet>
      <header className="top-header top-header-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="top-head-left">
                <div className="top-contact">
                  <h3>
                    Support :<Link to="tel:+91-9899552200">+91-9899552200</Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="top-header-right">
                <div className="top-header-social top-header-social-bg">
                  <ul>
                    <li>
                      <Link
                        to="https://www.facebook.com/profile.php?id=100094486747053"
                        target="_blank"
                      >
                        <span className="visually-hidden">Facebook</span>
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="https://www.linkedin.com/company/parametrique/"
                        target="_blank"
                      >
                        <span className="visually-hidden">LinkedIn</span>
                        <i className="bx bxl-linkedin-square"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/parametriqueelectronic/"
                        target="_blank"
                      >
                        <span className="visually-hidden">Instagram</span>
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
