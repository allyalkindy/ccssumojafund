import React from "react";
import { FaHandsHelping, FaHeart, FaPeopleArrows } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdGroup } from "react-icons/md";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-blue-700 to-blue-900 text-white flex flex-col">
        <header id="aboutHeader" className="py-10 text-center">
          <h1 className="text-4xl font-bold">Who We Are ?</h1>
          <p className="mt-2 text-lg">
            We are dedicated to help those in need through collective
            contributions.
          </p>
        </header>

        <section className="flex flex-col md:flex-row justify-between gap-6 items-center px-5 md:px-20 py-10">
          <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-20 rounded-lg shadow-lg text-center">
            <FaHandsHelping className="text-6xl mb-4" />{" "}
            {/* Increased icon size */}
            <h2 className="text-3xl font-semibold">Our Mission</h2>{" "}
            {/* Increased heading size */}
            <p className="mt-2 text-lg">
              To provide essential support and resources to underprivileged
              communities through donations and volunteering.
            </p>
          </div>

          <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-20 rounded-lg shadow-lg text-center">
            <FaHeart className="text-6xl mb-4" /> {/* Increased icon size */}
            <h2 className="text-3xl font-semibold">Our Vision</h2>{" "}
            {/* Increased heading size */}
            <p className="mt-2 text-lg">
              A world where everyone has access to basic needs and opportunities
              to thrive.
            </p>
          </div>

          {/* Keeping these cards on the next row, for responsiveness */}
          <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-20 rounded-lg shadow-lg text-center">
            <MdGroup className="text-6xl mb-4" /> {/* Increased icon size */}
            <h2 className="text-3xl font-semibold">Join Us</h2>{" "}
            {/* Increased heading size */}
            <p className="mt-2 text-lg">
              Be a part of our community and help us make a difference in the
              lives of those in need.
            </p>
            <Link
              to="/join"
              className="bg-gradient-to-r from-blue-700 to-blue-900 text-white hover:opacity-80 px-4 py-2 rounded-full flex items-center justify-center mt-4 transition duration-300"
            >
              Join Us <BsArrowRight className="ml-2" />
            </Link>
          </div>

          <div className="w-full md:w-1/2 p-8 bg-white bg-opacity-20 rounded-lg shadow-lg text-center">
            <FaPeopleArrows className="text-6xl mb-4" />{" "}
            {/* Increased icon size */}
            <h2 className="text-3xl font-semibold">Teamwork</h2>{" "}
            {/* Increased heading size */}
            <p className="mt-2 text-lg">
              Together, we can achieve more. Our team collaborates to ensure
              effective impact and outreach.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
