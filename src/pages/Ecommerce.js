import React from "react";
import Navbar from "../pages/navbar";
import RightSidebar from "../pages/Rightsidebar"; 
import LeftSidebar from "../pages/leftsidebar";
import Footer from "./Footer";

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row px-4 py-10 md:px-20">
        
        {/* Left Sidebar */}
        <LeftSidebar/>

        {/* Main Content */}
        <div className="w-full md:w-3/5 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">E-Commerce</h1>
          <p className="text-orange-600 font-semibold mb-4">Viprosoft</p>

          <p className="text-gray-800 leading-relaxed mb-4">
            In today’s world, both established and startup online retailers are looking for ways to maximize revenue while working within limited budgets. They continue to innovate through effective merchandising, smart supply chain partnerships, and technology to stand out from competitors.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Viprosoft specializes in building configurable and customized web applications for e-commerce businesses. These digital solutions help online retailers stay competitive by streamlining their operations and enhancing customer experiences.
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Viprosoft has helped develop online stores by:</h2>

          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
            <li>Developing innovative web storefronts</li>
            <li>Streamlining order flows and integrating inventory feeds</li>
            <li>Enabling seamless data exchange with vendors and partners</li>
            <li>Implementing role-based automated internal workflows</li>
            <li>Building integrated web applications</li>
            <li>Integrating third-party payment gateways like PayPal, EBS, and CCAvenue</li>
          </ul>

          <p className="text-gray-800">
            Viprosoft is committed to driving digital retail innovation by providing scalable, secure, and user-centric solutions for the evolving needs of the e-commerce landscape.
          </p>
        </div>

        {/* Right Sidebar */}
       <RightSidebar/>
      </div>
      <Footer/>
    </div>
  );
};

export default Ecommerce;
