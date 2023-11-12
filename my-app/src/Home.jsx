import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import AutoType from "./AutoType";
import Login from "./Login";

function Home() {
  const backgroundStyle = {
    backgroundImage:
      "url('https://media.istockphoto.com/id/823482492/photo/finding-love-online.jpg?s=612x612&w=0&k=20&c=FP7jQ0nl_RNlEyMXavyR_M1S-t1qU843y0riIXny8-M=')",
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
      <p>FlirtFlow</p>

      <Link to="/auth">
        <button className="crt-act">Get Started</button>
      </Link>
    </div>
  );
}

export default Home;
