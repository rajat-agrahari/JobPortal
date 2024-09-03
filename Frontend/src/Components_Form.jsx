import React from "react";

export function Header(props){
    return (
      <>
        <img
          class="mb-4 "
          src={props.src}
          alt={props.title}
          width="90"
          height="75"
        />
        <h1 class="h3 mb-3 fw-bold text-primary">Please {props.title}</h1>
      </>
    );
}

export function Input(props){
    return (
      <div class="form-floating my-2">
        <input
          type={props.type}
          class="form-control"
          id={props.id}
          placeholder={props.title}
        />
        <label for={props.id}>{props.title}</label>
      </div>
    );
}

export function Options(props){
    return (<>
        <div class="form-check-inline form-check my-3">
              <input
                class="form-check-input"
                type="radio"
                name="options"
                id={props.opt}
                value={props.opt}
              />
              <label class="form-check-label" for={props.opt}>
                {props.title}
              </label>
            </div>
    </>)
}
export function Profile(props){
  return (
    <>
      <div class="input-group mb-4">
        <input
          type="file"
          class="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
        >
          {props.title}
        </button>
      </div>
    </>
  );
}
export function Footer(props){
    return (
      <>
        <button class="btn btn-primary w-100 py-2" type="submit">
          {props.title}
        </button>
        <p class="text-center ">
          {props.text} <a href={props.link}>{props.anotherPage}</a>
        </p>
        <p class="mt-5 mb-3 text-center text-body-secondary">JobPulse©2024</p>
      </>
    );
}

