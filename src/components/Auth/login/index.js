import React, { useState } from "react";
import { API, setToken } from "../../../config/api";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.post("/login", form, config);
      setToken(response.data.data.token);

      localStorage.setItem("token", response.data.data.token);

      history.push("/product");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <p>Login</p>
        <form>
          <input
            placeholder="username"
            name="username"
            type="text"
            onChange={handleOnChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={handleOnChange}
          />
          <button onClick={handleOnSubmit}>submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
