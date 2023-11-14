import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <div>
      <header>
        <div className="nav">
          <div className="nav-dt">
            <div className="logo">
              <span className="logo">FlirtFlow</span>
            </div>
            <div className="nav-list">
              <Link className="link-button" to="/">
                <button>Home</button>
              </Link>
              <Link className="link-button" to="/login">
                <button>Login</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
