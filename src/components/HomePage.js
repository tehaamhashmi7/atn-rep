import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CommonContext from "../context/CommonContext";

function HomePage() {
  const context = useContext(CommonContext);
  

  return (
    <>
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1>
              <i className="fa-solid fa-graduation-cap"></i>
            </h1>
            <Link to={"/student/login"}>
              <h3>Continue as Student</h3>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1>
              <i className="fa-solid fa-person-chalkboard"></i>
            </h1>
            <Link to={"/teacher/login"}>
              <h3>Continue as Teacher</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
