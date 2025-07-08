import React from "react";
import Navbar from "../pages/navbar";
import Rightsidebar from "./Rightsidebar";
import LeftSidebar from "../pages/leftsidebar";


const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row px-4 py-10 md:px-20">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
         <div className="w-full md:w-3/5 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-orange-600 mb-6">Careers With Us</h1>
          
          <p className="text-gray-800 mb-4">
            <strong>Viprosys</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Our unique company principle is based upon mentoring, retention, and strengthening of our employees whom we consider our most valuable asset. 
            We make our workforce believe in their capabilities and respect their independent thoughts. 
            We believe in providing them constant inspiration and support to excel in their own fields and come out with innovative ideas 
            that would make them as well as the organization ahead of others.
          </p>

          <p className="text-gray-700 mb-4">
            We believe in developing an energetic team of committed professionals who will infuse vibrant ideas and will introduce 
            cutting edge technology into the company’s intellectual base. The company is always on the search for competent team players 
            who will be contributing to the business growth.
          </p>

          <p className="text-gray-700 mb-4">
            We invite professionals who can work on small and large projects, independently or as a team player. 
            They should be dedicated and motivated to work for corporate clients maintaining quality and commitment. 
            They should be open to suggestions on improvements and eager to embrace new technologies for upgrading their skills.
          </p>

          <div className="text-gray-800 font-semibold mt-6 mb-2">
            We are currently offering opportunities for the following positions:
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li><em>Java Experts</em> — 2+ Years Experience</li>
          </ul>

          {/* <p className="text-blue-700 mt-6">
            For more information, visit <a href="#" className="underline">Viprosys Careers</a>
          </p> */}
        </div>

        {/* Right Sidebar */}
        <Rightsidebar/>

      </div>
    </div>
  );
};

export default Careers;
