import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Aside from "./template/aside/Aside";
import Header from "./template/header/Header";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <div id="main">
        <Aside />
        <div id="sec-items">
          <div id="sec-1">
            <img className="abolfazl" src="/abolfazl.JPG" alt="abolfazl" />
          </div>
          <div id="sec-2">
            <h2>Social Media</h2>
            <div className="social">
              <a href="https://www.linkedin.com/in/abolfazl-mahjoob">
                <BsLinkedin />
              </a>
              <a href="https://github.com/abolfazl-mahjoob/">
                <BsGithub />
              </a>
              <a href="mailto:abolfazlmahjoobravesh@gmail.com">
                <BiLogoGmail />
              </a>
            </div>
          </div>
          <div id="sec-3">
            <div>
              <div className="top">
                <h2>testimonial</h2>
                <div>
                  5<span>rate</span>
                </div>
              </div>
              <div className="bottom">
                <p>
                  Looking for a developer who delivers quality solutions on
                  time? Let’s turn your ideas into reality! Click button to get
                  started and see how I can help your business grow.
                </p>
                <Link to={"/contact"}>Hire me</Link>
              </div>
            </div>
          </div>
          <div id="sec-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
