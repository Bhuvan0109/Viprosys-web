import React from "react";
import Navbar from "../pages/navbar";
import RightSidebar from "../pages/Rightsidebar"; 
import LeftSidebar from "../pages/leftsidebar";

const SocialNetworking = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row px-4 py-10 md:px-20">
        
        {/* Left Sidebar */}
        <LeftSidebar/>
        {/* Main Content */}
        <div className="w-full md:w-3/5 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Social Networking</h1>
          <p className="text-orange-600 font-semibold mb-4">Viprosoft</p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Social networking has become a vital form of communication in the digital world. 
            Platforms such as Facebook, LinkedIn, and Twitter are now an integral part of everyday life and play 
            a significant role in how people connect, share, and collaborate.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Social platforms are not only used for communication but also by organizations to promote their products, 
            services, and ideas. We at Viprosoft develop custom-built social networking solutions that enhance 
            user engagement, knowledge sharing, and smooth interactions across communities.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Our solutions are tailored to meet specific client needs, providing rich features that foster 
            communication, improve collaboration, and support multilingual environments.
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">
            Key Features of Our Social Networking Solutions:
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
            <li>Integration of Facebook comments into website pages</li>
            <li>Support for multi-lingual environments</li>
            <li>Customizable blogs and forums</li>
            <li>User-specific data availability and control</li>
          </ul>
        </div>

           <RightSidebar />
        
      </div>
    </div>
  );
};

export default SocialNetworking;
