import React from "react";
import Navbar from "../pages/navbar";
import LeftSidebar from "./leftsidebar";
import Rightsidebar from "./Rightsidebar";

const Whychoose = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row px-4 py-10 md:px-400">

        {/* ✅ Left Sidebar */}
       

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">Why Choose Us</h1>

        <p className="text-gray-800 mb-6">
          We often ask our customers why they like to work with us. Here is what they say:
        </p>

        <blockquote className="italic text-gray-700 border-l-4 border-blue-600 pl-4 mb-6">
          “I was impressed with your attitude, guys. Feedback to my requests was received immediately and it was really easy for me to supervise the project from start to finalization. It is the first time I have had a successful experience of speaking a common language with an offshore team.”
          <br />
          <span className="font-semibold text-blue-800">– Bryce Michel, CEO, BlueStone Bio (US)</span>
        </blockquote>

        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Viprosys Is a Truly Customer-Oriented Company</h2>
        <p className="text-gray-700 mb-4">
          Our goal is to help you achieve your business objectives. Our extensive experience helps us understand your needs in regard to design and development, evaluate your business objectives, and thus do our work in the best way. Our customers can be sure that all their wishes will be fulfilled just as they want.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Established and Effective Processes</h2>

        <div className="space-y-4 text-gray-700">
          <div>
            <strong className="text-orange-700">• Flexibility:</strong> Years of experience and communication with customers proved that we can promptly respond and adapt to any changes made over the course of the project. You will be amazed at how quickly we will bring your ideas to life.
          </div>

          <div>
            <strong className="text-orange-700">• Transparency:</strong> We guarantee maximum transparency at all stages of development. Company managers will provide the most detailed information on your project. Project deadlines are set right away. Managers will keep in touch with you via tele and video conferencing, regular reports and personal meetings.
          </div>

          <div>
            <strong className="text-orange-700">• Commitment to Quality:</strong> We constantly improve and streamline our quality assurance system to conform to internationally recognized standards. Our QA team ensures that your software products are delivered with maximum efficiency and highest quality.
          </div>

          <div>
            <strong className="text-orange-700">• Reasonable Prices:</strong> Relatively low cost of resources and operating costs allow us to offer highly skilled teams at competitive pricing — ensuring best quality at low cost.
          </div>

          <div>
            <strong className="text-orange-700">• Risk Identification:</strong> Our experience has taught us how to anticipate potential problems before they arise. Whether it’s a technical issue or system compatibility, we save your time and money by acting proactively.
          </div>

          <div>
            <strong className="text-orange-700">• Customer Confidence:</strong> Being a 100% customer-focused company, we prioritize your trust and satisfaction. Most of our clients return for second and third projects — a testament to our quality and commitment.
          </div>
          
        </div>
       
        </div>
         <Rightsidebar/>
      </div>
    </div>
  );
};

export default Whychoose;
