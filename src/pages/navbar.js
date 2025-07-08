import React from 'react';
import { Phone, Mail } from 'lucide-react';
import logo from '../images/VIPROSOFT.jpeg';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="viprosoft logo" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-gray-700">
              <li><a href="/" className="hover:text-blue-800 cursor-pointer">Home</a></li>
              <li><a href="/About" className="hover:text-blue-800 cursor-pointer">Company</a></li>
              <li className="relative group cursor-pointer">
                <a className="hover:text-blue-800 inline-block w-full">Services</a>
                <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
                  <li className="px-4 py-2 hover:bg-gray-100"><a href="/Edu">Education</a></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><a href="/Ecommerce">E-Commerce</a></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><a href="/SocialNetworking">Social Networking</a></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><a href="/Health">Health</a></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><a href="/Travel">Travel</a></li>
                  <li className="px-4 py-2 hover:bg-gray-100"><a href="/Realestate">Real Estate</a></li>
                </ul>
              </li>
              <li className="hover:text-blue-800 cursor-pointer"><a href="/Innovates">Innovates</a></li>
              <li className="hover:text-blue-800 cursor-pointer"><a href="/Careers">Careers</a></li>
              <li className="hover:text-blue-800 cursor-pointer">
                <a href="tel:+917995799513" className="hover:underline text-black-600">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
