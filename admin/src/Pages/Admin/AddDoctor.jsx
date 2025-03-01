import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";
import { AdminContext } from "../../Context/AdminContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const { backendURL, aToken } = useContext(AdminContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image not Selected");
      }
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      //log data on console
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });
      const { data } = await axios.post(
        backendURL + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setPassword("");
        setEmail("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
        setFees("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll border-white">
        <div className="flex items-center gap-4 mb-8 text-gray-500 ">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
            />
          </label>
          <input
            onChange={(e) => {
              setDocImg(e.target.files[0]);
            }}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="flex w-full flex-col lg:flex-1 gap-4">
            <div className="flex flex-col gap-1 flex-1">
              <p>Doctor name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border px-3 py-2 rounded border-gray-200"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border px-3 py-2 rounded border-gray-200"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border px-3 py-2 rounded border-gray-200"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border px-3 py-2 rounded border-gray-200"
              >
                <option value="1 Year">1 Year </option>
                <option value="2 Year">2 Year </option>
                <option value="3 Year">3 Year </option>
                <option value="4 Year">4 Year </option>
                <option value="5 Year">5 Year </option>
                <option value="6 Year">6 Year </option>
                <option value="7 Year">7 Year </option>
                <option value="8 Year">8 Year </option>
                <option value="9 Year">9 Year </option>
                <option value="10  Year">10 Year </option>
              </select>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border px-3 py-2 rounded border-gray-200"
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div>
              <p className="flex flex-col gap-1 flex-1">Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border px-3 py-2 rounded border-gray-200"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p>Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border px-3 py-2 rounded border-gray-200"
                type="text"
                placeholder="Education"
                required
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border px-3 py-2 rounded border-gray-200"
                type="text"
                placeholder="Address line 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border px-3 py-2 rounded border-gray-200"
                type="text"
                placeholder="Address line 2"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mb-2">
          <p>About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full pt-2 px-4 border rounded border-gray-200"
            placeholder="wri te about doctor"
            rows={5}
          ></textarea>
        </div>
        <button className="px-10 py-3 mt-4 text-white rounded-full bg-[#5f6FFF] cursor-pointer">
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
