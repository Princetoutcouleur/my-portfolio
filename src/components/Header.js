import React from "react";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import baba from '../assets/baba.png'

const Header = () => {
  return (
    <div id="Header" className="row pt-5 mb-5">
      <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
        <h3>Baba Thiam</h3>
        <h1 className="mb-4">Développeur Web Front-end</h1>
        <p>
          Passionné par l'innovation et la création d'expériences utilisateur
          exceptionnelles, je suis un développeur front-end enthousiaste à la
          recherche de nouveaux défis pour créer des expériences web captivantes
          et intuitives.
        </p>
        <div className="mb-4">
          <a
            className="text-white"
target="blank"            href="https://www.instagram.com/the_princetoutcouleur/"
          >
            <FaInstagramSquare className="fs-3 me-4" />
          </a>
          <a className="text-white" target="blank"href="https://twitter.com/Babathiam01">
            <FaTwitterSquare className="fs-3 me-4" />
          </a>
          <a
            className="text-white"
target="blank"            href="https://www.linkedin.com/in/baba-thiam-a7b86222a/"
          >
            <FaLinkedin className="fs-3 me-4" />
          </a>
          <a className="text-white" target="blank"href="https://github.com/Princetoutcouleur">
            <FaGithub className="fs-3 me-4" />
          </a>
        </div>
        <button className=" gradientColor buttonApp">
          <a href="mailto:babathiam0000@gmail.com" className="text-decoration-none text-white">Envoyer un mail</a>
        </button>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <img src={baba} className="img-fluid"/>
      </div>
    </div>
  );
};

export default Header;
