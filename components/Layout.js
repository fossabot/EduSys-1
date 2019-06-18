import Link from "next/link";

const Layout = props => (
  <div>
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
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className="navbar-menu">
        <a className="navbar-item">Teachers</a>
        <a className="navbar-item">Students</a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary" href="signup">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light" href="/login">Log in</a>
          </div>
        </div>
      </div>
    </nav>
    {props.children}
  </div>
);

export default Layout;
