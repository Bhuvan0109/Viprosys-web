import React from "react";
import Navbar from '../pages/navbar';
import RightSidebar from "../pages/Rightsidebar"; 
import Careers from "./Careers";
import Innovates from "./Innovates";
import Whychoose from "./Whychoose";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-10 grid md:grid-cols-12 gap-8">
        {/* Left Sidebar */}
        <aside className="md:col-span-2 hidden md:block border-r border-gray-200">
          <ul className="space-y-4 text-blue-700 text-sm font-medium">
            <li className="hover:underline cursor-pointer"><a href="#">➤Company Profile</a></li>
            <li className="hover:underline cursor-pointer"><a href="Innovates">➤Innovates</a></li>
            <li className="hover:underline cursor-pointer"><a href="Careers">➤Careers</a></li>
            
            <li className="hover:underline cursor-pointer"><a href="Whychoose">➤Why Choose Us</a></li>
           
            <li className="hover:text-blue-800 cursor-pointer">
                <a
            href="tel:+917842209055"
            className="hover:underline text-black-600"
          >
            ➤Contact Us
          </a>
                  </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-7">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">Company Profile</h1>
          <p className="text-orange-600 font-semibold mb-4">Viprosoft</p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Viprosoft is a growing company specializing in Internet bridging, consulting, corporate training, and technology services. We partner with clients globally to conceptualize and realize technology-driven business transformation initiatives. Our headquarters are in Bangalore with branches in Hyderabad, offering an excellent working environment for our employees.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            We provide end-to-end business solutions that leverage technology. Our solutions serve dynamic environments where business and technology strategies converge.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Our approach focuses on new ways of business by combining IT innovation with adoption. We work with next-gen tech companies to build innovative products and implement smart business strategies tailored for today’s digital world.
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-2">Technology Focus and Advantage</h2>
          <p className="text-gray-800 leading-relaxed">
            As a customer-centric and technology-focused company, we are at the forefront of learning, upgrading, and implementing new technologies. We adapt to emerging tech and development practices by continuously updating our expertise across domains.
          </p>
        </main>

        {/* Right Sidebar */}
        <aside className="md:col-span-3">
          <div className="mb-8">
            <h3 className="text-lg font-semibold border-b border-gray-300 pb-2 mb-2">My Brief</h3>
            <ul className="text-blue-700 text-sm font-medium">
              <li className="hover:underline cursor-pointer">› Company Profile</li>
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
        </aside>
      </div>
    </div>
  );
};

export default About;
