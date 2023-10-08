import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData);
      console.log(response.data.token);
      // Redirect upon successful login
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}
