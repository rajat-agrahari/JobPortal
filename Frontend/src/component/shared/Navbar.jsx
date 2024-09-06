import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid offset-lg-2">
          <a className="navbar-brand fw-700" href="#">
            JobPulse
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Companies
                </a>
              </li>
            </ul>
            <div className="d-flex mx-auto">
              <button
                type="button"
                className={`${styles.loginBtn} btn btn-info mx-2`}
              >
                LogIn
              </button>
              <button type="button" className="btn btn-success">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
