import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

export default function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/">
          <img src={Logo} alt="logo" width={50} />
        </Link>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/create">
          <li>Create Activity</li>
        </Link>
      </ul>
    </div>
  );
}
