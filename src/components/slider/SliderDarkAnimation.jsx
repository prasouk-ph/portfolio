import React from "react";
import ReactTyped from "react-typed";
import portrait from "../../assets/souk-008.png"

const SliderDarkAnimation = () => {
  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + portrait
              })`,
            backgroundSize: "50%"
          }}
        ></div>
        <div className="overlay"></div>
      </div>
      {/* End bg */}

      <div className="go-to go-to-next">
        <a href="#about">
          <span></span>
        </a>
      </div>
      {/* End animated goto button */}

      <div className="container">
        <div className="content">
          <div className="content_inner">
            <h3 className="name" data-aos="fade-up" data-aos-duration="1200">
              Bonjour ! Je suis Prasouk
            </h3>
            <h1
              className="job"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="50"
            >
              <span className="typer-toper">
                <ReactTyped
                  loop
                  typeSpeed={80}
                  backSpeed={60}
                  strings={["Développeur Front", "Intégrateur Web"]}
                  smartBackspace
                  shuffle={false}
                  backDelay={1000}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
              <br /> <span>Basé en Île-de-France</span>
            </h1>
            <p
              className="text"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Un développeur qui accorde autant d'importance à la manière qu'au résultat.
            </p>

            <div
              className="beny_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a className="anchor" href="#portfolio">
                <span className="wrapper">
                  <span className="first">Voir mon Portfolio</span>
                  <span className="second">Voir mon Portfolio</span>
                </span>
              </a>
            </div>
            {/* End beny_tm_button */}
          </div>
        </div>
      </div>
      {/* End .container */}
    </div>
    //HERO
  );
};

export default SliderDarkAnimation;
