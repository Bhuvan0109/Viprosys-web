import React from "react";
import Navbar from "../pages/navbar";
import RightSidebar from "../pages/Rightsidebar"; 
import LeftSidebar from "../pages/leftsidebar";

const Health = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row px-4 py-10 md:px-20">
        {/* Left Sidebar */}
        <LeftSidebar/>

        {/* Main Content */}
        <div className="w-full md:w-3/5 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Health Care</h1>
          <p className="text-orange-600 font-semibold mb-4">Viprosoft</p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Healthcare solutions today are among the most challenging domains. With regulatory changes, rising expectations,
            and cost pressures, providers must deliver innovative solutions at a rapid pace to remain competitive.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            At Viprosoft, we design and implement healthcare systems that anticipate market demands. 
            Our goal is to help clients deliver reliable, scalable, and maintainable solutions — on time and on budget.
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            We develop innovative solutions in the healthcare space, including:
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
            <li>Pharmacy</li>
            <li>Out Patients</li>
            <li>Inpatients</li>
            <li>Wards Management</li>
            <li>Roster Management</li>
            <li>Billing</li>
            <li>Blood Bank</li>
            <li>Appointment Scheduling</li>
            <li>Electronic Medical Records</li>
            <li>Employee Management</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            Our healthcare domain expertise focuses on:
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Data accuracy, reliability, and security</li>
            <li>Secure access and authentication</li>
            <li>Highly effective user interfaces</li>
            <li>Biometric data collection</li>
            <li>Tracking and implementation of industry standards</li>
          </ul>
        </div>

        {/* Right Sidebar */}
        <RightSidebar/>
      </div>
    </div>
  );
};

export default Health;
