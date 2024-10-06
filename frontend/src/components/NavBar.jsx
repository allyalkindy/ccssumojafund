import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import {IoSettingsOutline} from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger and close icons
import { IoHome } from "react-icons/io5";
import logo from "../assets/logo.jpeg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 border-white border-y-2 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-bold rounded full flex gap-3 items-center">
          <img src={logo} className=" bg-center w-12 h-12 rounded-full" />
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Umoja-Fund
          </span>
        </div>

        {/* Hamburger Menu Button for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Links - hidden on small screens, visible on medium and larger */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="hover:text-indigo-400 flex items-center transition-colors duration-200  lg:text-base xl:text-xl"
          >
            <IoHome className="mr-1" /> Home
          </Link>
          <Link
            to="/admin"
            className="hover:text-indigo-400 flex items-center transition-colors duration-200 lg:text-base xl:text-xl"
          >
            <IoSettingsOutline className="mr-1" /> Admin
          </Link>

          <Link
            to="/login"
            className="hover:text-indigo-400 flex items-center transition-colors duration-200  lg:text-base xl:text-xl"
          >
            <FiLogIn className="mr-1" /> Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-indigo-400 flex items-center transition-colors duration-200  lg:text-base xl:text-xl"
          >
            <AiOutlineUserAdd className="mr-1" /> Signup
          </Link>

          <Link
            to="/join"
            className="hover:text-indigo-400 flex items-center transition-colors duration-200  lg:text-base xl:text-xl"
          >
            <FaUserCircle className="mr-1" /> Join Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu (visible only when isOpen is true) */}
      <div
        className={`md:hidden mt-4 space-y-2 transition-all duration-400 ease-in-out transform ${
          isOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <Link
          to="/"
          className="block text-center hover:text-indigo-400 transition-colors duration-200"
          onClick={toggleMenu}
        >
          <IoHome className="inline mr-1" /> Home
        </Link>
        <Link
          to="/admin"
          className="block text-center hover:text-indigo-400 transition-colors duration-200"
          onClick={toggleMenu}
        >
          <IoSettingsOutline className="inline mr-1" /> Admin
        </Link>
        <Link
          to="/login"
          className="block text-center hover:text-indigo-400 transition-colors duration-200"
          onClick={toggleMenu}
        >
          <FiLogIn className="inline mr-1" /> Login
        </Link>
        <Link
          to="/signup"
          className="block text-center hover:text-indigo-400 transition-colors duration-200"
          onClick={toggleMenu}
        >
          <AiOutlineUserAdd className="inline mr-1" /> Signup
        </Link>

        <Link
          to="/join"
          className="block text-center  hover:text-indigo-400 transition-colors duration-200"
          onClick={toggleMenu}
        >
          <FaUserCircle className="inline mr-1" /> Join Us
        </Link>
      </div>
    </nav>
  );
}
