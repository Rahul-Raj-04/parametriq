import React, { useRef } from "react";

import { useState, useEffect } from "react";
import "../App.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/fonts/flaticon.css";
import "../assets/css/boxicons.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/nice-select.min.css";

import "../assets/css/style.css";
import "../assets/css/responsive.css";

import logo from "../assets/imagenew/para-logo.png";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { Helmet } from "react-helmet";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const subMenuRef = useRef(null);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (subMenuRef.current && !subMenuRef.current.contains(event.target)) {
        setShowSubMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
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
      <div
        className="navbar-are"
        style={
          isScrolled
            ? {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                zIndex: "1000",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
              }
            : {}
        }
      >
        <div
          className="logo-mobile d-block  d-flex d-sm-block d-md-block d-lg-none  d-sm-flex d-md-flex justify-between  p-4 "
          style={{ backgroundColor: "white" }}
        >
          <NavLink to="/" className="logo" style={{ maxWidth: "150px" }}>
            <img src={logo} className="logo" alt="Logo444" />
          </NavLink>

          <div onClick={toggleDrawer}>
            <IoMenu className=" text-4xl" />
          </div>
        </div>
        {isDrawerOpen && (
          <div className=" ml-5 ">
            <div className="w-full flex bg-white ">
              <ul className="  p-4  ">
                <li>
                  <NavLink
                    to="/"
                    onClick={scrollToTop}
                    className=" text-lg font-semibold text-black"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-us"
                    onClick={scrollToTop}
                    className=" text-lg font-semibold text-black"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cctv"
                    onClick={scrollToTop}
                    className=" text-lg font-semibold text-black"
                  >
                    Security
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact-us"
                    onClick={scrollToTop}
                    className=" text-lg font-semibold text-black"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link
                    to="#"
                    className="text-lg font-semibold text-black"
                    onClick={toggleSubMenu}
                  >
                    Solutions
                    <i className="bx bx-caret-down"></i>
                  </Link>
                  {showSubMenu && (
                    <ul
                      ref={subMenuRef}
                      style={{
                        marginLeft: "20px",
                        color: "black ",
                      }}
                    >
                      <li className="nav-item">
                        <NavLink
                          to="/ftth"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          FTTH
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/intercom"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Intercom
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/smarthomeautomation"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Smart Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/videodoorphone"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Video Door Phone
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/smartprepaidmeter"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Smart Prepaid Meter
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <NavLink className="navbar-brand" to="/">
                <img
                  style={{ width: "220px" }}
                  src={logo}
                  className="logo-one "
                  alt="Logo"
                />
              </NavLink>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto me-4" style={{ font: "10px" }}>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link active"
                      onClick={scrollToTop}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/about-us "
                      className="nav-link"
                      onClick={scrollToTop}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      Solutions
                      <i className="bx bx-caret-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          to="/ftth"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          FTTH (Fiber To The Home)
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/intercom"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Intercom
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/smartprepaidmeter"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Smart Prepaid Meter
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/smarthomeautomation"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Smart Home Automation
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/videodoorphone"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          Video Door Phone
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      Security
                      <i className="bx bx-caret-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          to="/cctv"
                          className="nav-link"
                          onClick={scrollToTop}
                        >
                          CCTV
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/security/boombarrier"
                          className="nav-link"
                        >
                          Boom Barrier
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          to="/security/accesscontrol"
                          className="nav-link"
                        >
                          Access Control
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink to="/security/parking" className="nav-link">
                          Parking Management
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/security/firealarm" className="nav-link">
                          Fire Alarm System
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/contact-us"
                      className="nav-link"
                      onClick={scrollToTop}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="nav-side d-display">
                  <div className="nav-side-item">
                    <div className="search-box">
                      <i className="bx bx-search"></i>
                    </div>
                  </div>
                  <div className="nav-side-item">
                    <div className="get-btn">
                      <NavLink
                        to="/contact-us"
                        className="default-btn btn-bg-two border-radius-5"
                        onClick={scrollToTop}
                      >
                        Get A Quote <i className="bx bx-chevron-right"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
