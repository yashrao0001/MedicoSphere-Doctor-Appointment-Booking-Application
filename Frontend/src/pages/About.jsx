import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          ABOUT <span className="text-gray-700 font-medium ">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome To MedicoSphere. Your Trusted Partner In Managing Your
            Healthcare Needs Conveniently And Efficiently. At MedicoSphere, We
            Understand The Challenges individuals face when it comes to
            scheduling doctors Appointments and managing their Healthcare
            records.
          </p>
          <p>
            MedicoSphere is commited to excellence in Healthcare Technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and Deliever superior
            service. Whether you are booking your first appointment or managing
            ongoing care, MedicoSphere is here to support you on every step of
            the way.
          </p>
          <b className="text-gray-800">Our vision</b>
          <p>
            Our Vision At MedicoSphere is to create A Seamless Healthcare
            Experience For Every User. We Aim To Bridge The Gap Between Patients
            And Healthcare Providers, Making It Easier For You To Access The
            Care You Need, When You Need It.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold"> CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border border-gray-300 px-10 md:py-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transiton-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:py-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transiton-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVIENIENCE</b>
          <p>
            Access to a network of trusted Healthcare professionals into your
            area.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:py-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transiton-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION</b>
          <p>
            Tailored recommendations and reminders to help you stay on the top
            of your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
