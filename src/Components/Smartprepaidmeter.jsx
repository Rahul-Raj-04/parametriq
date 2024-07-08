import React from "react";

import smartmeterimg from "../assets/imagenew/smartprepaidimg.jpeg";
import { Helmet } from "react-helmet";
import PagetopCompontswithbg from "./PagetopCompontswithbg";
import banner from "../assets/imagenew/prepaidmeterbanner.jpg";
import { RiBatterySaverLine } from "react-icons/ri";

import { FaCoins } from "react-icons/fa6";
import { MdPermDeviceInformation } from "react-icons/md";

function Smartprepaidmeter() {
  return (
    <>
      <Helmet>
        <title>Smart Prepaid Meter</title>
        <meta
          name="keywords"
          content="Energy Management Solutions, Prepaid Meter Solutions, Prepaid Meter, Smart Prepaid Meter, Smart Prepaid Meter in Delhi NCR, Prepaid Meter In Delhi NCR, Prepaid Energy Meter"
        />
        <meta
          name="description"
          content=" Stay ahead in energy management with Parametrique: innovative solutions for efficiency and sustainability."
        />
        <meta
          name="title"
          content=" Boost energy efficiency with Parametrique energy Management"
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
        Title="SMART PREPAID METER"
        img={banner}
        titleColor="#0071DC"
      />
      <div
        className=" flex justify-center flex-col 
       mx-auto items-center lg:p-16  ml-16   w-[80%]  "
      >
        <h3 className=" lg:p16  flex  justify-center items-center w-full h-auto">
          Building a Smarter Grid: Powering India with Smart Meters
        </h3>
        <p className=" flex justify-center items-center  w-[80%] ">
          Parametrique Smart meters track your energy use in real time, helping
          you save money and be eco-friendly. They also eliminate manual meter
          readings, saving power companies money and improving service. Plus,
          you get low-balance alerts to avoid outages. This nationwide switch is
          transforming India's power grid! Contact your local electricity
          provider to see if smart meters are available in your area and join
          the smart energy revolution
        </p>
        <span></span>
      </div>
      <div
        id="services"
        className={`section relative pt-20 pb-8  h-auto md:pt-16   `}
        style={{
          backgroundImage: "linear-gradient(to right, #0D1023, #434A5D)",
        }}
      >
        <div className="container xl:max-w-6xl mx-auto px-4 ">
          <h4 className=" w-full h-auto flex justify-center items-center  mt-4 text-white">
            Parametrique prepaid meter benefits
          </h4>

          <div className="flex flex-wrap flex-row -mx-4 text-center  m-[-40px] ">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp animate-fadeInUp duration-1000 visible p-24"
              data-wow-duration="1s"
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4 h-[60px]">
                  <FaCoins className=" text-4xl text-[#0071DC] " />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Save Money & Energy
                </h3>
                <p className="text-gray-500 text-sm">
                  with Parametrique smart prepaid meter See your usage in
                  real-time and make adjustments to lower bills and conserve
                  resources.
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
                  {/* <SiBoost className=" text-4xl" /> */}
                  <RiBatterySaverLine className=" text-4xl" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Boost Efficiency
                </h3>
                <p className="text-gray-500 text-sm">
                  Eliminate manual meter reading, reduce losses for power
                  companies, and improve overall supply <br /> <br />
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
                  <MdPermDeviceInformation className=" text-4xl" />
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Stay Informed
                </h3>
                <p className="text-gray-500 text-sm ">
                  Get low-balance alerts to avoid disruptions and manage your
                  usage proactively. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white ">
        <h4 className=" w-full h-auto flex justify-center items-center  mt-16">
          Pioneering Smart Meter Innovation in Delhi NCR
        </h4>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-1 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl">
              Unparalleled Support & Maintenance:
            </h1>
            <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-0  ">
              <ul className="list-disc">
                <li>
                  We're proud to be at the forefront of India's smart prepaid
                  smart meter revolution! In the past 5 years, we've delivered
                  over 50k + prepaid meters in Delhi NCR, empowering residents
                  with greater control over their energy usage.
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={smartmeterimg} alt="smartmeterimg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Smartprepaidmeter;
