import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGit, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import bgImg from "../../assets/images/spaceline.svg";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <h2 className="contact-me">Contact me</h2>
        <div className="socials">
          <a href="https://www.linkedin.com/in/sharan-kumar-986652258">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sharan-218">
            <FaGithub />
          </a>
          <a href="">
            <FaXTwitter />
          </a>
          <a href="">
            <FaFacebook />
          </a>
        </div>
        <p className="email">
          Email: <strong>yenugulasharan8019@gmail.com</strong>
        </p>
        <img src={bgImg} alt="image" className="bg" />
      </section>
    </>
  );
};

export default Contact;
