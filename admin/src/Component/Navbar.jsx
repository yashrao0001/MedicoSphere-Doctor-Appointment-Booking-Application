import React, { useContext } from "react";
import { AdminContext } from "../Context/AdminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../Context/DoctorContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);

  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    dToken && setDToken("");
    dToken && localStorage.removeItem("dToken");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:py-7 py-3 border-b bg-white border-white">
      <div className=" flex items-center text-xs gap-2">
        <h1
          className="w-36 cursor-pointer text-lg sm:40"
          onClick={() => navigate("/")}
        >
          <span className="text-[#5f6FFF] text-2xl">M</span>EDICO
          <span className="text-[#5f6FFF] text-2xl">S</span>PHERE
        </h1>
        &nbsp;&nbsp;&nbsp;
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-[#5f6FFF] text-white text-sm px-10 py-2 rounded-full cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
