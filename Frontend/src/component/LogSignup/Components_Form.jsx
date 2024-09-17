import { React, useState } from "react";

// Please Fix the login signup code-- fix the Usestate Hooks--- In LogSingup folder---
// You have to fix -- Login.jsx
//  signup.jsx
//  component_form.jsx

const [formData, setFormData] = useState({
  email: "",
  password: "",
  role: "",
});

const handleInputChange = (event) => {
  const { name, value } = event.target;
  // const name = event.target.name;
  // const value = event.target.value;
  // setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  console.log(event.target.value);
  console.log(event.target.name);
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  // add your login logic here

  console.log("Login submitted:", formData);
};
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
        value={props.value}
        onChange={(e) => {
          e.target.value;
        }}
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
          value={props.value}
          checked={props.checked} // Update the checked state based on the props.value
          onChange={props.onChange}
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
      <button className="btn btn-primary w-100 py-2">{props.title}</button>
      <p className="text-center ">
        {props.text} <a href={props.link}>{props.anotherPage}</a>
      </p>
    </>
  );
}
