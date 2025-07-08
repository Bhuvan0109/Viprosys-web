import React from "react";
import Navbar from "../pages/navbar";
import RightSidebar from "../pages/Rightsidebar";
import LeftSidebar from "../pages/leftsidebar";
import Footer from "./Footer";

const Travel = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row px-4 py-10 md:px-20">

        {/* ✅ Left Sidebar */}
        <LeftSidebar/>

        {/* ✅ Main Content */}
        <div className="w-full md:w-3/5 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Travel</h1>
          <p className="text-orange-600 font-semibold mb-4">Viprosoft</p>

          <p className="text-gray-800 leading-relaxed mb-4">
            The travel industry attracts most of its customers by providing easy system access. It’s essential for travel companies to offer clients a simple, reliable holiday booking experience. With rapid globalization and technology improvements, Travel & Tourism is evolving fast—and Viprosoft is helping it grow.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Our solutions help travel providers improve services, stay competitive, and enhance customer satisfaction. We offer digital tools tailored for tour operators and travel agencies.
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            Viprosoft Travel domain experience focuses on:
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
            <li>Customized Travel Portal Solutions</li>
            <li>Dynamic packaging solutions for holidays</li>
            <li>Easy management of travel offers</li>
            <li>Tracking the entire ticketing process</li>
          </ul>
        </div>

        {/* ✅ Right Sidebar */}
        <RightSidebar />
      </div>
      <Footer/>
    </div>
  );
};

export default Travel;
