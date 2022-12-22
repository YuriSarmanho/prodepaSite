import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "./index.css"
function HamburguerMenu() {
  return (
    <button className="hamburguerMenu-button">
      <a href="#" className="hamburguerMenu"><HiOutlineMenu/></a>
    </button>
  );
}

export default HamburguerMenu;