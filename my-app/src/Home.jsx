import React from "react";
import { useNavigate } from "react-router-dom";
import AutoType from "./AutoType";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/users");
  };

  return (
    <div className="back">
      <body className="App-body">
        <div>
          <p>FlirtFlow</p>
        </div>
        <div>
          <p className="flirt">
            S<AutoType word="pot Your Date" delay={400} infinite={true} />
          </p>
        </div>
        <div>
          <button className="crt-act" onClick={handleLogin}>
            Get Started
          </button>
        </div>
      </body>
    </div>
  );
}

export default Home;
