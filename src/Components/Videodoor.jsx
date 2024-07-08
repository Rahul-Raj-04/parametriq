import React from "react";

import { Link } from "react-router-dom";
import Videodoorcard from "./Videodoorcard";
import { Helmet } from "react-helmet";
import PagetopCompontswithbg from "./PagetopCompontswithbg";
import banner from "../assets/imagenew/bannervideodoorphone.jpg";
import { TbEyeCheck } from "react-icons/tb";
import { RiRemoteControlLine } from "react-icons/ri";
import { MdOutlineBroadcastOnHome } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import videodoorimg2 from "../assets/imagenew/videodoor45.jpeg";
function Videodoor() {
  return (
    <>
      <Helmet>
        <title>Video Door Phone</title>
        <meta
          name="keywords"
          content="Video Door Phone, Security Solution, Video Door Phone company in Delhi NCR, Video Door Phone Manufacturer In Delhi NCR, Video Door Phone Intercom System,"
        />
        <meta
          name="description"
          content=" Upgrade your home security with Parametrique Video Door Phone, ensuring safety and convenience at your doorstep"
        />
        <meta
          name="title"
          content=" Upgrade home security with Parametrique Video Door Phone"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path_to_image.jpg"
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
        Title="VIDEO DOOR PHONE"
        img={banner}
        titleColor="#0071DC"
      />
      <div className="relative flex bg-clip-border sm:p-52 md:p-52 rounded-xl bg-white text-black shadow-md w-full flex-col lg:flex-row">
        <div className="relative w-full lg:w-2/5 m-0 overflow-hidden text-black bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src={videodoorimg2}
            alt="videodoorimg2"
            className="w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-black uppercase">
            Reimagining Home Security with Parametrique IP Video Intercom
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Video door phone
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-black pt-8">
            Experience a new era of security and convenience with Parametrique
            revolutionary IP Series Video Intercom System. Designed for modern
            living, this advanced system caters to apartments, suburban homes,
            and businesses alike
          </p>
          <p>
            <br />
            <br />
            <br />
          </p>
          <Link to="#" className="inline-block">
            <button
              className="flex items-center gap-2 justify-end px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-[#0071DC] active:bg-gray-900/20 hover:text-white"
              type="button"
            >
              Learn More
              <svg
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <div className=" flex flex-col p-24 bg-gray-200">
        <div className=" flex justify-center items-center mb-16 flex-col">
          <h4>Unparalleled Security with Cutting-Edge Features</h4>
          <p>
            Parametrique IP Service goes beyond traditional intercoms, offering
            unparalleled security and user-friendliness. Here's what sets it
            apart
          </p>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
          <Videodoorcard
            icon={<TbEyeCheck />}
            title="Crystal-Clear Vision"
            description="High-definition video ensures you see visitors clearly, even in challenging lighting conditions. Wide viewing angles provide a comprehensive perspective of your entrance."
          />
          <Videodoorcard
            icon={<RiRemoteControlLine class="text-4xl" />}
            title="Effortless Remote Control"
            description="Intuitive touchscreens make communication, receiving calls, monitoring, and managing your intercom system from anywhere, anytime, using our Mobile App. <br/><br/>"
          />
          <Videodoorcard
            icon={<MdOutlineBroadcastOnHome />}
            title="Unified Smart Home Control"
            description="The indoor stations act as central hubs, managing all your Hikvision devices with user-friendly interfaces. The Android system allows for seamless integration with third-party applications."
          />
          <Videodoorcard
            icon={<CgSmartHomeWashMachine />}
            title="Smart Access Solutions"
            description="Enjoy the convenience of touch-free entry with our intelligent authentication feature, eliminating the need for physical key cards by our video door phone service. <br/><br/>"
          />
        </div>
      </div>
      <div
        className="choose-area pt-100 pb-70"
        style={{ backgroundColor: "gray" }}
      >
        <div className="  flex  flex-col lg:flex-row w-[80%] justify-between  items-center h-auto">
          <div className="  text-white ">
            <div className="  lg:ml-[355px] w-[50%]  ">
              <h6 className=" text-white">Benefits</h6>
              <h4 className=" text-white">
                Parametrique IP Video Intercom System for Builders and RWAs
              </h4>
              <p className=" text-white">
                Parametrique IP Video Intercom System offers a range of
                advantages for builders and Resident Welfare Associations (RWAs)
                looking to enhance security and resident convenience in their
                societies. Here's a breakdown of the key benefits
              </p>
            </div>
          </div>
          <div className=" w-[50%] flex justify-start ml-16">
            <img src={videodoorimg2} alt="videodoorimg2" />
          </div>
        </div>
        <section className="  ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className=" w-full  flex justify-center items-center flex-col">
              <h4 className="text-4xl tracking-tight font-bold  text-white">
                Enhanced Security for Residents
              </h4>
              <p className="text-black sm:text-xl "></p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">
              <div className=" ">
                <h3 className="mb-2 text-xl  text-white ">
                  Improved Screening
                </h3>
                <p className="text-white ">
                  Residents can visually identify visitors before granting
                  access, deterring unauthorized entry
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl  text-white ">
                  Increased Monitoring
                </h3>
                <p className="text-white ">
                  Live video feeds and recording capabilities provide valuable
                  evidence in case of security incidents
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl text-white ">
                  Touchless Access Options
                </h3>
                <p className="text-white">
                  Intelligent authentication features eliminate the need for
                  physical keys or cards, reducing the risk of loss or theft
                </p>
              </div>
              <div className=" ">
                <h3 className="mb-2 text-xl  text-white ">
                  Centralized Management
                </h3>
                <p className="text-white ">
                  Manage access control and monitor activity throughout the
                  society from a central location
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl  text-white ">
                  Reduced Maintenance Costs
                </h3>
                <p className="text-white ">
                  Durable design and remote monitoring capabilities minimize
                  maintenance needs.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl text-white ">
                  Cost-Effective Solutions
                </h3>
                <p className="text-white">
                  Parametrique expertise ensures optimized system design for
                  cost-efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className=" px-4 mx-auto max-w-screen-xl  lg:px-6">
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 "></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Videodoor;
