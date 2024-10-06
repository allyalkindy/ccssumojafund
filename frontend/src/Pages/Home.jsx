import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";

import { FiLogIn } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import background from "../assets/background.jpeg";
import logo from "../assets/logo.jpeg";
import balo from "../assets/balo.jpeg";
import { BsArrowRight } from "react-icons/bs";
import NavBar from "../components/NavBar";
import About from "./About";
import Rules from "./Rules";

const HomePage = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        {/* Navbar */}
        <NavBar />

        {/* Main Section */}
        <div className="flex-grow relative">
          <div
            className="absolute inset-0 bg-contain  bg-opacity-100"
            style={{
              backgroundImage: `url(${logo})`,
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div
            id="Wrapper"
            className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 p-8 bg-white bg-opacity-60 rounded-lg shadow-lg "
          >
            <h1 className="text-5xl md:mb-8 text-blue-800 font-bold leading-tight md:text-8xl mb-4">
              Welcome Umoja Fund
            </h1>
            <p className="text-2xl font-bold mb-8 max-w-lg text-blue-600 ">
              Dedicated Students To Help One Another On Sad And Happy Moments
            </p>
            <Link
              to="/login"
              className="bg-gradient-to-r  from-blue-700 to-blue-900  border-white border-2 text-white hover:opacity-80 px-6 py-3 rounded-full flex items-center transition duration-300"
            >
              Log In <BsArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Rules />
      {/* Developer Section */}
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center lg:flex-row lg:text-left">
          <div className="mb-6 lg:mb-0 lg:mr-6">
            <img
              src={balo} // Your actual image path
              alt="Ally Mohammed Said"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">
              Developed by Ally Mohammed Said
            </h3>
            <p className="text-gray-400">
              For any website development needs, feel free to contact me:
            </p>
            <div className="flex justify-center lg:justify-start items-center mt-4">
              <FaUser className="text-blue-500 mr-2" />
              <p className="text-gray-400">Ally Mohammed Said</p>
            </div>
            <div className="flex justify-center lg:justify-start items-center mt-2">
              <FaEnvelope className="text-blue-500 mr-2" />
              <a
                href="mailto:allymohammedsaid126@gmail.com"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                allymohammedsaid126@gmail.com
              </a>
            </div>
            <div className="flex justify-center lg:justify-start items-center mt-2">
              <FaWhatsapp className="text-green-500 mr-2" />
              <a
                href="https://wa.me/255776885581"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                +255 776 885 581
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-4">
          Contact me for your next website project!
        </p>
      </footer>
    </>
  );
};

export default HomePage;
