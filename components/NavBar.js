import React, { Component } from "react";

class NavBar extends Component {
  componentDidMount() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <nav
        className="navbar is-spaced is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h1 className="title is-3">EduSys</h1>
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <a className="navbar-item" href="/teachers">
              Teachers
            </a>
            <a className="navbar-item" href="/students">
              Students
            </a>
            <a className="navbar-item" href="/register">
              Registration
            </a>
          </div>
          
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="signup">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/login">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
