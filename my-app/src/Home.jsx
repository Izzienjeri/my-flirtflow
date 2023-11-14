import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import AutoType from "./AutoType";
import Login from "./Login";

function Home() {
  const backgroundStyle = {
    backgroundImage:
      "url('https://media.istockphoto.com/id/899169388/photo/female-hands-holding-valentines-day-heart-above-wooden-table-top-view-xmas-gift-wrapping.jpg?s=612x612&w=0&k=20&c=rbQeZatYaNyJvZMKTk17QO86W2SVOX1neTIXfcj3csw=')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={backgroundStyle}>
      <p style={{ fontFamily: "'Pacifico', cursive", fontSize: "100px" }}>
        <span>F</span>lirtFlow
      </p>

      <Link to="/auth">
        <button className="crt-act">Find Your Match </button>
      </Link>
    </div>
  );
}

export default Home;
