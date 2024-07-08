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
import { FaEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { Link } from "react-router-dom";
import aboutussomthingimg from "../assets/imagenew/Somthing.jpg";
import Securityimg from "../assets/imagenew/security for about page.jpg";
import compfortimg from "../assets/imagenew/cofert about us page.jpg";
import futureoroofimg from "../assets/imagenew/futur proof.jpg";
import energyimg from "../assets/imagenew/energy efficience.jpg";
import { Helmet } from "react-helmet";
import PagetopCompontswithbg from "./PagetopCompontswithbg";
import banner from "../assets/imagenew/aboutusnew.jpg";
import meetingimg from "../assets/imagenew/about-imgmeeting.jpg";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://parametrique.com/" />
        <meta
          property="og:image"
          content="https://parametrique.com/path_to_image.jpg"
        />
        <meta
          property="og:description"
          content="Parametrique offers advanced FTTH solutions, providing high-speed and reliable fiber optic technology for modern telecommunications."
        />
        <meta property="og:site_name" content="Parametrique" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content="2024-04-19T00:00:00Z" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="https://parametrique.com/" />
        <meta
          name="twitter:description"
          content="Parametrique is the top fire alarm system and fire detection system company - designing and offering a variety of fire alarm systems.."
        />
        <meta
          name="twitter:image"
          content="https://parametrique.com/assets/imagenew/para-logo.png"
        />
      </Helmet>
      <PagetopCompontswithbg
        img={banner}
        Title="About Us"
        titleColor="#0071DC"
      />
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-play">
                <img src={meetingimg} alt="About Images" />
                <div class="about-play-content">
                  <span>Watch Our Intro Video</span>
                  <h2>Perfect Solution and Services!</h2>
                  <div class="play-on-area">
                    <Link
                      to="https://www.youtube.com/watch?v=pnob15P8wU4"
                      class="play-on popup-btn"
                      target="_blank"
                    >
                      <i class="bx bx-play"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content ml-25">
                <div className="section-title">
                  <span className="sp-color2">10 Years of Experience</span>
                  <h5>
                    Parametrique: Revolutionizing Connectivity and Living Spaces
                    with Integrated Residential and Commercial FTTH Solutions
                  </h5>
                  <p>
                    Our integrated and innovative network solutions allow the
                    transmission of the network through the medium of our optic
                    fiber. Communities can choose any network provider according
                    to their need and we will amplify the user experience with
                    the convenience of our optical cables that will carry the
                    network to the user location. There are no charges that are
                    levied on the customer apart from the specific plan or
                    network connection that they choose.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <ul className="about-list text-start">
                      <li>
                        <i className="bx bxs-check-circle"></i>
                      </li>
                      <li>
                        <i className="bx bxs-check-circle"></i>Easy to Customer
                        Services
                      </li>
                      <li>
                        <i className="bx bxs-check-circle"></i>Good Quality
                        Products Services
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul className="about-list about-list-2 text-start">
                      <li>
                        <i className="bx bxs-check-circle"></i>Change the Volume
                      </li>

                      <li>
                        <i className="bx bxs-check-circle"></i>Solution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className=" flex flex-col w-full h-auto gap-10 ">
                <div className=" text-[45px] text-white ">
                  <GoGoal />
                  <h4 className=" text-white">OUR MISSION </h4>
                  <p
                    className="  text-lg text-white"
                    style={{ lineHeight: "29px", fontSize: "16px" }}
                  >
                    Our goal is to provide quality assured services to you so
                    that it increases your productivity and comfort. We are
                    always eager to assist you in creating a life of
                    self-sufficiency and satisfaction. Our aim is to make your
                    life more methodical and comfortable through our
                    performance-oriented approach and innovative methods.
                  </p>
                </div>
                <div className=" text-[45px] text-white ">
                  <FaEye />
                  <h4 className=" text-white">OUR VISION</h4>
                  <p
                    className=" text-lg text-white"
                    style={{ lineHeight: "29px", fontSize: "16px" }}
                  >
                    Our integrated solutions are developed and manufactured to
                    constantly define and redefine the modern age of home and
                    commercial automation. We envision our future with you along
                    with the bond of technological excellence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="choose-img  mt-20">
                <img
                  className=" img-fluid"
                  src={aboutussomthingimg}
                  alt="aboutussomthingimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="security-area pt-100 pb-70 bg-gray-400">
        <div className=" w-full flex flex-col justify-center h-auto items-center">
          <div className="section-title text-center flex justify-center flex-col items-center ">
            <span className="sp-color2">Our Experties</span>
            <h2>
              Searching for a Solution! We Provide Truly Prominent Solutions
            </h2>
          </div>

          <div className="   grid  xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 lg:gap-4  sm:gap-4 gap-4 p-4  mt-16">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg"
                  src={Securityimg}
                  alt="security"
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                    SECURITY
                  </h5>
                </div>
                <p className="mb-3  text-sm text-black  ">
                  With our integrated and managed security systems, you can be
                  assured of getting the maximum security to your network
                  connection without causing any hindrance to the service.
                  Services like CCTV and access control provides reliability and
                  affordability to builders and residents.
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg "
                  src={compfortimg}
                  alt="compfortimg"
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                    COMFORT
                  </h5>
                </div>
                <p className="mb-3  text-sm text-black ">
                  Experience unmatched comfort with a better quality of lighting
                  and temperature control for the desired ambience and control
                  of all electrical equipments remotely with the most advanced
                  home automation services.
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div>
                <img
                  className="rounded-t-lg "
                  src={futureoroofimg}
                  alt="futureoroofimg"
                />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                    FUTURE PROOF
                  </h5>
                </div>
                <p className="mb-3  text-sm text-black ">
                  We offer multiple options and platforms for innovation and
                  expansion with state-of-the-art integrated solutions. All our
                  services have the potential to generate future investment with
                  emphasis upon reliability, convenience and customer
                  satisfaction.
                </p>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div>
                <img className="rounded-t-lg" src={energyimg} alt="energyimg" />
              </div>
              <div className="p-5">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                    ENERGY EFFICIENCY
                  </h5>
                </div>
                <p className="mb-3  text-sm  text-black">
                  Smart energy management is an integral part of our solutions.
                  We keep in mind the ease of affordability and therefore make
                  use of prepaid meter to monitor energy consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="counter-area pt-100 pb-70">
        <div className="container ">
          <div className="section-title text-center flex justify-center flex-col items-center  lg:ml-[250px]  sm:mr-40">
            <span className="sp-color2">Numbers Are Talking</span>
            <h2>Unlocking Growth, Achieving Success</h2>
            <h6>
              How Parametrique Became the Best Integrated solutions Provider
            </h6>
            <p>
              At Parametrique, we unlock growth by delivering exceptional
              services, marked by milestones in our commitment to excellence
            </p>
          </div>
          <div
            className="row  container"
            style={{
              paddingTop: "100px",
              display: "flex",

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="col-lg-4 col-6 col-md-4 d-flex align-items-center justify-content-center">
              <div className="counter-another-content text-center">
                <i className="flaticon-web-development"></i>
                <h3>160k+</h3>
                <span>Completed HomePass</span>
              </div>
            </div>
            <div className="col-lg-4 col-6 col-md-4 d-flex align-items-center justify-content-center">
              <div className="counter-another-content text-center">
                <i className="flaticon-consulting-1"></i>
                <h3>18+</h3>
                <span>Ongoing Project</span>
              </div>
            </div>
            <div className="col-lg-4 col-6 col-md-4 d-flex align-items-center justify-content-center">
              <div className="counter-another-content text-center">
                <i className="flaticon-startup"></i>
                <h3>170+</h3>
                <span>Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
