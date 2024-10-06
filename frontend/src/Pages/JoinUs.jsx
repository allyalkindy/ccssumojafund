import React from "react";
import { FaWhatsapp, FaUserCircle, FaInfoCircle } from "react-icons/fa";
import balo from "../assets/balo.jpeg";
import yamko from "../assets/yamko.jpeg";
import omar from "../assets/omar.jpeg";
import NavBar from "../components/NavBar";

const leaders = [
  {
    name: "Yassir Yamko",
    position: "Chair Person",
    whatsapp: "+255719327889",
    image: `${yamko}`,
  },
  {
    name: "Omar Ali",
    position: "Accountant",
    whatsapp: "+255620277944",
    image: `${omar}`,
  },
  {
    name: "Ally Mohammed",
    position: "Katibu",
    whatsapp: "+255776885581",
    image: `${balo}`,
  },
];

const JoinUsPage = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-r from-blue-700 to-blue-900 py-12">
        {/* Explanation Section */}
        <div id="explanation" className="text-center text-white mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            
            Join Our Community
          </h1>
          <p className="text-lg flex items-center justify-center">
           
            To become a member of UMOJA Fund, contact our leadership
            profiles below.
          </p>
        </div>

        {/* Leader Profiles */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 px-6">
          {/* Leader Cards */}
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="max-w-xs bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center transform transition hover:scale-105"
            >
              <div className="mb-4">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-6xl text-gray-200 mx-auto" />
                )}
              </div>
              <h2 className="text-2xl text-white font-semibold mb-2">
                {leader.name}
              </h2>
              <p className="text-lg text-white mb-4">{leader.position}</p>
              <a
                href={`https://wa.me/${leader.whatsapp}`}
                className="inline-flex items-center text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-2" />
                Contact on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JoinUsPage;
