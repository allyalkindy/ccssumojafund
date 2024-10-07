import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle, FaHandsHelping } from "react-icons/fa";
import NavBar from "../components/NavBar";
import balo from "../assets/balo.jpeg";
import logo from "../assets/logo.jpeg";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const userProfile = {
  name: "Ally Mohammed",
  isActive: true,
  paidUpTo: "August 2024",
  image: `${logo}`, // Replace with the actual image URL
};

const ProfilePage = () => {
  const { name, paidUpTo, image } = userProfile;

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("IsAdmin");
    window.location.href = "/login";
  };

  const dateToString = (date) => {
    if (!date) {
      return "N/A"; // Handle cases where the date is null or undefined
    }
    if (typeof date === "string") {
      date = new Date(date);
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const [isActive, setIsActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      axios
        .get(`https://ccssumojafund-1.onrender.com/users/${decoded._id}`)
        .then((response) => {
          setLoggedIn(response.data);
          setIsActive(response.data.isAdmin);
          localStorage.setItem("IsAdmin", response.data.isAdmin);
        })
        .catch((error) => {
          console.log(error);
          console.log("error occured");
        });
    }
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-r from-blue-700 to-blue-900 p-6 flex flex-col items-center justify-center">
        {/* Move the card up */}
        <div className="relative top-[-30px] bg-white bg-opacity-20 p-6 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex flex-col items-center">
            <img
              src={image}
              alt={`${name}'s profile`}
              className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
            />
            <h2 className="text-white text-3xl text-center font-bold mb-2">
              {loggedIn?.fullName}
            </h2>
            <div className="flex items-center text-lg text-white mb-4">
              {isActive ? (
                <FaCheckCircle className="text-green-500 mr-2" />
              ) : (
                <FaTimesCircle className="text-red-500 mr-2" />
              )}
              <span>{isActive ? "Active" : "Inactive"}</span>
            </div>
            <div className="text-white text-lg mb-4">
              Paid Up To:{" "}
              <span className="font-bold">
                {dateToString(loggedIn?.PaidUpTo)}
              </span>
            </div>
          </div>
        </div>

        {/* Motivational message */}
        <div className="mt-8 flex flex-col justify-center items-center space-x-2 text-white text-lg">
          <FaHandsHelping className="text-yellow-400 text-3xl" />
          <span className="text-center mt-3">
            Keep supporting the community! Your contributions matter!
          </span>
        </div>
        <button
          onClick={handleLogOut}
          className="w-1/4 bg-blue-500 mt-8 text-white py-2  rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
