import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = users.find((u) => u.username === form.username && u.password === form.password);
    if (foundUser) {
      localStorage.setItem("loggedInUser", form.username);
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "rgb(187, 243, 255)" }}>
      <div className="card shadow-lg p-4 rounded" style={{ width: "30rem", backgroundColor: "white" }}>
        <h2 className="text-center mb-4 text-primary">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Username</label>
            <input 
              type="text" 
              name="username" 
              className="form-control" 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-control" 
              onChange={handleChange} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary w-100 fw-bold"
            style={{ transition: "0.3s" }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
