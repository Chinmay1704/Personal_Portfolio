import React from "react";
import "../components/Project-Descr/ProjectDes.css";
import WeatherApp from "../components/media/weather_app.png";
import Ecommerce from "../components/media/ecommerce.png";
import Makaan from "../components/media/makaan.png";
import TodoList from "../components/media/Todo_list.png";
import CafeWebsite from "../components/media/Cafe_website.png";

function ProjectDes() {
  return (
    <>
      <main>
        <section className="project-section container-fluid">
          <div className="container">
            <div className="project-heading row">
              <span className="H1-U">More Projects</span>

              <p className="Para-M">
                I had pleasure of working on these Awesome Projects.
              </p>
            </div>

            <div className="project-content row">
              {/* Card-1 started */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 d-flex">
                    <img
                      src={WeatherApp}
                      className="img rounded-start"
                      alt="Weather App"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mx-4">
                      <h5 className="card-title H2-U">Weather App using ReactJs</h5>
                      <p className="card-text Para-U">
                        A React weather app fetches data from an API, displaying
                        real-time weather information with dynamic updates.
                      </p>

                      <a
                        className="card-links Para-U"
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Weather app repo
                      </a>

                      <div className="card-tech-stack">
                        <button type="button" className="btn btn-sm">
                          HTML
                        </button>
                        <button type="button" className="btn btn-sm">
                          CSS
                        </button>
                        <button type="button" className="btn btn-sm">
                          JS
                        </button>
                        <button type="button" className="btn btn-sm">
                          REACT
                        </button>
                        <button type="button" className="btn btn-sm">
                          API
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card-1 Ended */}

              {/* Card-2 started */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 d-flex">
                    <img
                      src={Ecommerce}
                      className="img rounded-start"
                      alt="E-commerce website"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mx-4">
                      <h5 className="card-title H2-U">MyStyle E-store</h5>
                      <p className="card-text Para-U">
                        A minimalist React eCommerce site with 3 tabs showcasing
                        products, cart functionality, and order confirmation.
                      </p>

                      <a
                        className="card-links Para-U"
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        MyStyle E-store repo
                      </a>

                      <div className="card-tech-stack">
                        <button type="button" className="btn btn-sm">
                          HTML
                        </button>
                        <button type="button" className="btn btn-sm">
                          CSS
                        </button>
                        <button type="button" className="btn btn-sm">
                          JS
                        </button>
                        <button type="button" className="btn btn-sm">
                          REACT
                        </button>
                        <button type="button" className="btn btn-sm">
                          API
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card-2 Ended */}

              {/* Card-3 started */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 d-flex">
                    <img
                      src={Makaan}
                      className="img rounded-start"
                      alt="Weather App"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mx-4">
                      <h5 className="card-title H2-U">ApnaMakaan Website</h5>
                      <p className="card-text Para-U">
                        A minimalist real estate website crafted with HTML, CSS,
                        and Bootstrap, offering seamless property browsing and
                        elegant design.
                      </p>

                      <a
                        className="card-links Para-U"
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        ApnaMakaan Website repo
                      </a>

                      <div className="card-tech-stack">
                        <button type="button" className="btn btn-sm">
                          HTML
                        </button>
                        <button type="button" className="btn btn-sm">
                          CSS
                        </button>
                        <button type="button" className="btn btn-sm">
                          Bootstrap
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card-3 Ended */}

              {/* Card-4 started */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 d-flex">
                    <img
                      src={TodoList}
                      className="img rounded-start"
                      alt="Todo list App"
                      style={{ background: "white" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mx-4">
                      <h5 className="card-title H2-U">To-do list website</h5>
                      <p className="card-text Para-U">
                        Create tasks effortlessly with this simple HTML, CSS, JS
                        and Bootstrap to-do list website, offering intuitive
                        design and easy task management.
                      </p>

                      <a
                        className="card-links Para-U"
                        href="https://github.com/Chinmay1704/Full_Satck_Development/tree/main/To%20Do%20List"
                        target="_blank"
                        rel="noreferrer"
                      >
                        To-do list repo
                      </a>

                      <div className="card-tech-stack">
                        <button type="button" className="btn btn-sm">
                          HTML
                        </button>
                        <button type="button" className="btn btn-sm">
                          CSS
                        </button>
                        <button type="button" className="btn btn-sm">
                          JS
                        </button>
                        <button type="button" className="btn btn-sm">
                          Bootstrap
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card-4 Ended */}

              {/* Card-5 started */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4 d-flex">
                    <img
                      src={CafeWebsite}
                      className="img rounded-start"
                      alt="Cafe website"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body mx-4">
                      <h5 className="card-title H2-U">Cafe Webite</h5>
                      <p className="card-text Para-U">
                        Experience the charm of our cafe website, beautifully
                        crafted with HTML, CSS, and JS, offering delightful
                        menus and a cozy ambiance.
                      </p>

                      <a
                        className="card-links Para-U"
                        href="https://github.com/Chinmay1704/Cafe-Website"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Cafe Webite repo
                      </a>

                      <div className="card-tech-stack">
                        <button type="button" className="btn btn-sm">
                          HTML
                        </button>
                        <button type="button" className="btn btn-sm">
                          CSS
                        </button>
                        <button type="button" className="btn btn-sm">
                          JS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card-5 Ended */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProjectDes;
