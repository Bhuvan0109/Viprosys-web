import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-black-600"
              >
                2nd Floor-204, Pavani Anasurya Towers, Tarnaka, Secundrabad
              </a>
            </p>

            <p className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+917842209055" className="hover:underline text-black-600">
                +91 7842209055
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:gpsmallapur@gmail.com" className="hover:underline text-black-600">
                viprosoft@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">Home</a></li>
              <li className="hover:text-green-800 cursor-pointer"><a href="Innovates">Innovates</a></li>
              <li className="hover:text-green-800 cursor-pointer"><a href="Careers">Careers</a></li>
              <li className="hover:text-green-800 cursor-pointer">
                <a href="tel:+917995799513" className="hover:underline text-black-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">Youtube</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">Linkedin</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center">
          <p>© VIPROSOFT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
