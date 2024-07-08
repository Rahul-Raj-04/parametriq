import React, { useEffect, useRef } from "react";
import cctvImg from "../assets/imagenew/CCTV2.jpeg";
import boomImg from "../assets/imagenew/boom barrier2.jpeg";
import accessImg from "../assets/imagenew/Access control 2.jpeg";
import parkingImg from "../assets/imagenew/Parking2.jpeg";
import fireImg from "../assets/imagenew/Fire Alarm2.jpeg";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import banner from "../assets/imagenew/securitybanner.jpg";
import PagetopCompontswithbg from "./PagetopCompontswithbg";

function ThreePageInOne() {
  const { page } = useParams();
  const boomBarrierRef = useRef(null);
  const cctvRef = useRef(null);
  const fireAlarmRef = useRef(null);
  const parkingRef = useRef(null);
  const accessControlRef = useRef(null);

  // Handle smooth scrolling to sections based on the page parameter
  useEffect(() => {
    const handleScrollToRef = (ref) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    switch (page) {
      case "boombarrier":
        handleScrollToRef(boomBarrierRef);
        break;
      case "cctv":
        handleScrollToRef(cctvRef);
        break;
      case "firealarm":
        handleScrollToRef(fireAlarmRef);
        break;
      case "parking":
        handleScrollToRef(parkingRef);
        break;
      case "accesscontrol":
        handleScrollToRef(accessControlRef);
        break;
      default:
        break;
    }
  }, [page]);

  return (
    <>
      <Helmet>
        <title>Security Management </title>
        <meta
          name="keywords"
          content="CCTV Solution, Security Camera Company, Smart CCTV Solution, CCTV Camera Solution, CCTV Camera Company, CCTV Camera, CCTV Camera For Building, Best CCTV Security Cameras, CCTV Camera Setup, CCTV Setup, CCTV Service In Delhi NCR, Security Solution, Automatic Boom Barrier Solutions, Boom Barrier Integrated Solutions in Noida, Automatic Boom Barrier Solutions In Delhi NCR, Access Control Systems, Access Control Systems For Business, Access Control Systems In Delhi NCR"
        />
        <meta
          name="description"
          content="Revolutionize surveillance with Parametrique's advanced CCTV, Boom Barrier, and Access Control Systems, ensuring unparalleled security for ultimate peace of mind."
        />
        <meta
          name="title"
          content="Perfect Protection with Parametrique CCTV Systems"
        />
        <meta
          name="keywords"
          content="Fire Alarm System, Fire Alarm Solution, Fire Detection System, Fire Monitoring System, Fire Detection And Fire Alarm System, Fire Alarm Company, Fire Alarm Company In Delhi NCR, Wireless Fire Detection System"
        />
        <meta
          name="description"
          content="Parametrique is the top fire alarm system and fire detection system company - designing and offering a variety of fire alarm systems."
        />
        <meta
          name="title"
          content="Stay secure with Parametrique Fire Alarm System"
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

      <PagetopCompontswithbg img={banner} Title="SECURITY MANAGEMENT" />

      <section className="bg-white" id="cctv" ref={cctvRef}>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-1 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl">
              CCTV
            </h1>
            <div className="max-w-2xl mb-6 font-light text-black lg:mb-0">
              <ul className="list-disc">
                <li>
                  Parametrique provides security solutions including designing,
                  maintaining, and 24/7 monitoring.
                </li>
                <li>
                  HD images with integrated POS can help identify offenders.
                </li>
                <li>
                  Remote accessibility on your smartphone with SMS/email alerts.
                </li>
                <li>
                  Security Management System provides real-time monitoring.
                </li>
                <li>
                  Automatically starts recording when any movement is detected
                  by the cameras.
                </li>
                <li>Single point monitoring for multi-acre campuses.</li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={cctvImg} alt="CCTV Imag" />
          </div>
        </div>
      </section>

      <section
        id="boombarrier"
        ref={boomBarrierRef}
        className="flex justify-center items-center w-full h-auto mx-auto gap-16 p-16 bg-gray-300"
      >
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="rounded-xl h-full"
            src={boomImg}
            alt="Boom Barrier Imag"
          />
        </div>
        <div>
          <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl">
            BOOM BARRIER
          </h1>
          <div className="max-w-2xl mb-6 font-light text-black lg:mb-0">
            <ul className="list-disc">
              <li>
                At Parametrique, we focus on improving the comfort and
                efficiency of our clients.
              </li>
              <li>
                One of our smart solutions for the security of residential and
                business properties is the boom barrier.
              </li>
              <li>It allows remote entry of a vehicle to a restricted area.</li>
              <li>
                Parametrique offers automated boom barriers allowing the
                operator to open or close the barrier remotely.
              </li>
              <li>
                These barriers are simple to use and available in both manual
                and automatic modes.
              </li>
              <li>We provide a better access management system.</li>
              <li>
                Our automated boom barriers come with RFID (Radio Frequency
                Identification) technology.
              </li>
              <li>
                We offer a range of boom barriers for different users, from
                low-tech manual ones to RFID-integrated fully automated
                barriers.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section ref={accessControlRef} className="bg-white" id="accesscontrol">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-1 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl">
              ACCESS CONTROL
            </h1>
            <div className="max-w-2xl mb-6 font-light text-black lg:mb-0">
              <ul className="list-disc">
                <li>Provides a safe working environment.</li>
                <li>Assists in auditing time and attendance.</li>
                <li>Access to multiple facilities through one interface.</li>
                <li>Saves time and money.</li>
                <li>Speeds up mundane processes.</li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={accessImg}
              alt="Access Control Imag"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      <section
        id="parking"
        ref={parkingRef}
        className="flex justify-center items-center w-full h-auto mx-auto gap-16 p-16 bg-[#0071DC]"
      >
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="rounded-xl w-[450px]"
            src={parkingImg}
            alt="Parking Imag"
          />
        </div>
        <div>
          <h1 className="max-w-2xl mb-4 text-xl tracking-tight leading-none md:text-2xl xl:text-2xl text-white">
            PARKING MANAGEMENTS
          </h1>
          <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-0">
            <ul className="list-disc text-white">
              <li>
                Keep a record of each and every vehicle entering the building.
              </li>
              <li>Drive-through car entrance.</li>
              <li>Register visitors for access to the buildings.</li>
              <li>App-based authentication system.</li>
              <li>Fast-track entrance for regular visitors.</li>
              <li>Provides flexible visitor parking slots.</li>
              <li>Provides easy visitor tracking.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white" id="firealarm" ref={fireAlarmRef}>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-1 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl">
              FIRE ALARM
            </h1>
            <div className="max-w-2xl mb-6 font-light text-black lg:mb-0">
              <ul className="list-disc">
                <li>Fire detection with alarm systems.</li>
                <li>Advanced solutions for any industry type.</li>
                <li>
                  Options from both wired and wireless fire alarm systems.
                </li>
                <li>Can be combined with CCTV cameras for added protection.</li>
                <li>Firefighting solution with fully integrated systems.</li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={fireImg} alt="Fire Alarm Imag" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ThreePageInOne;
