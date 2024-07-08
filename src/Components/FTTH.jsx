import "../assets2/css/style2.css";
import ftthbuilding from "../assets/imagenew/ftth copy.jpg";
import PagetopCompontswithbg from "./PagetopCompontswithbg";
import banner from "../assets/imagenew/fttxbanner.jpg";
import networkimg from "../assets/imagenew/networkandbenifit.jpg";
import fttmanimg from "../assets/imagenew/ftthfirstimg.jpg";
import { Container, Row, Col } from "react-bootstrap";
import designe from "../assets/imagenew/1.png";
import FTTHIMGE2 from "../assets/imagenew/FTTHIMGE2.png";
import gif from "../assets/imagenew/ADVANTAGES-OF-FTTH.gif";
import { Helmet } from "react-helmet";
function FTTH() {
  return (
    <>
      <Helmet>
        <title>FIBER TO THE HOME (FTTH)</title>
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
      <PagetopCompontswithbg Title="FIBER TO THE HOME" img={banner} />
      <section
        className="md:pt-[112px] pt-16 relative bg-gray-300 pb-8"
        id="about"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center">
            <div className="relative space-y-4 md:space-y-0">
              <div>
                <img
                  src={fttmanimg}
                  className="mx-auto  h-[450px] w-[550px]"
                  alt="fttmanimg"
                />
              </div>
              <div className="top-[120px] -left-20 md:absolute">
                <div className="flex gap-[17px] items-center pt-[25px] pr-[30px] pb-[21px] pl-[26px] bg-white shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg">
                  <h3 className="text-[50px] text-[#1cbe59]">
                    <span
                      className="dizme_tm_counter stop"
                      data-from="0"
                      data-to="18"
                      data-speed="2000"
                    >
                      10
                    </span>
                  </h3>
                  <span className="name  font-secondary leading-[1.3] font-medium">
                    Years of
                    <br />
                    Success
                  </span>
                </div>
              </div>
              <div className="bottom-[70px] -right-[30px] md:absolute">
                <div className="flex gap-[17px] items-center pt-[25px] pr-[30px] pb-[21px] pl-[26px] bg-white shadow-[25px_0px_65px_rgba(54,32,152,0.11)] rounded-lg">
                  <h3 className="text-[50px] text-[#6e50f0] ">
                    <span
                      className="dizme_tm_counter stop"
                      data-from="0"
                      data-to="9"
                      data-speed="2000"
                    >
                      160
                    </span>
                    K
                  </h3>
                  <span className="name  font-secondary leading-[1.3] font-medium">
                    Completed
                    <br />
                    HomePass
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="mb-[25px] lg:max-w-[440px]">
                <p
                  className="text-custom text-xl md:text-2xl font-medium font-secondary wow fadeInUp"
                  data-wow-duration="1s"
                >
                  Parametrique FTTX
                </p>
                <h3
                  className="md:text-[48px] text-[35px] leading-[1.25] mt-1.5 wow fadeInUp"
                  data-wow-duration="1s"
                >
                  FTTx Solutions by Parametrique
                </h3>
              </div>
              <p
                className=" text-start lg:max-w-[485px] leading-[30px] mb-[47px] wow fadeInUp  text-black"
                data-wow-duration="1s"
              >
                In todays dynamic telecommunication landscape, the demand for
                high-speed broadband and quad-play services is on the rise.
                Parametrique offers cutting-edge FTTx (Fibre to the x)
                solutions, the next-generation broadband technology
                revolutionizing the industry. FTTx provides subscribers with
                rapid access to a variety of quad-play services, including Data,
                Voice, Video, and IPTv.
              </p>
              <div className="wow fadeInUp" data-wow-duration="1s"></div>
            </div>
          </div>
        </div>
        <div
          className="left-10 top-5 absolute hidden lg:block wow fadeInLeft"
          data-wow-duration="1s"
        >
          <img src={designe} alt="designe" />
        </div>
      </section>

      <div id="section-counter " className="  mt-16">
        <div className="section pt-8">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="sigma_about style-6 mb-5 mb-lg-0">
                  <div className="section-title">
                    <h3 className="title">WHY FTTH? </h3>
                  </div>

                  <div className="style-2 mt-4 mb-0">
                    <ul className="list-disc text-black tracking-tighter ">
                      <li className=" text-black">
                        FTTH stands for "Fiber To The Home", a type of
                        communication network with fiber optic cable
                      </li>
                      <li>
                        Provides faster connection speed than twisted pair
                        conductors, various applications based on up-to-date
                        technology and optical fiber cable with minimized CAPEX
                        and OPEX
                      </li>
                      <li>
                        In order to be classified as FTTH, the access fiber must
                        cross the boundary of the subscriber's premises and
                        terminate inside the premises or at the external wall
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <img className="w-full h-auto" src={gif} alt="gif" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-4 bg-[#CEE3F9] " style={{ paddingBottom: "100px" }}>
        <div className="container">
          <div className=" p-5">
            <h4 className=" text-black font-bold text-center">
              Parametiruqe FTTX: The Game Changer for Real Estate
            </h4>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="sigma_info border-0 pb-0 style-12">
                    <div className="">
                      <span className="sigma_info-icon bg-primary-1 text-white">
                        <i className="flaticon-security is_flaticon"></i>
                      </span>
                      <h5>Unmatched connectivity</h5>
                    </div>
                    <div className=" ">
                      <p className=" text-black">
                        Highlight high-speed internet, seamless streaming, and
                        enhanced remote work capabilities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <div className="sigma_info-title">
                      <span className="sigma_info-icon bg-primary-1 text-white">
                        <i className="flaticon-best is_flaticon"></i>
                      </span>
                      <h5> Increase value demand</h5>
                    </div>
                    <div className="sigma_info-description">
                      <p className=" text-black ">
                        Emphasize the premium FTTX brings, attracting tech-savvy
                        buyers and boosting rental/resale potential
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <div className="sigma_info-title">
                      <span className="sigma_info-icon bg-primary-1 text-white">
                        <i className="flaticon-guarantee is_flaticon"></i>
                      </span>
                      <h5> Smart home integration </h5>
                    </div>
                    <div className="sigma_info-description">
                      <p className=" text-black ">
                        Showcase the convenience, security, and personalized
                        experiences FTTX enables
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="">
                    <div className="">
                      <h5> Future-ready infra..</h5>
                    </div>
                    <div className="">
                      <p className=" text-black  tracking-tight">
                        Focus on how FTTX prepares properties for VR, AR, cloud
                        computing, and smart city initiatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="sigma_info-image  ">
                <img
                  src={ftthbuilding}
                  className="w-100 lg:ml-24 ml-0"
                  alt="ftthbuilding"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-8">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={12}>
              <div className="mb-4">
                <h5>INTEGRATED TECHNOLOGY WITH GPON</h5>
                <ul className="list-disc text-black">
                  <li>
                    The increasing demand for bandwidth due to video streaming,
                    content sharing, social media applications and online gaming
                    is constantly pushing the requirement for higher bit rates
                    and better experiences
                  </li>
                  <li>
                    The ultimate response from operators, governments and
                    utilities is to deploy fiber-to-the- home (FTTH) using GPON
                    technology, which provides ultra broadband access for home
                    and office users
                  </li>
                  <li>
                    We offer state-of-the-art GPON system which enables
                    reliable, secure and future proof multi service access
                    network suitable for high bandwidth applications such as
                    video conferencing and remote education
                  </li>
                  <li>
                    GPON system complies with the latest international standards
                    and works in harsh environmental conditions
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="text-center flex justify-center items-center w-full h-full">
                <img
                  src={FTTHIMGE2}
                  alt="FTTHIMGE2"
                  className="img-fluid w-full"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div id="section-feature  " className=" bg-[#445A8B] text-white">
        <div className="section section-padding pt-16">
          <div className="container">
            <div className="section-title   has-element">
              <span className=" text-start text-white">
                Parametiruqe FTTX: SOLUTIONS OFFERED
              </span>
            </div>
            <div className="row   pt-4 text-white">
              <div className="col-lg-6">
                <ul className=" list-disc">
                  <li>
                    An integrated and innovative network solutions allow the
                    transmission of network through optic fiber medium <br />
                    <br />
                  </li>
                  <li>
                    Communities can choose any network provider according to
                    their need and we will amplify the user experience with the
                    convenience of our optical cables that will carry the
                    network to the user location <br /> <br />
                  </li>
                  <li>
                    There are no charges that are levied on the customer apart
                    from the specific plan or network connection that they
                    choose
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 mb-30  mt-4 mt-lg-0 ">
                <div className=" ">
                  <img
                    src={ftthbuilding}
                    className="img-fluid "
                    alt="ftthbuilding"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white  flex  flex-col">
        <h4 className=" w-full h-auto flex justify-center items-center  mt-16">
          Network Planning, Design and Engineering
        </h4>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-1 xl:gap-0 lg:py-16 lg:grid-cols-12  gap-4">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-2xl xl:text-2xl ">
              Parametrique excels in delivering high-quality network planning,
              design, and engineering solutions.
            </h1>
            <div className="max-w-2xl mb-6 font-light text-black lg:mb-0  ">
              <ul className="list-disc">
                <li>
                  Our extensive experience managing complex networks for major
                  telecom providers translates into a deep understanding of
                  client needs and challenges.
                </li>
                <li>
                  Our skilled team ensures flawless Service Fulfillment,
                  guaranteeing end-to-end execution of customer orders.
                </li>
                <li>
                  Committed to excellence, employing industry best practices and
                  Continuous Improvement Plans, consistently exceeding client
                  expectations through service delivery aligned with agreed KPIs
                  and SLAs
                </li>
                <li>
                  Parametrique offers a comprehensive approach, covering every
                  aspect from initial feasibility studies to final handover.
                  This ensures a seamless and successful client experience,
                  fostering lasting partnerships
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img alt="networkimg" src={networkimg} />
          </div>
        </div>
      </section>
    </>
  );
}

export default FTTH;
