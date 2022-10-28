import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { DashData } from "./DashData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <Button variant="primary" onClick={handleShow}>
        <i className="bi bi-list" />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="ms-auto" closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="nav-menu">
            <ul className="nav-menu-items">
              <li>
                <Link>
                  <img
                    className="img-fluid pt-4"
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
                      <span className="span-text-title">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
