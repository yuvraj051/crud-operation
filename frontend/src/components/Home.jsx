import React, { useEffect, useState } from "react";

export default function Home() {
  const [studentsList, setstudentsList] = useState([]);

  useEffect(() => {
    setstudentsList([
      {
        id: 1,
        name: "yuvraj",
        email: "vyuvraj051@gmail.com",
        password: "abc",
        gender: "male",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Student Registration
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Student Name"
          />

          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
          />

          <input
            type="password"
            name="age"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="password"
          />

          <select
            name="gender"
            id=""
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option select="true" value="male">
              male
            </option>
            <option value="female">female</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>

        {/* Display student list */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2 text-gray-700">Student List</h3>
          <ul className="space-y-2">
            {studentsList.map((stu, index) => (
              <li key={index} className="p-3 bg-gray-50 rounded shadow-sm">
                <p>
                  <strong>Name:</strong>
                  {stu.name}
                </p>
                <p>
                  <strong>Age:</strong>
                  {stu.email}
                </p>
                <p>
                  <strong>Email:</strong>
                  {stu.password}
                </p>
                <p>
                  <strong>Course:</strong>
                  {stu.gender}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
