import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface FormData {
  email: string;
  userName: string;
  password: string;
  phoneNumber: string;
  first_name: string;
  lastame: string;
  office_address: string;
  home_address: string;
}

function Signup() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    userName: "",
    password: "",
    phone_number: "",
    first_name: "",
    last_name: "",
    office_address: "",
    home_address: "",
  });

  const [message, setMessage] = useState<string>("");

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Account
        </h2>
        {message && (
          <div className="mb-4 text-center text-red-600 font-semibold">{message}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="text"
            name="user_name"
            placeholder="Username"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="office_address"
            placeholder="Office Address"
            value={formData.office_address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            name="home_address"
            placeholder="Home Address"
            value={formData.home_address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-500 font-semibold hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
