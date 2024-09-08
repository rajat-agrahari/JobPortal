import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogSign.css";
import { Header, Input, Options, FooterLogin } from "./Components_Form";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <div className="row overflow-x-hidden">
        <div className="container col-sm-12 col-md-6 col-lg-4 shadow vh-100 d-flex justify-content-center align-items-center  bg-body-tertiary border  mt-2">
          <main className="form-signin m-auto ">
            <form>
              <Header
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7S3AdysvTj5sJvKIwlEBpSgPnEtYJSCQhQ&s"
                title="Login"
              />

              <Input type="email" id="floatingMail" title="Email address" />
              <Input type="password" id="floatingPassword" title="Password" />

              <Options opt="option1" title="Student" />
              <Options opt="option2" title="Recruiter" />

              <FooterLogin
                title="Login"
                text="Don't have an account?"
                link="./Signup.jsx"
                anotherPage="Signup"
              />
            </form>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Login;
