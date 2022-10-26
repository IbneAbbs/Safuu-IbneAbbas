import React,{useState} from "react";
import { Link } from "react-router-dom";
import { DashData } from "./DashData";
const Header = () => {

const [sidebar, setSidebar] = useState(false);

const showSidebar=()=>setSidebar(!sidebar);

    return (
    <div className="navbar-mainn">
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <i class="bi bi-list" onClick={showSidebar} />
        </Link>
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
              <img className="img-fluid pt-1" src="assets/safuu-logo.png" alt="" width={120} />
            </Link>
          </li>
          {
            DashData.map((item, index)=>{
              return (
                <li key={index} className={item.cname}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="span-text">{item.title}</span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  );
};

export default Header;
