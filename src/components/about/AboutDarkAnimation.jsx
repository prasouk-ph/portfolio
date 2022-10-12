import React from "react";
import Skills from "../skills/SkillsAnimation";
import portrait from "../../assets/portrait.png"

const AboutDarkAnimation = () => {
  return (
    <>
      <div className="about_inner">
        <div className="left">
          <img src={portrait} alt="portrait" />
          <div
            className="image portrait"
            data-aos="fade-right"
            data-aos-duration="1200"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + portrait
              })`,
            }}
          ></div>
        </div>
        <div
          className="right"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="50"
        >
          <div className="short">
            <h3>Je suis Prasouk PHOUBANDITH</h3>
            <h5>
              Un <span className="theme-color">Développeur Front-End </span>
              basé en <span className="theme-color">Île-de-France</span>
            </h5>
            <p>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences through meaningful
              interactions. Check out my Portfolio
            </p>
          </div>
          <div className="extra">
            <h3 className="title">Informations personnelles</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span>Nom :</span> Prasouk PHOUBANDITH
                  </p>
                </li>
                <li>
                  <p>
                    <span>Adresse :</span> Bussy-Saint-Georges
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age :</span> 31 ans
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone :</span> 07 89 70 77 77
                  </p>
                </li>
                <li>
                  <p>
                    <span>Nationalité :</span> Française
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email :</span> prasouk.ph@gmail.com
                  </p>
                </li>
              </ul>
            </div>
            {/* End list */}
            {/* <div className="beny_tm_button color-outline">
              <a href="img/about/cv.webp" download>
                <span className="wrapper">
                  <span className="first">Téléchargez mon CV</span>
                  <span className="second">Téléchargez mon CV</span>
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default AboutDarkAnimation;
