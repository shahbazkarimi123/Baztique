import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://192.168.1.26:8000"; // replace with your backend URL

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    user_name: "",
    password: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    office_address: "",
    home_address: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, formData);
    setMessage("Signup successful!");
    console.log(response.data);
  } catch (error) {
    console.error(error);
    setMessage("Signup failed. Please try again.");
  }
};

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "2rem" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Username*</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Office Address</label>
          <input
            type="text"
            name="office_address"
            value={formData.office_address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Home Address</label>
          <input
            type="text"
            name="home_address"
            value={formData.home_address}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;