import React from "react";
import Card from "./Card";
import image from "./security.jpeg";
import image2 from "./services-inner-img.jpg";
import { Helmet } from "react-helmet";
// import Card2 from "./Card2";
function Pagetopcontent() {
  return (
    <>
      <Helmet>
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
      </Helmet>
      <div
        className="inner-banner"
        style={{
          backgroundImage:
            "url(https://www.parametrique.com/assets/media/image/expertise/intercom.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container ">
          <div className="inner-title">
            <h1 className=" font-bold text-[#445A8B] text-[90px]">Intercom </h1>
            <ul>
              <li className="  font-bold text-[68px] text-black">
                Your Gateway to Protected Living
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className=" flex justify-center flex-col 
       mx-auto items-center lg:p-16  ml-16   w-[80%]  "
      >
        <h3 className=" lg:p16  flex  justify-center items-center w-full h-auto">
          Parametrique Intercom: The Future of Intelligent Building
          Communication
        </h3>
        <p className=" flex justify-center items-center  w-[80%]  leading-[1rem]">
          Intercom offers a revolutionary parametrique intercom service,
          providing a fully customizable and intelligent communication solution
          for residential and commercial buildings. This advanced system goes
          beyond basic intercom functionality, enhancing security, streamlining
          operations, and fostering a connected community.
        </p>
        <span></span>
      </div>
      <div className="   mx-auto w-[90%]  content-center items-center grid  xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 lg:gap-4  sm:gap-4 gap-4 p-4  mt-16 mb-16">
        <Card
          image={image}
          title="	Enhanced Security"
          description="Intercom empowers security personnel with features like remote access control, visitor screening, and camera integration, creating a safer environment for residents and tenants"
        />
        <Card
          title="Streamlined Operations"
          description="The user-friendly platform centralizes resident communication, delivery management, and maintenance requests, saving time and resources"
        />
        <Card
          title="Enhanced  Value "
          description=" Intercom's modern design and functionality elevate a building's appeal, attracting potential residents and tenants while increasing property value"
        />
        <Card
          title="	Scalability"
          description="The system adapts to your needs, seamlessly integrating with future growth in residential complexes or commercial developments"
        />
      </div>

      <div
        id="services"
        className="section relative pt-20 pb-8 lg:h-[700px] h-auto md:pt-16 md:pb-0 p-16  bg-[url(https://amitel.in/img/bg/services_bg.jpg)] bg-no-repeat"
      >
        <div className="container xl:max-w-6xl mx-auto px-4 ">
          <h4 className=" w-full h-auto flex justify-center items-center  mt-4 text-white">
            Building a Stronger Community:
          </h4>
          <h6 className="w-full h-auto flex justify-center items-center pt-2 text-white">
            Intercom fosters a safer and more connected community through
          </h6>
          <div className="flex flex-wrap flex-row -mx-4 text-center  m-[-40px] ">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp animate-fadeInUp duration-1000 visible p-24"
              data-wow-duration="1s"
            >
              <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4 h-[60px]">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Robust Security Features
                </h3>
                <p className="text-gray-500">
                  Secure access control, visitor screening, and security system
                  integration create a safer environment for everyone
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
                <p className="text-gray-500">
                  The platform facilitates efficient communication between
                  residents, security personnel, and management
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
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-badge-ad"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Enhanced Living Experience
                </h3>
                <p className="text-gray-500">
                  Intercom creates a convenient, secure, and connected living
                  environment for all residents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <h4 className=" w-full h-auto flex justify-center items-center  mt-16">
          Parametrique's INTERCOM Service: Your Comprehensive Intercom Solution
        </h4>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-1 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">
              Unparalleled Support & Maintenance:
            </h1>
            <div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-0 md:text-lg lg:text-xl dark:text-gray-400">
              <ul className="list-disc">
                <li>
                  24/7 expert support ensures minimal downtime and maximizes
                  convenience
                </li>
                <li>
                  Dedicated team readily addresses any intercom system issues or
                  concerns.
                </li>
                <li> Peace of mind knowing your system is in capable hands</li>
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
  );
}

export default Pagetopcontent;
