import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.username === form.username)) {
      alert("Username already exists!");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup Successful!");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 "  style={{ backgroundColor: "rgb(187, 243, 255)" }}>
      <div className="card p-4 shadow-lg custom-card">
        <h2 className="text-center mb-4 text-primary fw-bold">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="form-control custom-input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="form-control custom-input"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 custom-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
