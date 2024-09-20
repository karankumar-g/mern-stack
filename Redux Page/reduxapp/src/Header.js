import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <NavLink to="/home">Home </NavLink>
      <NavLink to="/contact">Contact </NavLink>
      <NavLink to="/about">About {props.myName} </NavLink>
      <NavLink to="/web">Web Page </NavLink>
      <br></br>
      <h3>props value: {props.currentPage}</h3>
    </div>
  );
}
