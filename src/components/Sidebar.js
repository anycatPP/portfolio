import React from "react";

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mightycoder.svg";
import resume from "../assets/resume.pdf";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:aniket.singh.esc@gmail.com");
  };
  return (
    <div className="sidebar">
      <img
        src="https://avatars.githubusercontent.com/u/64830202?v=4"
        alt="avatar"
        className="sidebar__avatar"
      />
      <div className="sidebar__name">
        Aniket <span>Singh</span>{" "}
      </div>
      <div className="sidebar__item sidebar__title">SWE</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2"></figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/anycatPP">
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Uttar Pradesh, India
        </div>
        <div className="sidebar__item">aniket.singh.esc@gmail.com</div>
        <div className="sidebar__item">8887640704</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </div>
  );
};

export default Sidebar;
