import React from "react";
import logo from "../../assets/logo.png";
import ButtonLink from "../ButtonLink";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Coloquei o logo nessa merda" />
      </a>

      <ButtonLink href="/new" className="ButtonLink">
        TESTE
      </ButtonLink>
    </nav>
  );
}

export default Menu;
