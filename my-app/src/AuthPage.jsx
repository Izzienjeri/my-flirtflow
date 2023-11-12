import React, { useState } from "react";
import Login from "./Login";
import AddUser from "./AddUser";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login onSwitchToSignUp={toggleForm} />
      ) : (
        <SignupForm onSwitchToSignIn={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
