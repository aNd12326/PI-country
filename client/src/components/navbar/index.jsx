import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import SearchBar from "../searchBar";
// import nav from "./Navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      // <div>
      //   <nav>
      //     <div>
      //       <Link to="/">
      //         <img src={Logo} alt="logo" width={50} />
      //       </Link>
      //     </div>
      //     <ul>
      //       <Link to="/home">
      //         <li>Home</li>
      //       </Link>
      //       <Link to="/create">
      //         <li>Create Activity</li>
      //       </Link>
      //     </ul>
      //     <SearchBar />
      //   </nav>
      // </div>

      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to="/">
              <img src={Logo} alt="logo" width={50} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <div className="nav-item">
                  <Link to="/home">
                    <li
                      className="nav-link active text-white"
                      aria-current="page"
                    >
                      Home
                    </li>
                  </Link>
                </div>
                <div className="nav-item">
                  <Link to="/create">
                    <li className="nav-link text-white">Create Activity</li>
                  </Link>
                </div>
              </ul>
              <SearchBar />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
