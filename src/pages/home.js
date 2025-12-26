import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, School, Phone, Mail, MapPin, ChevronRight, ChevronLeft, Sidebar } from 'lucide-react';

import Edu from '../pages/Edu';
import About from '../pages/About';
import Ecommerce from '../pages/Ecommerce';
import Health from '../pages/Health';
import Realestate from '../pages/Realestate';
import SocialNetworking from './SocialNetworking';
import Travel from '../pages/Travel';
import innovates from './Innovates';
import Careers from '../pages/Careers';
import Ychoose from './Whychoose';

import { Link } from 'react-router-dom';




import checkImage from '../images/kids.jpg';
import digital from '../images/jump.png';
import sport from '../images/football.jpg';
import welcome from '../images/rana 2.png';
import logo from '../images/VIPROSOFT.jpeg'


const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const slides = [
    {
      image: checkImage ,
      title: "Software Development",
      subtitle: "Building high quality solutions for Web development, Software Development, CMS, UI design,Portal Development & Application Services"
    },
    {
      image: digital,
      title: "Our Culture",
      subtitle: "We carefully outline service level requirements, customizing our maintenance process for unique client needs"
    },
    {
      image: sport,
      title: "Technology Staffing solutions",
      subtitle: "We provide Consulting services, Viprosoft clients include software providers, online businesses, Pharmaceutical companies and enterprises"
    }
  ];

  // const newsUpdates = [
  //   "Admissions open for Academic Year 2025-26",
  //   "Special Gifts for Parents who took Admission by April-2025 to 2026",
  //   "Free Summer Camp for Childrens 2025-2026",
  //   "Please visit your New Campus and High Tech Classrooms"
  // ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, isBot: false }]);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "https://wa.me/917416132030",
          isBot: true
        }]);
      }, 1000);
      setCurrentMessage("");

    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/917842209055", "_blank", "noopener noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      {/* <div className="bg-tide text-white py-2"> */}
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          {/* <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone className="h-4 w-4" /> +91 7995799513</span>
            <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> gpsmallapur@gmail.com</span>
          </div> */}
          {/* <div className="flex gap-4">
            <a href="#" className="hover:text-blue-200">Parent Login</a>
            <a href="#" className="hover:text-blue-200">Staff Login</a>
          </div> */}
        {/* </div> */}
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              {/* <School className="h-12 w-12 text-goldenrod" /> */}
              <div>
  
    <img src={logo} alt="viprosoft logo"  className="h-16 w-auto" />
    
    
  
  {/* <p className="text-sm text-gray-600">Affiliated to CBSE, Mallapur-Hyderabad</p> */}
</div>

     </div>
    <nav className="hidden md:block">
    <ul className="flex gap-6 text-gray-700">
    <li><a href="#" className="hover:text-blue-800 cursor-pointer">Home</a></li>

    <li><a href="About"  className="hover:text-blue-800 cursor-pointer">Company</a></li>
    <li className="relative group cursor-pointer">
                
  <a target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-800 inline-block w-full"
  >
    Services
  </a>

  <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
    <li className="px-4 py-2 hover:bg-gray-100">
        
      <a href="Edu">Education</a>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="Ecommerce">E-Commerce</a>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="SocialNetworking">Social Networking</a>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="Health">Health</a>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="Travel">Travel</a>
    </li>
    <li className="px-4 py-2 hover:bg-gray-100">
      <a href="Realestate">Real Estate</a>
    </li>
  </ul>
</li>


                <li className="hover:text-blue-800 cursor-pointer"><a href="Innovates">
               Innovates</a></li>
               <li className="hover:text-blue-800 cursor-pointer"><a href="Careers">
               Carrers</a></li>
            
                {/* <li className="hover:text-blue-800 cursor-pointer">Facilities</li> */}
                <li className="hover:text-blue-800 cursor-pointer">
                <a
            href="tel:+917842209055"
            className="hover:underline text-black-600"
          >
            Contact Us
          </a>
                  </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt="Slider"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-5xl font-bold mb-4">{slides[currentSlide].title}</h2>
              <p className="text-xl">{slides[currentSlide].subtitle}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* News Updates
      <div className="bg-green-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <span className="font-bold whitespace-nowrap">Latest Updates:</span>
            <div className="overflow-hidden">
              <div className="animate-marquee whitespace-nowrap">
                {newsUpdates.map((news, index) => (
                  <span key={index} className="mx-8">• {news}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* News Updates */}
{/* <div className="bg-tide text-white py-4">
  <div className="container mx-auto px-4">
    <div className="flex items-center gap-4 overflow-hidden">
      <span className="font-bold whitespace-nowrap">Latest Updates:</span>
      <div className="overflow-hidden flex-1">
        <div className="flex animate-marquee">
          {newsUpdates.map((news, index) => (
            <span key={index} className="mx-8 whitespace-nowrap">• {news}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div> */}


      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-500 mb-4">Viprosoft </h2>
              <p className="text-gray-600 mb-4">
                With a mission to bridge the growing demand for technology and innovation, Viprosoft stands 
                at the forefront of digital transformation. Headquartered in Bangalore, with branches in Hyderabad, we specialize in consulting,
                 corporate training, and end-to-end technology services across the globe.
Our dynamic work environment, customer-centric focus, and commitment to continuous learning
 help us deliver modern solutions for evolving business needs. We empower organizations by combining 
 cutting-edge technologies with strategic insight.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-500">1000+</h3>
                  <p className="text-gray-600">Clients Served</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-500">95%</h3>
                  <p className="text-gray-600">Client Retention Rate</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-500">20+</h3>
                  <p className="text-gray-600">Skilled Professionals</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-500">Emerging</h3>
                  <p className="text-gray-600">Startup with Fast Growth</p>
                </div>
              </div>
            </div>
            <div>
              <img src={welcome} alt="School Building"  />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-500 mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
 <Card className="transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300 shadow-md">
  <CardContent>
    <h3 className="text-xl font-bold text-blue-500">Education</h3>
    <p className="text-gray-700 mb-4 text-base leading-relaxed">
      
      Education system outlines the backbone of every nation. Technology can play a vital role in streamlining the whole education system. Exploring the technological approach to education, streamlining education process and spiraling acquaintance amongst students, staff, parents and management becomes essential for today’s fast growing educational environment.
    </p>
    <a href="Edu">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
        Read More
      </button>
    </a>
  </CardContent>
</Card>

 <Card className="transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300 shadow-md">
  <CardContent>
    <h3 className="text-xl font-bold text-blue-500">E-Commerce</h3>
    <p className="text-gray-700 mb-4 text-base leading-relaxed">
      
      Today’s World all the online retailers both established and startups are looking for ways to maximize revenue with existing budgets. They also continue to innovate through skillful merchandizing, supply chain partnerships and use of appropriate technology that helps them differentiate themselves from competition.
    </p>
    <a href="Ecommerce">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
        Read More
      </button>
    </a>
  </CardContent>
</Card>



            
  <Card className="transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300 shadow-md">
  <CardContent>
    <h3 className="text-xl font-bold text-blue-500">Social Networking</h3>
    <p className="text-gray-700 mb-4 text-base leading-relaxed">
      
      Social Networking is the new trend of communication in the present world. Community websites like face book, Linked in, Twitter etc., has become a part and parcel of everyday life for a majority. Social networking sites also attract a number of organizations looking to advertise their products and services to the users of these sites.
    </p>
    <a href="Socialnetworking">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
        Read More
      </button>
    </a>
  </CardContent>
</Card>
<Card className="transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300 shadow-md">
  <CardContent>
    <h3 className="text-xl font-bold text-blue-500">Health</h3>
    <p className="text-gray-700 mb-4 text-base leading-relaxed">
      
      Healthcare solutions today are one of the challenges domains that the healthcare industry faces. Some challenges areregulations, business challenges, rising levels of expectations at lower costs etc. These challenges have lifted the bar for solutions providers to provide innovative solutions at very quick pace to keep ahead of competitors in the industry.
    </p>
    <a href="/Health">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
        Read More
      </button>
    </a>
  </CardContent>
</Card>
           
<Card className="transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300 shadow-md">
  <CardContent>
    <h3 className="text-xl font-bold text-blue-500">Travel</h3>
    <p className="text-gray-700 mb-4 text-base leading-relaxed">
      
      Travel industry attracts most of their customers by providing easy access of system. It has become very important for travel companies to provide their clients the ease of booking their holidays very easily. Progresses in technology together with a rapid globalization and competition have driven the Travel & Tourism industry on a path to improve their services. 
    </p>
    <a href="Travel">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
        Read More
      </button>
    </a>
  </CardContent>
</Card>
<Card className="transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300 shadow-md">
  <CardContent>
    <h3 className="text-xl font-bold text-blue-500">Real Estate</h3>
    <p className="text-gray-700 mb-4 text-base leading-relaxed">
      
      Real estate in ancient days, clients use to visit the place before buying the property, now a days Real estate is web enabled, clients are purchasing the property through websites.By attractive web designs real estate vendors are selling the properties and clients accessing 100% of those by searching from the Internet for homes for sale listings and real estate agents.
    </p>
    <a href="Realestate">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
        Read More
      </button>
    </a>
  </CardContent>
</Card>

          </div>
        </div>
      </section>

      {/* Events Gallery */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-goldenrod mb-12">Campus Life</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src={chem}  alt="Event 1" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={kids} alt="Event 2" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={kido} alt="Event 3" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={stu} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={check} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={check1} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={check2} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            <img src={check3} alt="Event 4" className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"/>
            
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p className="flex items-center gap-2 mb-2">
          <MapPin className="h-4 w-4" />
          <a
            // href="https://maps.app.goo.gl/TRvkvhmv8QJ5HjbdA?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-black-600"
          >
            3rd Floor-304,Pavani Anasurya Towers,Tarnaka,Secundrabad
          </a>
        </p>

        <p className="flex items-center gap-2 mb-2">
          <Phone className="h-4 w-4" />
          <a
            href="tel:+917416132030"
            className="hover:underline text-gblack-600"
          >
            +91 7416132030
          </a>
        </p>

        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a
            href="mailto:gpsmallapur@gmail.com"
            className="hover:underline text-black-600"
          >
            viprosoft@gmail.com
          </a>
        </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-200">Home</a></li>
                <li className="hover:text-green-800 cursor-pointer"><a href="Innovates">
                Innovates </a></li>
                <li className="hover:text-green-800 cursor-pointer"><a href="Careers">
                Careers</a></li>
                <li className="hover:text-green-800 cursor-pointer">
                  
                <a
            href="tel:+917416132030"
            className="hover:underline text-black-600" >
            Contact
          </a>
           </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p className="mb-4">Stay updated with our latest news and events.</p>
              <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                Youtube
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                Linkedin
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                Instagram
              </a>
            </div>

            </div>
          </div>
          <div className="border-t border-WHITE-800 mt-8 pt-8 text-center">
            <p>© VIPROSOFT. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
        {!isChatOpen ? (
          <button
            onClick={openWhatsApp} // Changed onClick to openWhatsApp function
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-black"
          >
            <MessageCircle />
          </button>
        ) : (
          <Card className="w-80">
            <div className="bg-goldenrod text-white p-4 rounded-t-lg flex justify-between items-center">
              <span className="text-lg font-bold">Chat with us</span>
              <button onClick={() => setIsChatOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <CardContent className="p-4">
              <div className="h-64 overflow-y-auto mb-4 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg ${
                      msg.isBot
                        ? "bg-gray-100 mr-8"
                        : "bg-goldenrod ml-8 text-white"
                    }`}
                  >
                    {msg.isBot && msg.text.startsWith("https://wa.me/") ? (
                      <a
                        href={msg.text}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {msg.text}
                      </a>
                    ) : (
                      msg.text
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-goldenrod text-white p-2 rounded hover:bg-tide"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
    
  );
};

export default Home;