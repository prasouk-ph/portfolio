import React from "react";
import portrait from "../../assets/portrait.png"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

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
              Durant mes années dans le commerce, j’ai pu développer mon sens de l'organisation et de l’optimisation mais aussi ma pédagogie. <br /> <br />
En constante quête de progression, j’ai découvert que le développement m’offrirait plus de possibilités pour mettre à profit mes qualités. <br /> <br />
Je me lance à présent en temps que développeur React afin de proposer des solutions pouvant répondre au mieux à tous les besoins.
            </p>
          </div>
          <div className="extra">
            <h3 className="title">Ma stack</h3>
            <div className="list">
              <ul>
                <li>
                  <p>
                    <span><FaReact /></span> React.JS
                  </p>
                </li>
                <li>
                  <p>
                    <span><SiJavascript /></span> Javascript
                  </p>
                </li>
                <li>
                  <p>
                    <span><FaHtml5 /></span> HTML5
                  </p>
                </li>
                <li>
                  <p>
                    <span><FaCss3Alt /></span> CSS3
                  </p>
                </li>
                <li>
                  <p>
                    <span><FaSass /></span> Sass
                  </p>
                </li>
              </ul>
            </div>
            {/* End list */}
          </div>
        </div>
      </div>
      {/* <Skills /> */}
    </>
  );
};

export default AboutDarkAnimation;
