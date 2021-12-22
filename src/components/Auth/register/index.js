import React, { useState } from "react";
import { API } from "../../../config/api";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
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

      const response = await API.post("/register", form, config);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <p>Register</p>
        <form>
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={handleOnChange}
          />
          <input
            placeholder="username"
            type="text"
            name="username"
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
    </div>
  );
};

export default Register;
