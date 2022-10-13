import React, { useState } from "react";

const Item = ({title, link, github, picture, index}) => {
  const [isHover, setHover] = useState(false);
  
  return (
    <li
      key={index}
      className="gallery_item"
      data-aos={index % 2 === 1 ? "fade-right" : "fade-left"}
      data-aos-duration="1200"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="gallery_item_img" src={picture} alt="screen" />

        {isHover && 
        <div className="gallery_item_description">
          <p>{title}</p>
        </div>
        }
      </a>
    </li>
  );
};

export default Item;
