import { React, useState } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./LogSign.css";
import { Header, Input, Options, FooterLogin } from "./Components_Form";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="row overflow-x-hidden mt-3 mb-5">
        <div className="container col-sm-12 col-md-6 col-lg-4 shadow  d-flex justify-content-center align-items-center  bg-body-tertiary border  mt-2">
          <main className="form-signin m-auto ">
            <form onSubmit={handleSubmit}>
              <Header
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7S3AdysvTj5sJvKIwlEBpSgPnEtYJSCQhQ&s"
                title="Login"
              />

              <Input
                type="email"
                id="floatingMail"
                title="Email address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />

              <Input
                type="password"
                id="password"
                title="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />

              <Options
                opt="option1"
                title="Student"
                name="role"
                value="student"
                checked={formData.role === "student"}
                onChange={handleInputChange}
              />
              <Options
                opt="option2"
                title="Recruiter"
                name="role"
                value="recruiter"
                checked={formData.role === "recruiter"}
                onChange={handleInputChange}
              />

              <FooterLogin
                title="Login"
                text="Don't have an account?"
                link="./Signup"
                anotherPage="Signup"
              />
            </form>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
