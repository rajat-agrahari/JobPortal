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
          style={{ backgroundColor: "#f1f1f1" }}
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
                <i className="bi bi-facebook"></i>
              </a>

              {/* Twitter */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi bi-facebook"></i>
              </a>

              {/* Google */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi bi-google"></i>
              </a>

              {/* Instagram */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi bi-instagram"></i>
              </a>

              {/* Linkedin */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              {/* Github */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="bi bi-github"></i>
              </a>
            </section>
            {/* Section: Social media */}
          </div>
          {/* Grid container */}

          {/* Copyright */}
          <div
            className="text-center text-dark p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a className="text-dark text-decoration-none" href="#">
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
