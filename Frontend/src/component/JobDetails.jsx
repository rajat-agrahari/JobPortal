import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./JobDetails.module.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import React from "react";
import JobValue from "./JobValue";

const JobDetails = () => {
  const jobName = "PHP Web Devloper";
  const loction = "Noida";
  const salary = 35000;
  const desc =
    "Developing and implementing highly-responsive user interface components using React concepts Writing application interface codes using JavaScript following React.js workflowsDeveloping and implementing front-end architecture to support user interface concepts. Adapting interface for modern internet applications Identifying web-based user interactions Writing JavaScript, CSS, and HTML Conducting performance tests, monitoring and improving front-end performance Consulting and coordinating with the design team Providing suppor";
  let posted = "3 Days ago";
  let skills = ["PHP", "MySQL", "SQL"];
  let jobFor = "Fresher";
  let locationType = "WFO";
  let Eduction = "B.Tech/MCA";
  let company = "Cisco Priv. limted";
  let companyImg =
    "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <>
      <Navbar />
      <div className={`${styles.jobContainer} card container w-50 shadow`}>
        <div className="row">
          <div className={` card-body col-md-5 `}>
            <h4 className="card-title mb-0">{jobName}</h4>
            <span>
              <b>Company:&nbsp;</b>
              {company}
            </span>

            <div className="card-text">
              <h5 className="mt-3">Job Details</h5>
              <JobValue
                className="bi-cash-stack"
                name="Salary"
                content={salary}
              />
              <JobValue
                className="bi-geo-alt"
                name="Location"
                content={loction}
              />
              <JobValue
                className="bi-briefcase"
                name="Job For"
                content={jobFor}
              />
              <JobValue
                className="bi-book"
                name="Education"
                content={Eduction}
              />
              <JobValue
                className="bi-geo-lt"
                name="Job Location"
                content={locationType}
              />

              <h6 className="mb-1 mt-3">
                <i className="bi bi-lightbulb me-1"></i>Skills
              </h6>
              <span className="badge rounded text-bg-light">
                <ul>
                  {skills.map((item) => (
                    <li key={item} className="list-style-none text-start my-1 ">
                      {item}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
          </div>
          <div className="col-md-5">
            <img src={companyImg} alt="" className={`${styles.compImg}`} />
          </div>
        </div>
        <hr />
        <div className={` card-body `}>
          <h5 className="card-title">Job description</h5>

          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-body-secondary">{posted}</small>
          </p>
          <button type="button" class="btn btn-primary">
            Apply
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetails;
