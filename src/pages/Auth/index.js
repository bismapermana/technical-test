import React from "react";
import Login from "../../components/Auth/login";
import Register from "../../components/Auth/register";

const Auth = () => {
  return (
    <>
      <div>
        <Register />
        <Login />
      </div>
    </>
  );
};

export default Auth;
