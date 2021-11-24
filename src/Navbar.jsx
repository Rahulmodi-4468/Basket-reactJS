import React from "react";
import "./navbar.css";

function Navbar() {
  const ind = "hello.html";
  return (
    <header>
      <nav className="main-nav">
        <input type="checkbox" id="check" />
        <label for="check" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <a href={ind} className="nav-brand">Basket</a>
        <ul className="navlinks">
          <li>
            <a href={ind} className="active">Home</a>
          </li>
          <li>
            <a href={ind}>About</a>
          </li>
          <li>
            <a href={ind}>Contact</a>
          </li>
          <li>
            <a href={ind}>
              <i class="fas fa-user-plus"></i>
            </a>
          </li>
          <li>
            <a href={ind}>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
