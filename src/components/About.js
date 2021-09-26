import React, { useState } from "react";
import "./about.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
const About = () => {
  const [active, setActive] = useState("Home");
  const toggle = (index) => {
    setActive(index);
  };

  return (
    <div className="About">
      <div className="item">
        <div
          onClick={() => toggle("Home")}
          className={`items ${active === "Home" ? "active" : ""}`}
        >
          <AiOutlineHome size={26} />
          <span>Home</span>
        </div>
        <div
          onClick={() => toggle("watch")}
          className={`items ${active === "watch" ? "active" : ""}`}
        >
          <span>Watch</span>
        </div>
        <div
          onClick={() => toggle("game")}
          className={`items ${active === "game" ? "active" : ""}`}
        >
          <IoLogoGameControllerB size={26} /> <span>Game</span>
        </div>
      </div>
    </div>
  );
};

export default About;
