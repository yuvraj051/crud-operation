import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [User, setUser] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
    mobile_number: "",
    address: "",
  });
  const Navigate = useNavigate();
  // start functions
  const handle_singup = () => {
    console.log(User);
  };
  const handle_singin = () => {
    Navigate("/");
  };
  // end function

  return (
    <>
      {" "}
      <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
        {/* Form Section */}
        <div className="bg-white rounded shadow-lg w-full max-w-md p-6 mb-8 mt-9">
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
            Student Registration
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Student Name"
              value={User.name}
              onChange={(e) => {
                setUser({ ...User, name: e.target.value });
              }}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={User.email}
              onChange={(e) => {
                setUser({ ...User, email: e.target.value });
              }}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={User.password}
              onChange={(e) => {
                setUser({ ...User, password: e.target.value });
              }}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              placeholder="mobile number"
              value={User.mobile_number}
              onChange={(e) => {
                setUser({ ...User, mobile_number: e.target.value });
              }}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="address"
              value={User.address}
              onChange={(e) => {
                setUser({ ...User, address: e.target.value });
              }}
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex items-center space-x-4">
              <label className="font-medium">Gender:</label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={User.gender === "male"}
                  onChange={(e) => {
                    setUser({ ...User, gender: e.target.value });
                  }}
                />
                <span className="ml-1">Male</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={User.gender === "female"}
                  onChange={(e) => {
                    setUser({ ...User, gender: e.target.value });
                  }}
                />
                <span className="ml-1">Female</span>
              </label>
            </div>
            <button
              type="button"
              onClick={handle_singup}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              signup
            </button>
            <button
              type="button"
              onClick={handle_singin}
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              singin
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
