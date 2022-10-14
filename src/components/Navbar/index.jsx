import React from "react";
import "./style.scss";
const index = () => {
  return (
    <>
      <nav className="nav">
        <h2 className="nav__brand">Telle.me</h2>
        <h4 className="nav__text">Category</h4>
        <ul className="nav__ul">
          <li className="nav__ul--list">
            <a href="#" className="nav__ul--list-link">
              Collection
            </a>
          </li>
          <li className="nav__ul--list">
            <a href="#" className="nav__ul--list-link">
              News
            </a>
          </li>
          <li className="nav__ul--list">
            <a href="#" className="nav__ul--list-link">
              Discounts
            </a>
          </li>
          <li className="nav__ul--list">
            <a href="#" className="nav__ul--list-link">
              Shop
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default index;
