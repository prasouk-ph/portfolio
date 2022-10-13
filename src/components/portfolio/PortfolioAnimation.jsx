import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import screenP11 from '../../assets/p11-screen.png'
import screenP12 from '../../assets/p12-screen.png'
import screenP13 from '../../assets/p13-screen.png'
import screenP14 from '../../assets/p14-screen.png'
import Item from "./Item/Item";

const portfolioContent = [
  {
    title: 'Argent Bank',
    link: "https://github.com/prasouk-ph/PrasoukPhoubandith_13_15042022",
    github: "https://github.com/prasouk-ph/PrasoukPhoubandith_13_15042022",
    description: "Un projet avec comme fonctionnalité un système d'authentification mis en place à l'aide de redux et firebase",
    picture: screenP13
  },
  {
    title: 'SportSee',
    link: "https://github.com/prasouk-ph/PrasoukPhoubandith_12_04032022",
    github: "https://github.com/prasouk-ph/PrasoukPhoubandith_12_04032022",
    description: "Un projet consistant à réaliser des graphiques à l'aide de Recharts",
    picture: screenP12
  },
  {
    title: 'Kasa',
    link: "https://github.com/prasouk-ph/PrasoukPhoubandith_11_22022022",
    github: "https://github.com/prasouk-ph/PrasoukPhoubandith_11_22022022",
    description: "Ma 1ère prise en main React, 1er pas avec le state pour réaliser un caroussel et un menu accordéon",
    picture: screenP11
  },
  {
    title: 'HRNet',
    link: "https://github.com/prasouk-ph/PrasoukPhoubandith_14_02052022",
    github: "https://github.com/prasouk-ph/PrasoukPhoubandith_14_02052022",
    description: "Un prototype permettant la gestion des employés. Ma mission était la création d'une modale mais aussi sa publication sur npm. J'en ai profité pour faire persister certaines données avec Firebase et mettre en place le formulaire à l'aide de React Hook Form",
    picture: screenP14
  }
]

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  return (
    <SimpleReactLightbox>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          {portfolioContent.map((project, index) => 
            <Item title={project.title} link={project.link} github={project.github} description={project.description} picture={project.picture} index={index} key={index} />
          )}




          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="1gyTUHP6ne8"
            onClose={() => setOpen(false)}
          />
          {/* End Youtube Modal video */}

          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen2}
            videoId="100171151"
            onClose={() => setOpen2(false)}
          />
          {/* End Youtube Modal video */}

          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner video">
              <a
                href="https://www.youtube.com/watch?v=1gyTUHP6ne8"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Aura Dione </h3>
                <span>Youtube Shoot</span>
              </a>
              <img
                src="img/portfolio/3.jpg"
                alt="Youtube Shoot"
                onClick={() => setOpen(true)}
              />
            </div>
          </li>
          {/* End youtube */}
          <li
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="list_inner video">
              <a
                href="https://player.vimeo.com/video/100171151?h=92d8f1bd0a"
                target="_blank"
                rel="noopener noreferrer"
                className="title"
              >
                <h3>Jupita Rine </h3>
                <span>Vimeo Shoot</span>
              </a>
              <img
                src="img/portfolio/2.jpg"
                alt="Vimeo Shoot"
                onClick={() => setOpen2(true)}
              />
            </div>
          </li>
          {/* End vimeo */}

          <SRLWrapper>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template"
                >
                  <h3>Ave Simone</h3>
                  <span>Dribbble Shoot</span>
                </a>

                <a href="img/portfolio/1.jpg">
                  <img src="img/portfolio/1.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16530034-Tokyo-Personal-Portfolio-React-Template-RTL"
                >
                  <h3>Kelly Smith</h3>
                  <span>Dribbble Shoot</span>
                </a>

                <a href="img/portfolio/4.jpg">
                  <img src="img/portfolio/4.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template"
                >
                  <h3>Duru Sweet</h3>
                  <span>Dribbble Shoot</span>
                </a>

                <a href="img/portfolio/5.jpg">
                  <img src="img/portfolio/5.jpg" alt="Dribbble Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="list_inner">
                <a
                  className="title"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/ibthemes"
                >
                  <h3>Lisa Kotlins</h3>
                  <span>Facebook Shoot</span>
                </a>

                <a href="img/portfolio/6.jpg">
                  <img src="img/portfolio/6.jpg" alt="Facebook Shoot" />
                </a>
              </div>
            </li>
            {/* End image popup */}
          </SRLWrapper>
        </ul>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
