import React, { useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // For form errors
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before each submission
    try {
      const url = "http://localhost:5000/signup";
      const { data: res } = await axios.post(url, data);
      enqueueSnackbar("Sign up successfully", { variant: "success" });
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // Set the error message to display to the user
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-700 to-blue-900">
        {/* Signup Form */}
        <div className="relative z-10 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Sign Up
          </h2>

          {/* Error Message Section */}
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {/* Full Name Field */}
          <div className="flex items-center border-b-2 border-white text-white mb-4">
            <FaUserAlt className="mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              onChange={handleChange}
              value={data.fullName}
              required
              className="w-full px-2 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border-b-2 border-white text-white mb-4">
            <FaEnvelope className="mr-2" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="w-full px-2 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border-b-2 border-white text-white mb-6 relative">
            <FaLock className="mr-2" />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="w-full px-2 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-2"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible className="text-gray-300" />
              ) : (
                <AiOutlineEye className="text-gray-300" />
              )}
            </button>
          </div>

          {/* Signup Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-300 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-300 hover:text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
