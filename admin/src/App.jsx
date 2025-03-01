import React, { useContext } from "react";
import Login from "./Pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./Context/AdminContext";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import AllAppointments from "./Pages/Admin/AllAppointments.jsx";
import AddDoctor from "./Pages/Admin/AddDoctor.jsx";
import DoctorsList from "./Pages/Admin/DoctorsList.jsx";
import { DoctorContext } from "./Context/DoctorContext.jsx";
import DoctorDashboard from "./Pages/Doctor/DoctorDashboard.jsx";
import DoctorAppointments from "./Pages/Doctor/DoctorAppointments.jsx";
import DoctorProfile from "./Pages/Doctor/DoctorProfile.jsx";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start ">
        <Sidebar />
        <Routes>
          {/* Admin Route */}
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllAppointments />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorsList />} />

          {/* Doctor Route */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-appointments" element={<DoctorAppointments />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
};

export default App;
