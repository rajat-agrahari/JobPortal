import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const JObValue = (props) => {
  return (
    <>
      <h6 className="mb-1 mt-3">
        <i className={`${props.className} bi me-1`}></i>
        {props.name}
      </h6>
      <span className="badge rounded text-bg-success ms-3">
        {props.content}
      </span>
    </>
  );
};
export default JObValue;
