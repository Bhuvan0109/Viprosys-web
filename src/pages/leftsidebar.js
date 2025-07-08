// src/components/LeftSidebar.js
import React from "react";
import Edu from "../pages/Edu"
import Ecommerce from "../pages/Ecommerce"
import SocialNetworking from "./SocialNetworking";
import Health from "./Health";
import Travel from "./Travel";
import Realestate from "./Realestate";


const LeftSidebar = () => {
  return (
    <div className="w-full md:w-1/5 mb-8 md:mb-0 md:mr-8">
      <h2 className="font-bold text-gray-700 mb-2">Services</h2>
      <ul className="space-y-2 text-blue-600 list-disc list-inside">
        <li><a href="Edu">Education</a></li>
        <li><a href="Ecommerce">E-Commerce</a></li>
        <li><a href="SocialNetworking">Social Networking</a></li>
        <li><a href="Health">Health</a></li>
        <li><a href="Travel">Travel</a></li>
        <li><a href="Realestate">Real-Estate</a></li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
