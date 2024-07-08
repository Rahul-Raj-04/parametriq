import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUS from "./Components/ContactUS";
import { useEffect, useState } from "react";
import SmartHome from "./Components/SmartHome";
import FTTH from "./Components/FTTH";

import Threepageinone from "./Components/Threepageinone";
import Footercallus from "./Components/Footercallus";
import Videodoor from "./Components/Videodoor";
import Smartprepaidmeter from "./Components/Smartprepaidmeter";
import InterCom from "./Components/InterCom";

import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/fonts/flaticon.css";
import "./assets/css/boxicons.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/nice-select.min.css";
import "./assets/css/meanmenu.css";
import "../src/assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/theme-dark.css";

import Eroor from "./Components/Eroor";
import Thankyou from "./Components/Thankyou";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="spinner"></div>
            </div>
          </div>
        </div>
      )}

      {!isLoading && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Navbar />
                  <div className="main-content">
                    <Outlet />
                  </div>
                  <Footercallus />
                  <Footer />
                </>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<ContactUS />} />
              <Route path="/smarthomeautomation" element={<SmartHome />} />
              <Route path="/ftth" element={<FTTH />} />
              <Route path="/security/:page" element={<Threepageinone />} />
              <Route path="/cctv" element={<Threepageinone />} />

              <Route path="/intercom" element={<InterCom />} />
              <Route
                path="/smartprepaidmeter"
                element={<Smartprepaidmeter />}
              />
              <Route path="/videodoorphone" element={<Videodoor />} />
            </Route>
            <Route path="/*" element={<Eroor />} status={404} />
            <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
