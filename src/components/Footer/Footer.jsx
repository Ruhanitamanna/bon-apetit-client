import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark text-white p-4 ">
      <div className="d-flex  justify-content-between d-sm-inline-flex">
        <ul>
          <li>FAQ</li>
          <li>Feedback</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <div>
          <p>
            Recipes you want to make. Cooking advice that works.
            <br /> Restaurant recommendations you trust.
          </p>
          <div className="d-flex justify-content-around py-4">
            <FaWhatsapp />
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <p className="text-center">
        <small>
          <FaCopyright />
          All Rights Reserved
        </small>
      </p>
    </div>
  );
};

export default Footer;
