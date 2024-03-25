import React from "react";
import "./home.css";
import Navbar from "../../components/nav/Navbar";
import About from "../about/About.jsx";
import Contact from "../contact/Contact";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <Navbar />
        <motion.div
          className="abstract"
          initial={{
            opacity: 0,
            animationDelay: 0.2,
          }}
          animate={{
            opacity: 1,
            animationDirection: "linear",
            animationDuration: 10,
          }}
        >
          <p className="secondary-title">Hello I'm</p>
          <h1 id="name">
            <strong>Sharan Kumar</strong>
          </h1>
          <p id="st">
            <strong>
              Front-End Developer | React & React Native | Blockchain
            </strong>
          </p>
        </motion.div>
      </section>
      <About />
      <Contact />
    </>
  );
};

export default Home;
