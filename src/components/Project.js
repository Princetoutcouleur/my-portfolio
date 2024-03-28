import React from "react";
import ProjectCard from "./ProjectCard";
import Tayeur from "../assets/projects/tayeur.png";
import Daleundakaru from "../assets/projects/daleundakaru.png";
import Travel from "../assets/projects/travel.png";
import Ecommerce from "../assets/projects/princetoutcouleur-business.png";
const Project = () => {
  const CardData = [
    {
      title: "tayeur",
      image: Tayeur,
      description:
        "Design pleasant interfaces and digital products, user-centered and",
      url: "https://tayeur-gestion.vercel.app/",
    },
    {
      title: "daleu ndakaru",
      image: Daleundakaru,
      description:
        "Design pleasant interfaces and digital products, user-centered and",
      url: "https://daleundakaru.com",
    },
    {
      title: "travel",
      image: Travel,
      description:
        "Design pleasant interfaces and digital products, user-centered and",
      url: "https://travel-website-rouge-nine.vercel.app/",
    },
    {
      title: "E-commerce",
      image: Ecommerce,
      description:
        "Design pleasant interfaces and digital products, user-centered and",
      url: "https://the-princetoutcouleur-business.vercel.app/",
    },
  ];
  return (
    <div id="projects" className="container mb-5">
      <h2 className="pb-5">Projets</h2>
      <div className="row py-3">
        {CardData.map((card) => (
          <div className="col-lg-4 col-md-6 col-sm-12 pb-3">
            <ProjectCard
              image={card.image}
              title={card.title}
              description={card.description}
              url={card.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
