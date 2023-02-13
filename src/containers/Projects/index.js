import React from "react";
import "./style.css";

function Projects(props) {
  return <projects className="fill-area-content flexbox-item-grow project-container">{props.children}</projects>;
}

export default Projects;
