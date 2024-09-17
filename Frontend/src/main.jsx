import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import JobDetails from "./component/JobDetails.jsx";
import Job from "./component/Job.jsx";
import Login from "./component/LogSignup/Login.jsx";
import Signup from "./component/LogSignup/Signup.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/jobdetails",
    element: <JobDetails />,
  },
  {
    path: "/jobs",
    element: <Job />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Signup",
    element: <Signup />,
  },
  {
    path: "Jobs",
    element: <Job />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
