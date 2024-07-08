import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../assets/Clientlogo/1.jpg";
import logo2 from "../assets/Clientlogo/2.jpg";
import logo3 from "../assets/Clientlogo/3.jpg";
import logo4 from "../assets/Clientlogo/4.jpg";
import logo5 from "../assets/Clientlogo/5.jpg";
import logo6 from "../assets/Clientlogo/6.jpg";
import logo7 from "../assets/Clientlogo/7.jpg";
import logo8 from "../assets/Clientlogo/8.jpg";
import logo9 from "../assets/Clientlogo/9.jpg";
import logo10 from "../assets/Clientlogo/10.jpg";
import logo11 from "../assets/Clientlogo/MAHAGUN.png";
import logo12 from "../assets/Clientlogo/assotech-426.jpg";
import logo13 from "../assets/Clientlogo/images.png";
import logo14 from "../assets/Clientlogo/land-craft-developers-3141.jpg";
import logo15 from "../assets/Clientlogo/logix-group-logo-8757B6B15C-seeklogo.com.png";
import logo16 from "../assets/Clientlogo/m2k.png";
import logo17 from "../assets/Clientlogo/max-square-logo.jpeg";
import logo18 from "../assets/Clientlogo/paras.jpg";
import logo19 from "../assets/Clientlogo/raheja-developers-logo-vector.png";
import logo20 from "../assets/Clientlogo/sunworld-3112079.png";
import logo21 from "../assets/Clientlogo/tatarealty-1567067558.png";
import isplogo1 from "../assets/ISP LOGO/BHARTIARTL.NS_BIG-b14bd7aa.png";
import isplogo2 from "../assets/ISP LOGO/Fusionnet logo.png";
import isplogo3 from "../assets/ISP LOGO/GTPL_LOGO_HIGH_RESOLUTION.png";
import isplogo4 from "../assets/ISP LOGO/TATA PLAY.png";
import isplogo5 from "../assets/ISP LOGO/comway.png";
import isplogo6 from "../assets/ISP LOGO/download.png";
import isplogo7 from "../assets/ISP LOGO/home-logo.png";
function Crawsal() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="  py-8">
        <div className="container ">
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="font-bold   text-[35px] ">Our Clients</h2>
          </div>
          <Slider {...settings} className="row partner-slider clientlogo">
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo1}
                  alt="logo1"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo2}
                  alt="logo2"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo3}
                  alt="logo3"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo4}
                  alt="logo4"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo5}
                  alt="logo5"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo6}
                  alt="logo6"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo7}
                  alt="logo7"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo8}
                  alt="logo8"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo9}
                  alt="logo9"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo10}
                  alt="logo10"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo11}
                  alt="logo11"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo12}
                  alt="logo12"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo13}
                  alt="logo13"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo14}
                  alt="logo14"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo15}
                  alt="logo15"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo16}
                  alt="logo16"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo17}
                  alt="logo17"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo18}
                  alt="logo18"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo19}
                  alt="logo19"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo20}
                  alt="logo20"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="partner-img text-center">
                <img
                  className="w-50 mx-auto slider-image"
                  src={logo21}
                  alt="logo21"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="container  ">
        <div className="w-full lg:w-1/2 pt-2">
          <h2 className="font-bold   text-[35px] ml-5">Our ISP Partner</h2>
        </div>
        <Slider {...settings} className="row partner-slider">
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img
                className="w-50 mx-auto slider-image "
                src={isplogo1}
                alt="isplogo1"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img
                className="w-50 mx-auto slider-image"
                src={isplogo2}
                alt="isplogo2"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img
                className="w-50 mx-auto slider-image"
                src={isplogo3}
                alt="isplogo3"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img
                className="w-50 mx-auto slider-image"
                src={isplogo4}
                alt="isplogo4"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img
                className="w-50 mx-auto slider-image"
                src={isplogo5}
                alt="isplogo5"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img
                className="w-50 mx-auto slider-image"
                src={isplogo6}
                alt="isplogo6"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="partner-img text-center">
              <img
                className="w-50 mx-auto slider-image"
                src={isplogo7}
                alt="isplogo7"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Crawsal;
