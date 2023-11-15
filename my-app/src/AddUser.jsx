import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function AddUser({ onSwitchToSignIn }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    hair_color: "",
    gender: "",
    phone_number: "",
    profile_picture: "",
  });

  const navigate = useNavigate();

  const signingUp = (e) => {
    e.preventDefault();
    const newData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:3000/users", newData)
      .then((response) => response.json())
      .then((res) => {
        console.log("User added successfully:", res);
        // Redirecting to the desired location after successful signup
        navigate("../users");
      })
      .catch((error) => console.error("Error adding user:", error));
  };

  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div id="log-jp" className="pr-data">
      <form onSubmit={signingUp}>
        <div className="pg-log">
          <div className="Htwo">
            <h2>Create Account</h2>
          </div>
          <div className="pg-log">
            <p className="log-jp"> Username: </p>
            <input
              placeholder="Enter your Username"
              className="sign-pt"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <p className="log-jp"> Age: </p>
          <input
            placeholder="Enter your Age"
            className="sign-pt"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p className="log-jp"> Location: </p>
          <input
            placeholder="Enter your Location"
            className="sign-pt"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p className="log-jp"> Hair color: </p>
          <input
            placeholder="Enter your Hair-color"
            className="sign-pt"
            type="text"
            name="hair_color"
            value={formData.hair_color}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p className="log-jp"> Gender: </p>
          <input
            placeholder="Enter your Gender"
            className="sign-pt"
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p className="log-jp"> Phone: </p>
          <input
            placeholder="Enter your Phone number"
            className="sign-pt"
            type="number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p className="log-jp">Picture</p>
          <input
            type="text"
            placeholder="Enter the URL of your profile picture"
            className="sign-pt"
            name="profile_picture"
            value={formData.profile_picture}
            onChange={handleInputChange}
          />
        </div>
        <div className="log-pg">
          <button onClick={signingUp} className="bt-logs" type="submit">
            Sign Up
          </button>
          <button className="bt-logs" onClick={onSwitchToSignIn}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
