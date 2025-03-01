import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { AdminContext } from "../Context/AdminContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../Context/DoctorContext.jsx";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAToken, backendURL } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendURL + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendURL + "/api/doctor/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
          console.log(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 items-start m-auto p-8 min-w-[340px] sm:min-w-96 border border-white rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-[#5F6FFF]">{state} </span> Login
        </p>
        <div className="w-full">
          <p>Email : </p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#DADADA] p-2 mt-1 rounded w-full"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Password : </p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#DADADA] p-2 mt-1 rounded w-full"
            type="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#5F6FFF] text-white w-full py-2 rounded-md text-base cursor-pointer"
        >
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login?
            <span
              className="text-[#5F6FFF] underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click here!
            </span>
          </p>
        ) : (
          <p>
            Admin Login?
            <span
              className="text-[#5F6FFF] underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click here!
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
