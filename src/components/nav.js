import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
    <Link to="/">
        <div className="bannerLink">Home</div>
      </Link>
      <Link to="/stocks">
        <div className="bannerLink">Dashboard</div>
      </Link>
      <Link to="/about">
      <div className="bannerLink">About</div>
      </Link>
      </div>
  );
};

export default Nav;