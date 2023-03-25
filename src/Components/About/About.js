import React, { useEffect } from "react";
import "../About/About.css";
import me from "../../assets/me-about.webp";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import graduate from "../../assets/graduate.svg";
import cvsvg from "../../assets/cvsvg.svg";
import click from "../../assets/click-me.svg";
import cv from "../../assets/cv.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="section">
          <div className="underphoto"></div>
          <img src={me} alt="photo-of-me"></img>
        </div>
      </div>
      <div className="about-right">
        <div className="about-right-container">
          <h2 className="aboutme">About me.</h2>
          <div className="description">
            <>
              - Fourth year student at the Technical University of Cluj-Napoca
            </>
            <img src={graduate} alt="graduate" className="links"></img>
          </div>
          <a download="" href={cv} className="button-cv">
            <h2>Download CV</h2> <img src={cvsvg} alt="cv.svg" className="links"></img>
          </a>
          <div className="links-container">
            <a
              href="https://www.instagram.com/brujan_/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="ig.svg" className="links"></img>
            </a>
            <a
              href="https://www.linkedin.com/in/brujan/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin.svg" className="links"></img>
            </a>
            <a
              href="https://github.com/brujan75"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github.svg" className="links"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
