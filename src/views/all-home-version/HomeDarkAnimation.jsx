import React from "react";
import Header from "../../components/header/HeaderDark";
import Slider from "../../components/slider/SliderDarkAnimation";
import About from "../../components/about/AboutDarkAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Contact from "../../components/Contact";
import Footer from "../../components/footer/Footer";
// import Social from "../../components/Social";

const HomeDarkAnimation = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light">
      <Header />
      {/* End Header */}

      <Slider />
      {/* End Slider */}

      <div className="beny_tm_about" id="about">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>A propos de moi</span>
            <h2>A propos de moi</h2>
            <p>
              Après plus de 5 ans dans le commerce de la téléphonie. J'ai décidé de me reconvertir en tant que développeur Front-end.
            </p>
          </div>
          {/* End .beny_tm_title */}
          <About />
          {/* End Slider */}
        </div>
      </div>
      {/* /ABOUT */}

      {/* PORTFOLIO */}
      <div className="beny_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Portfolio</span>
            <h2>Mon Portfolio</h2>
            <p>
              Mes projets réalisés avec React.JS durant ma formation.
            </p>
          </div>
          {/* End beny_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* /PORTFOLIO */}

      {/*  CONTACT */}
      <div className="beny_tm_contact" id="contact">
        <div className="container">
          <div className="contact_inner">
            <div
              className="left"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="beny_tm_title_holder">
                <span>Contact</span>
                <h2>Vous voulez me joindre ?</h2>
              </div>
              {/* <div className="short_list">
                <Social />
              </div> */}

              <div className="fields">
                <Contact />
              </div>
            </div>
            {/* End .left */}

            {/* <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="fields">
                <Contact />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}

      {/* FOOTER */}
      <div className="beny_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* /FOOTER */}
    </div>
  );
};

export default HomeDarkAnimation;
