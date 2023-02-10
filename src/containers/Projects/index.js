import React from "react";
import "./style.css";

function Projects(props) {
  return <div className="project-container w-100">{props.children}</div>;
}

export default Projects;
