import React from "react";
import Navbar from '../pages/navbar';
import RightSidebar from "../pages/Rightsidebar"; 
import LeftSidebar from "../pages/leftsidebar";

const Edu = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row px-4 py-10 md:px-20">
        
        {/* Left Sidebar */}
        <LeftSidebar/>

        {/* Main Content */}
        <div className="w-full md:w-3/5 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Education</h1>
          <p className="text-orange-600 font-semibold mb-4">Viprosoft</p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Education systems form the backbone of every nation. Technology plays a vital role in streamlining the educational process. By adopting a modern digital approach, we help institutions simplify operations, enhance communication, and ensure quality learning environments for students, staff, parents, and administrators.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Today, institutions need to manage more information than ever before. Without solid infrastructure to share data across departments, miscommunication can lead to inefficiencies and a decline in educational quality. Viprosoft addresses this through seamless, web-based solutions tailored to the educational ecosystem.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Our web interfaces are built with simplicity and scalability in mind. These tools address challenges such as cost, manpower, student-teacher communication, and security. We've prioritized user-friendly interfaces to ensure all stakeholders—students, staff, and parents—can benefit without needing technical skills.
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Our Product – Fun@Study</h2>
          <p className="text-gray-800 mb-4">
            Viprosoft’s education solution suite covers end-to-end services:
          </p>

          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
            <li>Campus Management</li>
            <li>Branch Management</li>
            <li>Student & Staff Management</li>
            <li>Online Examination Management</li>
            <li>Admission Management</li>
            <li>Account & Inventory Management</li>
            <li>Hostel Management</li>
            <li>Library Management System</li>
            <li>Personal Mail Management</li>
            <li>SMS Management</li>
          </ul>

          <p className="text-gray-800">
            We also provide e-learning solutions, student portals, training materials, and consulting in educational tech built using modern stacks like Java and J2EE.
          </p>
        </div>

        {/* Right Sidebar */}
       <RightSidebar/>

      </div>
    </div>
  );
};

export default Edu;
