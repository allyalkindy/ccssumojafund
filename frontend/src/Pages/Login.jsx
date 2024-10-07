import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";
import background from "../assets/background.jpeg";
import { useSnackbar } from "notistack";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://ccssumojafund-1.onrender.com/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);

      enqueueSnackbar("login successfully", { variant: "success" });
      navigate("/user");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-center bg-opacity-100 items-center bg-gradient-to-r from-blue-700 to-blue-900">
        {/* Login Form */}
        <div className="relative z-10 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Login
          </h2>

          {/* Username Field */}
          <div className="flex items-center border-b-2 border-white text-white mb-4">
            <FaUserAlt className="mr-2" />
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

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-300 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-300 hover:text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
