import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    let currentRoute = window.location.href;
    if (currentRoute.endsWith("/")) {
      setActive("About");
    } else if (currentRoute.endsWith("/project")) {
      setActive("Project");
    } else if (currentRoute.endsWith("/resume")) {
      setActive("Resume");
    }
  }, [active]);
  return (
    <div className="nav">
      <div>
        <div className="nav__item__ active">{active}</div>
      </div>
      <div className="nav__item">
        <Link to="/">
          {active !== "About" ? (
            <div className="nav__items" onClick={() => setActive("About")}>
              About
            </div>
          ) : (
            ""
          )}
        </Link>
        <Link to="/project">
          {active !== "Project" ? (
            <div className="nav__items " onClick={() => setActive("Project")}>
              Project
            </div>
          ) : (
            ""
          )}
        </Link>
        <Link to="/resume">
          {active !== "Resume" ? (
            <div className="nav__items" onClick={() => setActive("Resume")}>
              Resume
            </div>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
