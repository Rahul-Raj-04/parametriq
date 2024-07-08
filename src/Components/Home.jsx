import React from "react";
import Banner from "./Banner";
import Herosection from "./Herosection";
import HomeAbout from "./HomeAbout";
import OurServices from "./OurServices";

import CaseStudy from "./CaseStudy";

import { Helmet } from "react-helmet";
import Blog from "./Blog";
import Crawsal from "./Crausal";

function Home() {
  return (
    <div>
      <Helmet>
        <title>
          Parametrique FTTH Solutions | Advanced Fiber Optic Technology
        </title>
        <meta
          name="keywords"
          content="Home Automation Solutions, Home Automation Company, Energy Management, Prepaid Meter, Smart CCTV Solutions, Intercom Service Provider, Smart CCTV Solutions In Delhi NCR, Automatic Boom Barrier Solutions, Video Door Phone System, Home Automation Company In Delhi NCR, FTTH, FTTX, GPON, Fire Alarm Company In Delhi NCR, Fire Alarm System, Intercom Service Provider In Delhi NCR"
        />

        <meta
          name="title"
          content=" Design, Deploy, Integrate & Manage Effortlessly with Parametrique"
        />
        <meta
          property="og:title"
          content="Parametrique FTTH Solutions | Advanced Fiber Optic Technology"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.parametrique.com/" />
        <meta
          property="og:image"
          content="https://parametrique.com/assets/imagenew/para-logo.png"
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
      <Banner />

      <Herosection />

      <HomeAbout />

      <OurServices />

      <CaseStudy />

      <Blog />
      <Crawsal />
    </div>
  );
}

export default Home;
