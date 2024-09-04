import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <>
      <div className="card text-center mt-5 mx-auto border-0">
        <div
          className={`${style.heroHead} card-header mx-auto mt-5 rounded-pill px-3  font-medium`}
        >
          No. 1 Job Pulse Website
        </div>
        <div className="card-body">
          <h1 className="card-title fw-bolder">
            Search, Apply & <br />
            Get Your <span>Dream Jobs</span>
          </h1>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <div
            className={`${style.searchJob} input-group  shadow-lg border border-gray-100 pl-3 rounded-pill items-center mx-auto `}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Find Your Dream Job"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className={`${style.searchBtn} btn `}
              type="button"
              id="button-addon2"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
      <h2 className={style.jobHeading}>
        <span>Latest & Top&nbsp;</span>Job Openings
      </h2>
    </>
  );
};
export default HeroSection;
