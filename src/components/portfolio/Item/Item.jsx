import React, { useState } from "react";

const Item = ({title, link, github, description, picture, index}) => {
  const [isHover, setHover] = useState(false);
  
  return (
    <li
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-duration="1200"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a className="gallery_item" href={link} target="_blank" rel="noopener noreferrer">
        <img className="gallery_item_img" src={picture} alt="screen" />

      {isHover && 
      <div className="gallery_item_description">
        <h2>{title}</h2>
            <p>{description}</p>
        {/* <p className="gallery_item_description_github_link" href={github}>Accéder au repo</p> */}
      </div>
      }
      </a>
    </li>
  );
};

export default Item;
