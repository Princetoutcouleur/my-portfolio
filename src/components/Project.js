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
        "Ce projet était ma première mission professionnelle. J'ai intégré le prototype du designer pour l'équipe backend.",
      url: "https://tayeur-gestion.vercel.app/",
    },
    {
      title: "daleu ndakaru",
      image: Daleundakaru,
      description:
        "C'est un site de vente de sneakers dont je suis le propriétaire, réalisé en collaboration avec un ami. Il est créé avec WordPress.",
      url: "https://daleundakaru.com",
    },
    {
      title: "travel",
      image: Travel,
      description:
        "Un site de voyage dont j'ai intégré toute l'interface utilisateur en ajoutant quelques animations pendant le défilement avec AOS.",
      url: "https://travel-website-rouge-nine.vercel.app/",
    },
    {
      title: "E-commerce",
      image: Ecommerce,
      description:
        "Ce site a été créé avec HTML, CSS et Bootstrap. C'était une tâche de validation pendant mon apprentissage de ce framework CSS.",
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
