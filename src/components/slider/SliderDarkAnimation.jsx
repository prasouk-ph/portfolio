import React from "react";
import Social from "../Social";
import SocialTwo from "../SocialTwo";
import ReactTyped from "react-typed";
import portrait from "../../assets/portrait.png"

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
                  typeSpeed={150}
                  backSpeed={60}
                  strings={["Développeur Front", "Intégrateur"]}
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
              <br /> <span>Basé en Île-de-France.</span>
            </h1>
            <p
              className="text"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              I'm developer focused on crafting user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>
            <div
              className="mobile_social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <Social />
            </div>
            {/* End .social */}

            <div
              className="beny_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a className="anchor" href="#about">
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

      <div className="social" data-aos="fade-left" data-aos-duration="1200">
        <SocialTwo />
      </div>
      {/* End .social */}
    </div>
    //HERO
  );
};

export default SliderDarkAnimation;
