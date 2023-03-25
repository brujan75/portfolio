import React from "react";
import "../Projects/Projects.css";
import site1 from "../../assets/site1.PNG";
import site2 from "../../assets/site2.PNG";
import site3 from "../../assets/site3.PNG";
import site4 from "../../assets/site4.PNG";
import site5 from "../../assets/site5.PNG";
import newtab from "../../assets/newtab.svg";
import github1 from "../../assets/github1.svg";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="cards-container">
        <div className="card">
          <img src={site2} alt="site-photo"/>
          <div className="card-layer">
            <h2 className="title">E-commerce Shop</h2>
            <div className="buttons">
              <a href="https://github.com/brujan75/ecommerce-sanity.io-stripe" target="_blank">
                <h2>code</h2>
                <span>
                  <img src={github1} alt="github.svg" />
                </span>
              </a>
              <a href="https://ecommerce-sanity-stripe-brujan75.vercel.app/" target="_blank">
                <h2>live demo</h2>
                <span>
                  <img src={newtab} alt="newtab.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={site3} alt="site-photo"/>
          <div className="card-layer">
            <h2 className="title">E-commerce Shop</h2>
            <div className="buttons">
              <a href="https://github.com/brujan75/ecommerce-commerce.js-stripe-" target="_blank">
                <h2>code</h2>
                <span>
                  <img src={github1} alt="github.svg" />
                </span>
              </a>
              <a href="https://ecommercebrujan.netlify.app/" target="_blank">
                <h2>live demo</h2>
                <span>
                  <img src={newtab} alt="newtab.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={site1} alt="site-photo" />
          <div className="card-layer">
            <h2 className="title">Massage Chairs</h2>
            <div className="buttons">
              <a
                href="https://github.com/brujan75/MassageChairsWebsite"
                target="_blank"
              >
                <h2>code</h2>
                <span>
                  <img src={github1} alt="github.svg" />
                </span>
              </a>
              <a
                href="https://massage-chairs-clone-brujan75.vercel.app/"
                target="_blank"
              >
                <h2>live demo</h2>
                <span>
                  <img src={newtab} alt="newtab.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={site4} alt="site-photo"/>
          <div className="card-layer">
            <h2 className="title">Login form</h2>
            <div className="buttons">
              <a href="https://github.com/brujan75/LoginForm" target="_blank">
                <h2>code</h2>
                <span>
                  <img src={github1} alt="github.svg" />
                </span>
              </a>
              <a href="https://login-form-brujan75.vercel.app/" target="_blank">
                <h2>live demo</h2>
                <span>
                  <img src={newtab} alt="newtab.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={site5} alt="site-photo"/>
          <div className="card-layer">
            <h2 className="title">Cosmos</h2>
            <div className="buttons">
              <a href="https://github.com/brujan75/CosmosWebsite" target="_blank">
                <h2>code</h2>
                <span>
                  <img src={github1} alt="github.svg" />
                </span>
              </a>
              <a href="https://cosmos-one.vercel.app/" target="_blank">
                <h2>live demo</h2>
                <span>
                  <img src={newtab} alt="newtab.svg" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
