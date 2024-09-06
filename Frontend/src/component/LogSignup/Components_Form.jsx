import React from "react";

export function Header(props) {
  return (
    <>
      <img
        className="mb-4 "
        src={props.src}
        alt={props.title}
        width="90"
        height="75"
      />
      <h1 className="h3 mb-3 fw-bold text-primary">Please {props.title}</h1>
    </>
  );
}

export function Input(props) {
  return (
    <div className="form-floating my-2">
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.title}
      />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  );
}

export function Options(props) {
  return (
    <>
      <div className="form-check-inline form-check my-3">
        <input
          className="form-check-input"
          type="radio"
          name="options"
          id={props.opt}
          value={props.opt}
        />
        <label className="form-check-label" htmlFor={props.opt}>
          {props.title}
        </label>
      </div>
    </>
  );
}
export function Profile(props) {
  return (
    <>
      <div className="input-group mb-4">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
        >
          {props.title}
        </button>
      </div>
    </>
  );
}
export function FooterLogin(props) {
  return (
    <>
      <button className="btn btn-primary w-100 py-2" type="submit">
        {props.title}
      </button>
      <p className="text-center ">
        {props.text} <a href={props.link}>{props.anotherPage}</a>
      </p>
    </>
  );
}
