import React from "react";
import "./navbar.css";
import Registration from "./Registration";

function Navbar() {
  return (
    <header>
      <nav className="main-nav">
        <input type="checkbox" id="check" />
        <label for="check" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <a href="index.html" className="nav-brand">
          Basket
        </a>
        <ul className="navlinks">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-user-plus"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
