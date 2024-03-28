import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="mb-3">
      <div class="card">
        <div className="card-img-top p-3">
          <img
            src={props.image}
            class="imgProject img-fluid rounded"
            alt="..."
          />
        </div>

        <div class="card-body">
          <h5 class="card-title text-center  text-capitalize fs-4">
            {props.title}
          </h5>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="titleUnderline"></div>
          </div>
          <p class="card-text">{props.description}</p>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <button className="gradientColor buttonApp mx-auto">
                <a href={props.url} className="text-white text-decoration-none">
                  Voir
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
