import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LogSign.css";
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
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "",
    profile: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add your signup logic here
    console.log("Signup submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="container col-sm-12 col-md-6 col-lg-4 shadow  d-flex justify-content-center align-items-center full-height bg-body-tertiary mt-3 border">
          <main className="form-signin m-auto ">
            <form onSubmit={handleSubmit}>
              <Header
                src="https://static.vecteezy.com/system/resources/previews/035/727/676/non_2x/3d-account-login-and-password-form-user-authorization-login-authentication-page-sign-up-concept-login-page-with-pencil-3d-rendering-illustration-vector.jpg"
                title="Signup"
              />

              <Input
                type="text"
                id="floatingText"
                title="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />

              <Input
                type="text"
                id="floatingNumber"
                title="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
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
                id="floatingPassword"
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

              <Profile
                title="Profile"
                name="profile"
                value={formData.profile}
                onChange={handleInputChange}
              />

              <FooterLogin
                title="Signup"
                text="Already have an account?"
                link="./Login"
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
