import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import edu from "../media/edu.png";

function Header() {
  return (
    <div className="main-header">
      <nav className="naav">
        <Link to="/" className="logo-main" style={{ cursor: "pointer" }}>
          <img className="log-pic" src={edu} alt="logo" />
        </Link>
        <div className="tog">
          <Link to="donergrant" className="tg1">
            Donors
          </Link>
          <Link to="appligrant" className="tg1">
            Applicants
          </Link>
        </div>
        <div className="btn">
          <select className="bt11" value="How it Works">
            <option value="Orange">How it Works</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>

          <button className="bt11">View Scholarships</button>
          <button className="bt11">Leaders</button>
          <select className="bt11" value="Company">
            <option value="Orange">Company</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
          <button className="bt22-1">Login</button>
          <Link to="/signup" className="bt22-2">
            Join Bold.org
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
