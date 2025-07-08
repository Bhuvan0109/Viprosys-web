// src/components/RightSidebar.js
import React from "react";
import About from "../pages/About"
import Whychoose from "./Whychoose";

const Rightsidebar = () => {
  return (
    <div className="w-full md:w-1/5 mt-10 md:mt-0">
      <div className="bg-gray-100 rounded p-4 mb-4">
        <h2 className="font-bold text-gray-700 mb-2">My Brief</h2>
        <ul className="text-blue-600 space-y-2 list-disc list-inside">
          <li><a href="About">Company Profile</a></li>
          <li><a href="Whychoose">Why Choose Us</a></li>
        </ul>
      </div>

      <div className="bg-orange-100 rounded p-4">
        <h2 className="font-bold text-orange-700 mb-2">Company News</h2>
        <div className="mb-4">
          <p className="text-blue-700 font-semibold">December 31, 2024 – Year End Message</p>
          <p className="text-gray-700 text-sm">
            Viprosoft sends you warm greetings of the season and looks forward to working together on many more occasions.
          </p>
        </div>
        <div>
          <p className="text-blue-700 font-semibold">June 28, 2024 – Fun@Study Launched</p>
          <p className="text-gray-700 text-sm">
            Our education product helps students, colleges, professors, and parents with online study tools and features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar;
