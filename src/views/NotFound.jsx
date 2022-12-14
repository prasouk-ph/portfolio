import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error_page">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "img/1.jpg"})`,
        }}
      >
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            404!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            La page n'a pas pu être trouvée.
          </p>

          <div
            class="beny_tm_button color"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link to="/">
              <span class="wrapper">
                <span class="first">RETOUR A L'ACCUEIL</span>
                <span class="second">RETOUR A L'ACCUEIL</span>
              </span>
            </Link>
          </div>
          {/* End purchase_button */}
        </div>
      </div>
      {/* End .hero */}
    </div>
  );
};

export default NotFound;
