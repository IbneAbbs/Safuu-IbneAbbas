import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DashData } from "./DashData";
const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar sticky-top">
        <Link to="#" className="menu-bars">
          <i className="bi bi-list" onClick={showSidebar} />
        </Link>
        <ul className="header-icons ms-auto">
          <li className="icons-li">
            <i className="bi bi-twitter"></i>
          </li>
          <li className="icons-li">
            <i className="bi bi-discord"></i>
          </li>
          <li className="icons-li">
            <i className="bi bi-send"></i>
          </li>
          <li className="icons-li">
            <i className="bi bi-grid-3x2-gap"></i>
          </li>
        </ul>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Safuu
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/">
              Buy on Bug Swap
            </a>
            <a className="dropdown-item" href="/">
              Add token to Wallet
            </a>
            <a className="dropdown-item" href="/">
              Safuu
            </a>
          </div>
        </div>
        <button type="button" className="btn btn-secondary btn-lg ms-2 me-2">
          Connect Wallet
        </button>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {/* <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
            <i className="bi bi-x"></i>
            </Link>
          </li> */}
          <li>
            <Link>
              <img
                className="img-fluid pt-1"
                src="assets/safuu-logo.png"
                alt=""
                width={120}
              />
            </Link>
          </li>
          {DashData.map((item, index) => {
            return (
              <li key={index} className={item.cname}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="span-text">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
