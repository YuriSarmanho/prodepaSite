import React from "react";
import "./index.css";

function LinksSection(props) {
  return (
    <ul className="linksSection-ul">
      <li className="linksSection-li">
        <i></i>
        <a href="#" className="linksSection-a">
          {props.children}
        </a>
      </li>
    </ul>
  );
}

export default LinksSection;
