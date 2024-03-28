import React from "react";
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <div id="Navigation " className="container fixed-top mb-5">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand fs-4 text-white" href="#">
            <img src={logo} className="me-3"/>
            Baba Thiam
          </a>
          <button
            class="navbar-toggler border shadow-lg"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="fs-3 text-white"/>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto gap-3">
              <li class="nav-item">
                <a class="nav-link text-white fw-semibold" href="#">
                  Projets
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white fw-semibold" href="#">
                  Technologies
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white fw-semibold" href="#">
                  A Propos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
