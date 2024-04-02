import React from 'react';

const Techno = () => {
  const technoData = [
    {
      techno: 'html',
      niveau: 'avancé',
      pourcentage: '90'
    },
    {
      techno: 'css & bootstrap',
      niveau: 'avancé',
      pourcentage: '90'
    },
    {
      techno: 'javascript',
      niveau: 'intermédiaire',
      pourcentage: '50'
    },
    {
      techno: 'react',
      niveau: 'intermédiaire',
      pourcentage: '50'
    },
  ];

  return (
    <div id='techno' className='container py-3 mb-5'>
      <div className="row">
        <h2>Technologies</h2>
        <div className="col-12 px-5 mt-5 pb-5">
          {technoData.map((tech, index) => (
            <div key={index} className="mb-4 px-lg-5">
              <div className="d-flex justify-content-between">
                <p className='text-uppercase'>{tech.techno}</p>
                <p className='text-capitalize'>{tech.niveau}</p>
              </div>
              <div className="progress rounded-pill">
                <div
                  className="progress-bar gradientColor rounded-pill"
                  role="progressbar"
                  style={{
                    width: `${tech.pourcentage}%`,
                  }}
                  aria-valuenow={tech.pourcentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {tech.pourcentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12">
          <h3>Technologies et Compétences Supplémentaires</h3>
          <div className="row p-3 mx-lg-5">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <ul>
                <li>Git</li>
                <li>Canva</li>
                <li>Vercel</li>
                <li>Netlify</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <ul>
                <li>Adaptabilité</li>
                <li>Communication</li>
                <li>Esprit d'équipe</li>
                <li>Vente</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <ul>
                <li>Anglais</li>
                <li>Montage vidéo (Cap Cut)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techno;
