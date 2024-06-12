import React from "react";
import "./about.css";
import Project from "../../components/project/Project.jsx";
import Skills from "../../components/skills/Skills";
import projects from "./projects.js";
const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about">
          <div className="a-left">
            <h1 id="about-title">About me,</h1>
            <p className="desc">
              Passionate about front-end web development, specializing in React
              and Next.js frameworks. Currently diving into the exciting world
              of Web3 and blockchain technology. Committed to creating immersive
              and user-friendly experiences. Actively working on leveraging
              blockchain for secure and decentralized applications. Let's
              connect to collaborate on cutting-edge web development and
              blockchain projects.
            </p>
          </div>
          <div className="a-right"></div>
        </div>
        <Skills />

        <div className="project-wrapper">
          <h1 id="projects-h1">Projects</h1>
          <div className="projects">
            {projects.map(
              ({ title, technologies, description, source, image }, id) => {
                return (
                  <Project
                    title={title}
                    description={description}
                    source={source}
                    key={id}
                    image={image}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
