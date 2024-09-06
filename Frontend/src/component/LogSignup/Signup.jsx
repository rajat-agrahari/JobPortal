import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  FooterLogin,
  Header,
  Input,
  Options,
  Profile,
} from "./Components_Form";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
function Signup() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="container w-25 col-sm-12 col-md-6 col-lg-4 shadow vh-100 d-flex justify-content-center align-items-center full-height bg-body-tertiary mt-3 border">
          <main className="form-signin m-auto ">
            <form>
              <Header
                src="https://static.vecteezy.com/system/resources/previews/035/727/676/non_2x/3d-account-login-and-password-form-user-authorization-login-authentication-page-sign-up-concept-login-page-with-pencil-3d-rendering-illustration-vector.jpg"
                title="Signup"
              />

              <Input type="text" id="floatingText" title="Full Name" />
              <Input type="text" id="floatingNumber" title="Phone Number" />
              <Input type="email" id="floatingMail" title="Email address" />
              <Input type="password" id="floatingPassword" title="Password" />

              <Options opt="option1" title="Student" />
              <Options opt="option2" title="Recruiter" />

              <Profile title="Profile" />

              <FooterLogin
                title="Signup"
                text="Already have an account?"
                link="./Login.jsx"
                anotherPage="Login"
              />
            </form>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Signup;
