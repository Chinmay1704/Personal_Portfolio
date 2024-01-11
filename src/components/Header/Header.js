import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="nav-name">
              <i className="fa-solid fa-code Logo-M"></i>
              <span className="Logo-M">Chinmay</span>
            </div>

            <div className="nav-content">
              <ul>
                <li>
                  <a href="/" className="Media-M">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/projects" className="Media-M">
                    Projects
                  </a>
                </li>

                <li>
                  <form className="d-flex rounded-pill" role="search">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn"
                      style={{ margin: "-40px" }}
                      type="submit"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </li>

                <li className="Media-M">
                  <a href="/">
                    <i className="fa-brands fa-instagram"></i>{" "}
                    <span>Instagram</span>
                  </a>
                </li>

                <li className="Media-M">
                  <a
                    href="https://www.linkedin.com/in/chinmay-khanapurkar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>{" "}
                    <span>LinkedIn</span>
                  </a>
                </li>

                <li className="Media-M">
                  <a
                    href="https://github.com/Chinmay1704/Full_Satck_Development"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> <span>Github</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
