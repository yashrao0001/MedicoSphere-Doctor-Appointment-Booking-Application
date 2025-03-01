import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <h1 className="w-40 mb-5 cursor-pointer text-lg">
            <span className="text-[#5f6FFF] text-2xl">M</span>EDICO
            <span className="text-[#5f6FFF] text-2xl">S</span>PHERE
          </h1>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum
            qui dolore aperiam nihil accusamus debitis molestiae repellendus
            nobis alias repellat officiis, quia, quisquam tempore! Eligendi quas
            a impedit cupiditate.
          </p>
        </div>
        {/* Middle Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li> Privacy Policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 8860018601</li>
            <li>yyash7796@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright Text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright @2025 MedicoSphere - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
