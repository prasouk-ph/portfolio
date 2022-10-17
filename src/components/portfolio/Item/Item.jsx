import React, { useState } from "react";

const Item = ({title, link, github, description, picture}) => {
  const [isHover, setHover] = useState(true);

  function handleOnClick() {
    window.open(github, '_blank')
  }
  
  return (
    <li
      data-aos="fade-left"
      data-aos-duration="1200"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a className="gallery_item" href={link} target="_blank" rel="noopener noreferrer">
        <img className="gallery_item_img" src={picture} alt="screen" />

        {isHover && 
        <div className="gallery_item_description">
          <h2 className="gallery_item_description_title" data-aos="fade-left" data-aos-duration="1000">{title}</h2>
          <p data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">{description}</p>
          <p className="gallery_item_description_github_link" onClick={handleOnClick} data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">Accéder au repo</p>
        </div>
        }
      </a>
    </li>
  );
};

export default Item;
