import React from "react";
import { Link } from "react-router-dom";



const Nav = (props) => {
  return (
    <div>
    <Link to="/">
        Home
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
