import React from "react";
import i1 from "../../assets/Footer/axonwhite.png";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="hope">
        <img src={i1} className="footer-axon" alt="Hope" />
        <div className="hope-address">
          <p>
            <strong>Netsanet Building, Fourth Floor</strong>
            <br />
            Opposite Century Mall <br />
            Near the Train Pedestrian Crossway <br />
            Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
      <div className="aboutus">
        <h3>ABOUT US</h3>
        <Link
          to="/about-us"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Who We Are
        </Link>
        <Link
          to="/about-us"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a href="">How We Work</a>
        </Link>
        <Link
          to="/about-us"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a href="">Financial</a>
        </Link>
      </div>
      <div className="help">
        <h3>YOUR HELP</h3>
        <Link
          to="/getinvolved"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a href="">Leave a Legacy</a>
        </Link>
        <Link
          to="/donate"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a href="">Monthly Giving</a>
        </Link>
        <Link
          to="/donate"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a href="">One-Time Donation</a>
        </Link>
      </div>
      <div className="impact">
        <h3>OUR IMPACT</h3>
        <Link
          to="/whatwedo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a href="">Stroke Awareness</a>
        </Link>
        <Link
          to="/whatwedo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a href="">Stroke Prevention</a>
        </Link>
        <Link
          to="/whatwedo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <a href="">Rehabilitation Support</a>
        </Link>
      </div>
      <div className="follow">
        <h3>FOLLOW US</h3>
        <div className="follow-social">
          <a href="">
            <FontAwesomeIcon icon={faFacebook} color="white" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} color="white" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faGooglePlus} color="white" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};
