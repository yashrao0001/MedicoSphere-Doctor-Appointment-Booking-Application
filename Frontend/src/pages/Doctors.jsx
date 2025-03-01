import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialisties</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border cursor-pointer rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-[#5f6FFF] text-white" : ""
          }`}
          onClick={() => {
            setShowFilter((prev) => !prev);
          }}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            className={`w-[94vw] sm:w-auto pl-3 pt-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() => {
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician");
              setShowFilter(false);
            }}
          >
            General physician
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 pt-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() => {
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist");
              setShowFilter(false);
            }}
          >
            Gynecologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 pt-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() => {
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist");
              setShowFilter(false);
            }}
          >
            Dermatologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 pt-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() => {
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians");
              setShowFilter(false);
            }}
          >
            Pediatricians
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 pt-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() => {
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist");
              setShowFilter(false);
            }}
          >
            Neurologist
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 pt-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
            onClick={() => {
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist");
              setShowFilter(false);
            }}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid custom gap-4 gap-y-6">
          {filterDoc.map((item, idx) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
              }}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={idx}
            >
              <img className="bg-blue-50" src={item.image} />
              <div className="p-4">
                <div
                  className={`flex items-center text-sm gap-2 text-center ${
                    item.available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <p
                    className={`w-2 h-2 ${
                      item.available ? "bg-green-500" : "bg-gray-500"
                    }  rounded-full`}
                  ></p>
                  <p>{item.available ? "Available" : "Not Available"} </p>
                </div>
                <p className="text-gray-900 text-lg font-medium">
                  {item.name}{" "}
                </p>
                <p className="text-gray-600 text-sm"> {item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
