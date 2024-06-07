import React from "react";
import "./home.css";
import Navbar from "../../components/nav/Navbar";
import About from "../about/About.jsx";
import Contact from "../contact/Contact";
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section" id="home">
        <div className="abstract">
          <p className="secondary-title">Hello I'm</p>
          <h1 id="name">
            <strong>Sharan Kumar</strong>
          </h1>
          <p id="st">
            <strong>
              Front-End Developer | React & React Native | Blockchain
            </strong>
          </p>
        </div>
      </section>
      <About />
      <Contact />
    </>
  );
};

export default Home;
