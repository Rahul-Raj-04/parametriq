import React from "react";

import { HiBellAlert } from "react-icons/hi2";
import { MdSchedule } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { Helmet } from "react-helmet";
import PagetopCompontswithbg from "./PagetopCompontswithbg";
import banner from "../assets/imagenew/homeautomationbanner.jpg";
import benifitimg from "../assets/imagenew/Benefits.jpg";
import backgroundImage from "../assets/imagenew/Smarthomebgimge.jpg";
import videoimg from "../assets/imagenew/about-img1.jpg";
import { Link } from "react-router-dom";
function SmartHome() {
  return (
    <>
      <Helmet>
        <title>Smart Home Automation</title>
        <meta
          name="keywords"
          content="Smart home solutions, Home Automation Solutions, Home Automation Company, Smart Home Automation, Smart Home Systems, Home Automation And Security System , Home Integrated Solutions, Automated House Control System, Home Automation Services"
        />
        <meta
          name="description"
          content=" Upgrade your lifestyle with Parametrique Home Automation Solutions. Effortlessly control your environment for ultimate comfort."
        />
        <meta
          name="title"
          content=" Transform home with Parametrique home automation solutions"
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
      <PagetopCompontswithbg Title="SMART HOME AUTOMATION" img={banner} />
      <div>
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-play">
                  <img src={videoimg} alt="About-Images" />
                  <div className="about-play-content">
                    <h1 className="d-none">Smart Home Solution </h1>
                    <span>Watch Our Intro Video</span>
                    <h2>Perfect Solution for Home Automation !</h2>
                    <div className="play-on-area">
                      <Link to="#" className="play-on popup-btn">
                        <i className="bx bx-play"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content ml-25">
                  <div className="section-title">
                    <span className="sp-color2">Home Automation</span>
                    <h2>
                      Parametrique: Your One-Stop Solutions for Intelligent
                      Automation
                    </h2>
                    <h6 className=" pt-2">
                      Transform your space with Parametrique Tailored Home
                      Automation Solutions!
                    </h6>
                    <p>
                      We offer comprehensive automation systems designed to
                      elevate convenience, security, and energy efficiency
                      across diverse applications
                    </p>
                    <p>
                      <span>Homes</span> Experience a smarter lifestyle with
                      effortless control over lighting, thermostats, appliances,
                      and more.
                    </p>
                    <p>
                      <span>Commercial Buildings</span> Enhance operational
                      efficiency, optimize energy use, and create a secure
                      environment for your business.
                    </p>
                    <p>
                      <span> Hotels</span> Deliver an exceptional guest
                      experience with features like in-room temperature control
                      and personalized lighting.
                    </p>
                    <p>
                      <span> Public Utility Sector</span> Leverage our
                      automation expertise to optimize resource management and
                      improve service delivery.
                    </p>
                  </div>
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="choose-area pt-100 pb-70  "
        style={{ backgroundColor: "gray" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-2xl  tracking-tight leading-none md:text-2xl xl:text-2xl text-white">
                  Unparalleled Benefits with Parametrique's Automation:
                </h1>
                <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-0 ">
                  <ul className="list-disc text-white">
                    <li>
                      <span className=" font-bold">Global Control:</span> Manage
                      your entire system remotely, from anywhere in the world,
                      using our user-friendly interface.
                    </li>
                    <li>
                      <span className=" font-bold"> Enhanced Security: </span>
                      In-built sensors provide real-time alerts for fire, gas
                      leaks, intrusions, and thefts, offering peace of mind and
                      allowing for immediate action.
                    </li>
                    <li>
                      <span className=" font-bold">Unmatched Convenience:</span>
                      Effortlessly control various aspects of your space,
                      creating a comfortable and personalized environment
                    </li>
                    <li>
                      <span className=" font-bold">Energy Efficiency:</span>
                      Automate lighting, heating, and cooling to optimize energy
                      use and reduce costs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-img">
                <img src={benifitimg} alt="Images" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`security-area pt-100 pb-70 security-area pt-100 pb-70 bg-cover bg-cente  opacity-80`}
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use the imported image
        }}
      >
        <div className="absolute inset-0  opacity-80"></div>
        <div className="container   z-10">
          <div className="section-title text-center z-10 flex  center flex-col items-center lg:ml-[250px]">
            <span className="sp-color4  text-white">Our Process</span>
            <h2 className="leading-3 text-white " style={{ fontSize: "25px" }}>
              We follow an automation process that is flexible, easy to
              personalize & execute.
            </h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4 col-sm-6">
              <div className="security-card">
                <i className="flaticon-cyber-security"></i>
                <h3>
                  <Link to="#">Planning</Link>
                </h3>
                <p>
                  Our team consults you on the project at an early planning
                  stage and ensures seamless integration of all the components
                  of your home.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="security-card">
                <i className="flaticon-implement"></i>
                <h3>
                  <Link to="#">Hand-Over</Link>
                </h3>
                <p>
                  At the time of hand over, our team thoroughly demonstrates all
                  of the smart functionalities of your digital home. tortor
                  odio.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="security-card">
                <i className="flaticon-consulting"></i>
                <h3>
                  <Link to="#">Servicing</Link>
                </h3>
                <p>
                  We provide an AMC contract for timely servicing of the
                  automation modules. Our team of experts conducts a complete
                  servicing of entire complex.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="security-card">
                <i className="flaticon-computer"></i>
                <h3>
                  <Link to="#">Model Home</Link>
                </h3>
                <p>
                  We help you set up your model home & personalize it as per the
                  requirements of your modern lifestyle.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="security-card">
                <i className="flaticon-effective"></i>
                <h3>
                  <Link to="#">Execution</Link>
                </h3>
                <p>
                  Once all the structural requirements are met, our team comes
                  in for a complete automation installation.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="security-card">
                <i className="flaticon-consultant"></i>
                <h3>
                  <Link to="#">Shifting</Link>
                </h3>
                <p>
                  Our wire-free automation modules are easy to disconnect &
                  re-install at your next home
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="   border bg-[#D5E5F4] ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className=" w-full mb-8 lg:mb-16 flex justify-center items-center flex-col">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#0071DC] ">
              Features
            </h2>
            <p className="text-black sm:text-xl ">
              Wire-free Control | Real-time Alerts | Easy Scheduling
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">
            <div className="  ">
              <CiMobile3 className="text-[#0071DC]  text-4xl" />

              <h3 className="mb-2 text-xl font-bold  text-[#0071DC]  mt-4">
                App Control
              </h3>
              <p className="text-black ">
                Control the entire ecosystem of your smart home from anywhere,
                anytime with our user-friendly phone app with a single touch.
              </p>
            </div>
            <div>
              <HiBellAlert className="text-[#0071DC] text-4xl " />

              <h3 className="mb-2 text-xl font-bold text-[#0071DC]  mt-4">
                Alert
              </h3>
              <p className="text-black ">
                Get live security alerts directly sent to your phone & keep
                track of all that’s happening at your home. Stay stress-free on
                vacations with your home’s security ensured.
              </p>
            </div>
            <div>
              <MdSchedule className="text-[#0071DC]  text-4xl" />

              <h3 className="mb-2 text-xl font-bold  text-[#0071DC] mt-4">
                Scheduling
              </h3>
              <p className="text-black ">
                Schedule the run-time of all the appliances at your smart home.
                Pre-set lights, fans, air-conditioner, geyser and television to
                turn ON/OFF at a specific time
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SmartHome;
