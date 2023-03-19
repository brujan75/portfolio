import React from "react";
import "../Intro/Intro.css";
import mouse from "../../assets/mouse.svg";
import click from "../../assets/click-me.svg";
import me from "../../assets/me-intro.png";
import mebg from "../../assets/me-bg.jpeg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="scroll">
        scroll down
        <img src={mouse} alt="" className="mouse"></img>
      </div>
      <div className="info">
        <div className="name">
          <h2 className="">Hi, my name is</h2>
          <h1>Brujan Andrei</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
        </div>

        <div className="person">
          <div className="person-container">
            <img className="person-circle" src={mebg} />
            <img className="person-img" src={me} alt="photo of me ;)" />
          </div>
          <div className="click-me">
            <img src={click} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
