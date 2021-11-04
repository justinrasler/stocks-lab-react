import React from "react";
import { Link } from "react-router-dom";



const Nav = (props) => {
  return (
    <div>
    <Link to="/">
        <div className="bannerLink">Home</div>
      </Link>
      <Link to="/stocks">


        Dashboard
      </Link>
      <Link to="/about">
     About
      </Link>
      </div>
  );
};

export default Nav;