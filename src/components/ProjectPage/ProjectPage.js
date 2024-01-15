import React from "react";
import "./ProjectPage.css";
import WeatherApp from "../media/weather_app.png";
import Ecommerce from "../media/ecommerce.png";
import Makaan from "../media/makaan.png";
import PortfolioImg from "../media/portfolio.png"

function ProjectPage() {
  return (
    <>
      <section className="projects">
        <div className="project-container container-fluid">
          <div className="container">
            <div className="project-heading row">
              <span className="H1-U">Works</span>

              <p className="Para-M">
                I had pleasure of working on these Awesome Projects.
              </p>
            </div>
          </div>

          <div className="project-content row">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride='caousel' data-bs-interval="3000">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>

                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <img
                    src={WeatherApp}
                    className="d-block bg-white mx-auto" 
                    alt="weather app"
                  />
                  <div className="carousel-caption">
                    <h5 className="text-black">Weather App using ReactJs</h5>
                    <p className="text-black">
                    Displays real-time weather using API integration.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={Ecommerce}
                    className="d-block mx-auto"
                    alt="ecommerce website"

                  />
                  <div className="carousel-caption">
                    <h5 className="text-black">MyStyle E-store</h5>
                    <p className="text-black">
                    Minimalist 3-tab E-commerce: Browse, Shop, Checkout.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={Makaan}
                    className="d-block mx-auto"
                    alt="Makaan website"
                  />
                  <div className="carousel-caption">
                    <h5 className="text-black">ApnaMakaan Website</h5>
                    <p className="text-black">
                    Discover your dream home with our premier real estate platform.
                    </p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img
                    src={PortfolioImg}
                    className="d-block mx-auto"
                    alt="More Projects"
                  />
                  <div className="carousel-caption">
                    <h5 className="Bottom-U">Interested in <span style={{color: '#12f7d6'}}>More projects</span>!</h5>
                    <p>
                      <a href="/projects" className="Para-M">Click Here</a>
                    </p>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
