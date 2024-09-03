import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Header ,Input,Options,Footer} from "./Components_Form";

function Login() {
  return (
    <>
      <div class="container-fluid vh-100 d-flex justify-content-center align-items-center full-height bg-body-tertiary">
        <main class="form-signin m-auto ">
          <form>
            <Header
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7S3AdysvTj5sJvKIwlEBpSgPnEtYJSCQhQ&s"
              title="Login"
            />

            <Input type="email" id="floatingMail" title="Email address" />
            <Input type="password" id="floatingPassword" title="Password" />

            <Options opt="option1" title="Student" />
            <Options opt="option2" title="Recruiter" />

            <Footer
              title="Login"
              text="Don't have an account?"
              link="./Signup.jsx"
              anotherPage="Signup"
            />
          </form>
        </main>
      </div>
    </>
  );
}
export default Login;
