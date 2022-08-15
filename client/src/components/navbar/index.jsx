import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import SearchBar from "../searchBar";
import nav from "./Navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className={nav.hero}>
        <nav>
          <div className={nav.logo}>
            <Link to="/">
              <img src={Logo} alt="logo" width={50} />
            </Link>
          </div>
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/create">
              <li>Create Activity</li>
            </Link>
          </ul>
          <SearchBar />
        </nav>
      </div>
    );
  }
}
