import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState(""); // To store error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send a POST request to the backend for login
      const response = await axios.post("http://localhost:4000/api/auth/login", { email, password });
      
      // If login is successful, you will get the token from the response
      const { token } = response.data;
      localStorage.setItem("token", token); // Save the token in localStorage or a cookie

      console.log("Login successful:", response.data.message);
      // Redirect user or handle successful login logic here

    } catch (error) {
      // If there is an error, display the error message
      setError(error.response ? error.response.data.message : "Server error, try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:border-black focus:outline-none focus:ring"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mt-4 relative">
            <label htmlFor="password" className="block text-sm text-gray-800">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:border-black focus:outline-none focus:ring"
              required
            />
            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-600 hover:text-black"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white bg-black rounded-md hover:bg-gray-600 focus:outline-none focus:ring"
            >
              Login
            </button>
          </div>
        </form>

        {/* Signup Link */}
        <p className="mt-8 text-xs text-center text-gray-900">
          Don't have an account?{" "}
          <a href="/create-user" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
