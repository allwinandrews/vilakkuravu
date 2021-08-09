import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
      <div className="container">
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <NavLink
                to="/"
                className="nav-link"
                // activeClassName={classes.active}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <NavLink
                to="/category/men"
                className="nav-link"
                // activeClassName={classes.active}
              >
                Men
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/category/women"
                className="nav-link"
                // activeClassName={classes.active}
              >
                Women
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/category/kids"
                className="nav-link"
                // activeClassName={classes.active}
              >
                Kids
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                More
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item">Foods and Drink</a>
                <a className="dropdown-item">Home interior</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">Category 1</a>
                <a className="dropdown-item">Category 2</a>
                <a className="dropdown-item">Category 3</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
