import React from "react";
import Navbar from "../pages/navbar";
import RightSidebar from "../pages/Rightsidebar";
import LeftSidebar from "../pages/leftsidebar";
import Footer from "./Footer";

const Realestate = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row px-4 py-10 md:px-20">
        
        {/* ✅ Left Sidebar */}
        <LeftSidebar/>

        {/* ✅ Main Content */}
        <div className="w-full md:w-3/5 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Real Estate</h1>
          <p className="text-orange-600 font-semibold mb-4">Viprosoft</p>

          <p className="text-gray-800 leading-relaxed mb-4">
            In the past, buyers would visit properties before making decisions. Now, real estate is web-enabled — clients purchase directly through websites. Attractive site designs help vendors sell properties while enabling clients to access listings and agents online.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            At Viprosoft, we create customized websites for real estate companies, brokers, and agents, providing maximum Internet marketing exposure. Our services help clients stay ahead in this highly competitive industry.
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Our Key Functional Areas:</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
            <li>Advanced custom search features</li>
            <li>Easy registration for buyers and sellers</li>
            <li>Google Maps integration</li>
            <li>Social media integration</li>
            <li>Photo and video gallery uploads</li>
            <li>Secure payment gateways</li>
          </ul>
        </div>

        {/* ✅ Right Sidebar */}
        <RightSidebar />
      </div>
      <Footer/>
    </div>
  );
};

export default Realestate;
