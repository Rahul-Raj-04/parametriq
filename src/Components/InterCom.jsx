import React from "react";

import Card from "./Pagecontent/Card";
import security from "../assets/imagenew/security.jpeg";
import image2 from "../assets/imagenew/services-inner-img.jpg";

import { Helmet } from "react-helmet";
import PagetopCompontswithbg from "./PagetopCompontswithbg";
import banner from "../assets/imagenew/intercomebanner.jpg";
import enhance from "../assets/imagenew/Enhance.jpg";
import Scrable from "../assets/imagenew/SCALEABLITY.jpg";
import streem from "../assets/imagenew/Streemline.jpg";
import { SiSpringsecurity } from "react-icons/si";
import { FaRegPlusSquare } from "react-icons/fa";
function InterCom() {
  return (
    <>
      <>
        <Helmet>
          <title>Intercome</title>
          <meta
            name="keywords"
            content="Intercom Service Provider, Intercom Service Provider In Delhi NCR, Wireless Intercom, Wireless Intercom System For Business, Wireless Intercom For Apartment, Intercom System For Society, Intercom System, Intercom Solution"
          />
          <meta
            name="description"
            content="Transform your communication with Parametrique Intercom – where seamless connections meet innovative, enhancing your digital interactions effortlessly."
          />
          <meta
            name="title"
            content=" Maximize potential with Parametrique Intercom Service"
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
        <PagetopCompontswithbg img={banner} Title="INTERCOM" />
        <div
          className=" flex justify-center flex-col 
       mx-auto items-center lg:p-16  ml-16  w-[80%]  "
        >
          <h3 className=" lg:p16  flex  justify-center items-center w-full h-auto">
            Parametrique Intercom The Future of Intelligent Building
            Communication
          </h3>
          <p className=" flex justify-center items-center  w-[80%]   text-center">
            Intercom offers a revolutionary parametrique intercom service,
            providing a fully customizable and intelligent communication
            solution for residential and commercial buildings. This advanced
            system goes beyond basic intercom functionality, enhancing security,
            streamlining operations, and fostering a connected community.
          </p>
          <span></span>
        </div>
        <div className="   mx-auto w-[90%]  content-center items-center grid  xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 lg:gap-4  sm:gap-4 gap-4 p-4  mt-16 mb-16">
          <Card
            image={security}
            title="	Enhanced Security"
            description="Intercom empowers security personnel with features like remote access control, visitor screening, and camera integration, creating a safer environment for residents and tenants"
          />
          <Card
            image={streem}
            title="Streamlined Operations"
            description="The user-friendly platform centralizes resident communication, delivery management, and maintenance requests, saving time and resources"
          />
          <Card
            image={enhance}
            title="Enhanced  Value "
            description=" Intercom's modern design and functionality elevate a building's appeal, attracting potential residents and tenants while increasing property value"
          />
          <Card
            image={Scrable}
            title="	Scalability"
            description="The system adapts to your needs, seamlessly integrating with future growth in residential complexes or commercial developments"
          />
        </div>

        <div
          id="services"
          className={`section relative   h-auto md:pt-16  bg-no-repeat bg-cover  `}
          style={{
            backgroundImage: "url(https://amitel.in/img/bg/services_bg.jpg)",
          }}
        >
          <div className="container xl:max-w-6xl mx-auto px-4 ">
            <h4 className=" w-full h-auto flex justify-center items-center  mt-4 text-white">
              Building a Stronger Community:
            </h4>
            <h6 className="w-full h-auto flex justify-center items-center pt-2 text-white">
              Intercom fosters a safer and more connected community through
            </h6>
            <div className="flex flex-wrap gap-0 flex-row -mx-4 text-center  ">
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp animate-fadeInUp duration-1000 visible p-24"
                data-wow-duration="1s"
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4 h-[60px]">
                    <SiSpringsecurity className=" text-4xl" />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Robust Security Features
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Secure access control, visitor screening, and security
                    system integration create a safer environment for everyone
                  </p>
                </div>
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp  animate-fadeInUp duration-1000 visible p-24"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                // style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;"
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4 h-[60px]">
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      width="2rem"
                      height="2rem"
                      fill="currentColor"
                      className="bi bi-chat-square-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                      <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Seamless Communication
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The platform facilitates efficient communication between
                    residents, security personnel, and management <br />
                  </p>
                </div>
              </div>
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp p-24"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                // style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;"
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4 h-[82px]">
                    <FaRegPlusSquare className=" text-4xl" />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Enhanced Living Experience
                  </h3>
                  <p className="text-gray-500 text-sm ">
                    Intercom creates a convenient, secure, and connected living
                    environment for all residents. <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white ">
          <h4 className=" w-full h-auto flex justify-center items-center p-4">
            Parametrique's INTERCOM Service: Your Comprehensive Intercom
            Solution
          </h4>
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-1 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl ">
                Unparalleled Support & Maintenance:
              </h1>
              <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-0 ">
                <ul className="list-disc p-4">
                  <li>
                    24/7 expert support ensures minimal downtime and maximizes
                    convenience
                  </li>
                  <li>
                    Dedicated team readily addresses any intercom system issues
                    or concerns.
                  </li>
                  <li>Peace of mind knowing your system is in capable hands</li>
                  <li>
                    Handles projects of any size, from single-unit installations
                    to large-scale deployments (100,000+ units).
                  </li>
                  <li>
                    Extensive experience guarantees efficient and smooth system
                    operation
                  </li>
                  <li>
                    Proven track record serving major townships across India
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={image2} alt="mockup" />
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default InterCom;
