import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div className=" mt-3">
        <footer
          className="text-center text-white"
          style={{ backgroundColor: "#190603" }}
        >
          {/* Grid container */}
          <div className="container pt-4">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi test-light bi-facebook"></i>
              </a>

              {/* Twitter */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi test-light bi-facebook"></i>
              </a>

              {/* Google */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi test-light bi-google"></i>
              </a>

              {/* Instagram */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi test-light bi-instagram"></i>
              </a>

              {/* Linkedin */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi test-light bi-linkedin"></i>
              </a>
              {/* Github */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi test-light bi-github"></i>
              </a>
            </section>
            {/* Section: Social media */}
          </div>
          {/* Grid container */}

          {/* Copyright */}
          <div
            className="text-center text-light p-3"
            style={{ backgroundColor: "#000" }}
          >
            © 2020 Copyright:&nbsp;
            <a className="text-light text-decoration-none" href="#">
              JobPulse.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
      {/* End of .container */}
    </>
  );
};
export default Footer;
