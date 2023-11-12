import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <div className="nav">
          <div className="nav-dt">
            <div className="logo">
              <span className="F-logo">F</span>F
            </div>
            <div className="nav-list">
              <Link to="/">Home</Link>
              <Link to="/users">Users</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
