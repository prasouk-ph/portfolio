import React from "react";
import screenP11 from '../../assets/p11-screen.png'
import screenP12 from '../../assets/p12-screen.png'
import screenP13 from '../../assets/p13-screen.png'
import screenP14 from '../../assets/p14-screen.png'
import Item from "./Item/Item";

const portfolioContent = [
  {
    title: 'Argent Bank',
    link: "https://imaginative-puffpuff-ec7361.netlify.app",
    github: "https://github.com/prasouk-ph/PrasoukPhoubandith_13_15042022",
    description: `Un projet avec comme fonctionnalité un système d'authentification mis en place à l'aide de redux ou de useContext.`,
    picture: screenP13
  },
  {
    title: 'SportSee',
    link: "https://singular-cajeta-fa6f5b.netlify.app",
    github: "https://github.com/prasouk-ph/PrasoukPhoubandith_12_04032022",
    description: "Un projet consistant à réaliser des graphiques à l'aide de Recharts tout en sécurisant les props avec PropTypes",
    picture: screenP12
  },
  {
    title: 'Kasa',
    link: "https://singular-sorbet-50d60b.netlify.app",
    github: "https://github.com/prasouk-ph/PrasoukPhoubandith_11_22022022",
    description: "Ma 1ère prise en main React, 1er pas avec le state pour réaliser un caroussel et un menu accordéon",
    picture: screenP11
  },
  {
    title: 'HRNet',
    link: "https://zippy-rabanadas-8a0aa2.netlify.app",
    github: "https://github.com/prasouk-ph/PrasoukPhoubandith_14_02052022",
    description: "Un prototype permettant la gestion des employés. Ma mission était la création d'une modale mais aussi sa publication sur npm. Données persistantes avec Firebase et mis en place du formulaire à l'aide de React Hook Form",
    picture: screenP14
  }
]
// screen format: 702 x 135
// picture format: 1956 x 1830

const Portfolio = () => {
  return (
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          {portfolioContent.map((project, index) => 
            <Item title={project.title} link={project.link} github={project.github} description={project.description} picture={project.picture} key={index} />
          )}
        </ul>
      </div>
  );
};

export default Portfolio;
