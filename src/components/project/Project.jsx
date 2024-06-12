import React from "react";
import "./project.css";
import LazyLoad from "react-lazyload";
const Project = ({ image, title, source, description }) => {
  return (
    <div className="projectCard">
      <div className="top">
        <LazyLoad
          height="100%"
          offset={100}
          placeholder={<p className="loading-placeholder">Loading...</p>}
        >
          <img src={image} alt="project image" />
        </LazyLoad>
      </div>
      <div className="bottom">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
          className="project-source"
        >
          source
        </a>
      </div>
    </div>
  );
};

export default Project;
