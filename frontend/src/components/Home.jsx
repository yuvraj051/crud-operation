import React, { useState } from "react";

export default function Home() {
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
            type="number"
            name="age"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Age"
          />

          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
          />

          <input
            type="text"
            name="course"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Course"
          />

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
            {/* {studentsList.map((stu, index) => ( */}
            <li
              // key={index}
              className="p-3 bg-gray-50 rounded shadow-sm"
            >
              <p>
                <strong>Name:</strong>
                {/* {stu.name} */}
              </p>
              <p>
                <strong>Age:</strong>
                {/* {stu.age} */}
              </p>
              <p>
                <strong>Email:</strong>
                {/* {stu.email} */}
              </p>
              <p>
                <strong>Course:</strong>
                {/* {stu.course} */}
              </p>
            </li>
            {/* ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
}
