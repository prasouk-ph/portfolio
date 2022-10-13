import React from "react";
import {
  FiLinkedin,
  FiGithub
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/prasouk-p/",
  },
  {
    iconName: <FiGithub />,
    link: "https://github.com/prasouk-ph/"
  },
];
const Social = () => {
  return (
    <ul className="social">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a className="social_icon" href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
