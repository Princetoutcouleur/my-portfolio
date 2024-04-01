import React from "react";
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container pb-4">
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <p>Appellez - moi</p>
          <p>+221-77-101-05-02</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <p>Email</p>
          <p>babathiam0000@gmail.com</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <div className="">
            <a
              className="text-white"
              target="blank"
              href="https://www.instagram.com/the_princetoutcouleur/"
            >
              <FaInstagramSquare className="fs-3 me-4" />
            </a>
            <a
              className="text-white"
              target="blank"
              href="https://twitter.com/Babathiam01"
            >
              <FaTwitterSquare className="fs-3 me-4" />
            </a>
            <a
              className="text-white"
              target="blank"
              href="https://www.linkedin.com/in/baba-thiam-a7b86222a/"
            >
              <FaLinkedin className="fs-3 me-4" />
            </a>
            <a
              className="text-white"
              target="blank"
              href="https://github.com/Princetoutcouleur"
            >
              <FaGithub className="fs-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
