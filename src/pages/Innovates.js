import React from "react";
import Navbar from "../pages/navbar";
import RightSidebar from "../pages/Rightsidebar";
import Web from "../images/Web.jpeg";
import Frame from "../images/Frameworks.webp";
import stack from "../images/stack.jpg"
import About from "./About";
import Careers from "./Careers";
import Whychoose from "./Whychoose";
import Footer from "./Footer";


const Innovates = () => {
  const technologies = [
    {
      name: "PHP",
      description: "A popular open-source scripting language especially suited for web development and server-side logic."
    },
    {
      name: "MySQL",
      
      description: "An open-source relational database used for storing and managing structured data efficiently."
      
    },

    {
      name: "Ruby on Rails",
      description: "A web application framework written in Ruby that follows the MVC pattern and emphasizes convention over configuration."
    },
    {
      name: "Java",
      description: "A versatile, object-oriented programming language widely used in enterprise-level applications and Android development."
    },
    {
      name: "JQuery",
      description: "A lightweight JavaScript library that simplifies HTML document traversal, event handling, and AJAX interactions."
    },
    {
      name: "Ajax",
      description: "A technique for creating fast and dynamic web pages by exchanging small amounts of data with the server asynchronously."
    },
    {
      name: "XML",
      description: "A markup language used to store and transport data in a structured and readable format."
    },
    {
      name: "Spring",
      description: "A powerful Java-based framework used to build scalable and secure enterprise applications."
    },
    {
      name: "Groovy",
      description: "A dynamic programming language that enhances Java with scripting capabilities and concise syntax."
    },
    {
      name: "Grails",
      description: "A web framework based on Groovy and Spring, designed to boost developer productivity."
    },
    {
      name: "Linux",
      description: "An open-source operating system known for stability, scalability, and security in servers and infrastructure."
    },
    {
      name: "Apache",
      description: "A widely-used open-source web server software that delivers web content over the internet."
    },
    {
      name: "MapReduce",
      description: "A programming model for processing large data sets across distributed clusters, often used in Hadoop."
    },
    {
      name: "Hive",
      description: "A data warehouse tool built on top of Hadoop for querying and managing large datasets using SQL-like syntax."
    },
    {
      name: "Cassandra",
      description: "A highly scalable NoSQL database used for handling massive amounts of structured data across many servers."
    },
    {
      name: "HBase",
      description: "A distributed, scalable, big data store that runs on top of Hadoop and supports real-time read/write access."
    },
    {
      name: "Solr",
      description: "An open-source enterprise search platform built on Apache Lucene, used for indexing and full-text search."
    },
    {
      name: "JavaScript",
      description: "A versatile scripting language used for client-side web development and modern front-end frameworks."
    },
    {
      name: "J2EE",
      description: "Java 2 Platform, Enterprise Edition, provides an API and runtime environment for building large-scale, multi-tiered applications."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row px-4 py-10 md:px-20">
        {/* ✅ Left Sidebar */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0 md:mr-8">
          <h2 className="font-bold text-gray-700 mb-2">Company</h2>
          <ul className="space-y-2 text-blue-600 list-disc list-inside">
            <li><a href="About">Company Profile</a></li>
            
            
            <li><a href="Whychoose">Why Viprosoft</a></li>
            <li><a href="Careers">Careers</a></li>
            <li className="hover:text-blue-800 cursor-pointer">
                <a
            href="tel:+917842209055"
            className="hover:underline text-black-600"
          >
            Contact Us
          </a>
                  </li>
            
          </ul>
        </div>

        {/* ✅ Main Content */}
        <div className="w-full md:w-3/5 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Open Source Development</h1>
          <p className="text-gray-800 leading-relaxed mb-4">
            The open-source technology stack, especially LAMP (Linux, Apache, MySQL, PHP), is widely adopted for scalable and cost-effective software development. At Viprosoft, we specialize in using open-source frameworks and APIs to accelerate development, improve security, and reduce costs.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            Our team is experienced in building mission-critical applications using the latest object-oriented frameworks and integrating multiple open-source tools for maximum efficiency.
          </p>
          <br></br>
          <img src={Web} alt="web technologies stack"  />
          <br></br>
          <img src={stack} alt="Stacks"  />
          <br></br>
          <img src={Frame} alt="Frame technologies"  />
          <br></br>
          <br></br>

          {/* ✅ Technology Descriptions */}
          <div className="space-y-4">
            {technologies.map((tech, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-black-700">{tech.name}</h3>
                <p className="text-gray-700 text-sm">{tech.description}</p>
              </div>
              
            ))}
            <h2 className="text-2xl font-bold text-blue-700 mt-10 mb-4">Frameworks</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
  <div>
    <h3 className="font-semibold text-lg">Angular</h3>
    <p>Angular is a TypeScript-based front-end framework developed by Google. It is widely used for building scalable single-page applications (SPAs) with rich user interfaces.</p>
  </div>
  <div>
    <h3 className="font-semibold text-lg">Node.js</h3>
    <p>Node.js is a JavaScript runtime built on Chrome’s V8 engine. It enables fast and scalable server-side applications using non-blocking, event-driven architecture.</p>
  </div>
  <div>
    <h3 className="font-semibold text-lg">Ruby on Rails</h3>
    <p>Rails is a full-stack web framework built on Ruby, following the MVC pattern. It’s popular for its convention-over-configuration approach and rapid development capabilities.</p>
  </div>
  <div>
    <h3 className="font-semibold text-lg">Laravel</h3>
    <p>Laravel is a PHP-based back-end framework known for its elegant syntax. It offers tools like routing, authentication, and database migration for efficient web app development.</p>
  </div>
  <div>
    <h3 className="font-semibold text-lg">React</h3>
    <p>React is a declarative JavaScript library for building interactive user interfaces. Maintained by Meta, it supports reusable components and virtual DOM for performance.</p>
  </div>
  <div>
    <h3 className="font-semibold text-lg">Vue.js</h3>
    <p>Vue is a lightweight, flexible front-end framework that combines the best of Angular and React. It is ideal for building interactive and dynamic web interfaces.</p>
  </div>
  <div>
    <h3 className="font-semibold text-lg">Django</h3>
    <p>Django is a high-level Python framework that encourages clean, pragmatic design. It includes built-in features like ORM, admin interface, and strong security.</p>
  </div>
  <div>
    <h3 className="font-semibold text-lg">Meteor.js</h3>
    <p>Meteor is a full-stack JavaScript platform for building real-time web applications. It supports rapid prototyping and automatic data synchronization between client and server.</p>
  </div>
</div>

          </div>
        </div>

        

        {/* ✅ Right Sidebar */}
        <RightSidebar />
        
      </div>
      <Footer/>
     
    </div>
  );
};

export default Innovates;
