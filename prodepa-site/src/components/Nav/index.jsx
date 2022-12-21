import React from "react";
import "./index.css";

function Nav(props) {
  return (
    <nav className="headerNav">
      <ul className="headerNav-ul">
        <li className="headerNav-li">
          <a href="#" className="headerNav-a">
            Início
          </a>
        </li>
        <li className="headerNav-li">
          <a href="#" className="headerNav-a">
            Institucional
          </a>
        </li>
        <li className="headerNav-li">
          <a href="#" className="headerNav-a">
            Central de atendimento
          </a>
        </li>
        <li className="headerNav-li">
          <a href="#" className="headerNav-a">
            Transparência Pública
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
