import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Signin() {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  // start functions
  const handle_singin = () => {
    console.log(User);
  };
  const handle_singup = () => {
    Navigate("/singup");
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
            <button
              type="button"
              onClick={handle_singin}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              signin
            </button>
            <button
              type="button"
              onClick={handle_singup}
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              singup
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
