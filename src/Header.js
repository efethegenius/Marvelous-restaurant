import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Fade, Bounce, Slide, Zoom } from "react-awesome-reveal";

export const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <section className="header">
      <nav className="navbar">
        <div className="nav-head">
          <button
            className="nav-toggle "
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <Zoom delay="100" triggerOnce duration="3000">
          <img
            src="https://dl.airtable.com/.attachmentThumbnails/df074f571539de5abfe97b07285ff14b/0dd999b3"
            alt="Logo"
            className="logo"
          />
          <img
            src="https://dl.airtable.com/.attachmentThumbnails/df074f571539de5abfe97b07285ff14b/0dd999b3"
            alt="logo2"
            className="logo2"
          />
        </Zoom>
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <Slide>
            <ul className="links">
              <li>
                <Link
                  activeClass="active"
                  to="hot-meal-egusi"
                  spy={true}
                  smooth={true}
                >
                  <a href="#">Hot Meal</a>
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="menu" spy={true} smooth={true}>
                  <a href="#">Menu</a>
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="about" spy={true} smooth={true}>
                  <a href="#">About Us</a>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="reviews"
                  spy={true}
                  smooth={true}
                >
                  <a href="#">Reviews</a>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                >
                  <a href="#">Contact Us</a>
                </Link>
              </li>
            </ul>
          </Slide>
        </div>
      </nav>
      <div className="hot-meal" id="hot-meal-egusi">
        <div className="img-egusi">
          <img
            src="https://dl.airtable.com/.attachmentThumbnails/df39a42197cd9e8e1f607e0c1069d98f/bceb6ad2"
            alt="hot-meal"
            className="egusi"
          />
        </div>
        <div className="meal-details">
          <h3 className="hot">
            <span>HOT</span> MEAL OF THE WEEK
          </h3>
          <Bounce duration="3000">
            <h1>egusi soup</h1>
          </Bounce>
          <button className="cta">
            <span className="hover-underline-animation"> Order Now </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
