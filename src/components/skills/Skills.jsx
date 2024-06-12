import React from "react";
import "./skills.css";
import css from "../../assets/icons/icondPfCSS3.svg";
import C from "../../assets/icons/icondPfC Programming.svg";
import Html from "../../assets/icons/icondPfHtml 5.svg";
import java from "../../assets/icons/icondPfJava.svg";
import js from "../../assets/icons/icondPfJavascript.svg";
import python from "../../assets/icons/icondPfPython.svg";
import react from "../../assets/icons/icondPfReact.svg";
import solidity from "../../assets/icons/icondPfSolidity.svg";
import exp from "../../assets/icons/icondPfExpress Js.svg";
import tailwindcss from "../../assets/icons/Tailwind CSS.svg";
import eth from "../../assets/icons/Ethereum.svg";
import mdb from "../../assets/icons/Mongodb.svg";
import firebase from "../../assets/icons/Firebase.svg";
const Skills = () => {
  return (
    <>
      <div className="skills-card" id="skills">
        <h2 id="skills">Skills</h2>
        <div className="lang icons">
          <div className="front-end">
            <img src={Html} alt="icon" />
            <img src={css} alt="icon" />
            <img src={js} alt="icon" />
          </div>
          <div className="pl">
            <img src={python} alt="icon" />
            <img src={solidity} alt="icon" />
            <img src={C} alt="icon" />
            <img src={java} alt="icon" />
            <img src={mdb} alt="icon" />
            <img src={eth} alt="icon" />
          </div>
        </div>
        <h2 style={{ margin: "1rem auto", textAlign: "center" }}>
          Frameworks and Libraries
        </h2>
        <div className="frame-works icons">
          <img src={react} alt="icon" />
          <img src={exp} alt="icon" />
          <img src={tailwindcss} alt="icon" />
          <img src={firebase} alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Skills;
