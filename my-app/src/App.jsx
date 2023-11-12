import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";
import Login from "./Login";
import UserData from "./UserData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
