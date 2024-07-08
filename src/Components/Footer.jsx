import React, { useEffect, useState } from "react";
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
import logo from "../assets/imagenew/para-logo.png";
import { Helmet } from "react-helmet";
function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(isScrolled);
  };

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
      <footer className="footer-area footer-bg2">
        <div className="container">
          <div className="footer-top pt-100 pb-70">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <div>
                      <img
                        style={{ width: "250px" }}
                        src={logo}
                        alt="Logofooter"
                      />
                    </div>
                  </div>
                  <p>
                    We are the pioneers in the manufacturing of integrated
                    solutions which has contributed in creating new meanings for
                    home and commercial automation.
                  </p>
                  <div className="social-link">
                    <ul>
                      <li>
                        <Link to="https://www.facebook.com/profile.php?id=100094486747053">
                          <i className="bx bxl-facebook"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="https://www.linkedin.com/company/parametrique/">
                          <i className="bx bxl-linkedin-square"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/parametriqueelectronic/">
                          <i className="bx bxl-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget pl-2">
                  <h3>Services</h3>
                  <ul className="footer-list">
                    <li>
                      <Link to="/ftth" onClick={scrollToTop}>
                        <i className="bx bx-chevron-right"></i>
                        FTTH
                      </Link>
                    </li>
                    <li>
                      <Link to="/intercom" onClick={scrollToTop}>
                        <i className="bx bx-chevron-right"></i>
                        Intercom
                      </Link>
                    </li>
                    <li>
                      <Link to="/smartprepaidmeter" onClick={scrollToTop}>
                        <i className="bx bx-chevron-right"></i>
                        Smart Prepaid Meter
                      </Link>
                    </li>
                    <li>
                      <Link to="/security/cctv" onClick={scrollToTop}>
                        <i className="bx bx-chevron-right"></i>
                        Surveillance
                      </Link>
                    </li>
                    <li>
                      <Link to="/smarthomeautomation" onClick={scrollToTop}>
                        <i className="bx bx-chevron-right"></i>
                        Home Automation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget pl-2">
                  <h3>More</h3>
                  <ul className="footer-list">
                    <li>
                      <Link to="/security/boombarrier">
                        <i className="bx bx-chevron-right"></i>
                        Boom Barrier
                      </Link>
                    </li>
                    <li>
                      <Link to="/security/cctv">
                        <i className="bx bx-chevron-right"></i>
                        CCTV
                      </Link>
                    </li>
                    <li>
                      <Link to="/security/firealarm">
                        <i className="bx bx-chevron-right"></i>
                        Fire Alarm System
                      </Link>
                    </li>
                    <li>
                      <Link to="/security/parking">
                        <i className="bx bx-chevron-right"></i>
                        Parking Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/videodoorphone" onClick={scrollToTop}>
                        <i className="bx bx-chevron-right"></i>
                        Video Door Phone
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6">
                <div className="footer-widget">
                  <h3>Quick Contact</h3>
                  <ul className="footer-contact-list">
                    <li>
                      <i className="bx bxs-map"></i>
                      <div className="content">
                        <Link to="/contact-us" onClick={scrollToTop}>
                          ATS Tower, 2nd Floor,Plot-16, Sector-135 Noida,
                          UP-201301.
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="bx bx-phone-call"></i>
                      <div className="content">
                        <Link to="#">+91-9899552200</Link>
                        <br />
                      </div>
                    </li>
                    <li>
                      <i className="bx bx-message"></i>
                      <div className="content">
                        <Link to="mailto:helpdesk@parametrique.com">
                          <span
                            className="__cf_email__"
                            data-cfemail="620a070e0e0d221607010a071a4c010d0f"
                          >
                            helpdesk@parametrique.com
                          </span>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right-area">
            <div className="copy-right-text">
              <p>
                Copyright © parametrique. All Rights Reserved by
                <Link to="#">Parametrique</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
