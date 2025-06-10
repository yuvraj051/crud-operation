import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [submit_state, setset_submit_state] = useState("insert");
  const [studentsList, setstudentsList] = useState([]);
  const [id, setid] = useState("");
  const [txt_name, setName] = useState("");
  const [txt_email, setemail] = useState("");
  const [txt_password, setpassword] = useState("");
  const [txt_gender, setgender] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/api/read");

      setstudentsList(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
      setstudentsList([]);
    }
    clear_field();
    setset_submit_state("insert");
  };
  const on_add = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post(
        "http://localhost:3000/user/api/create",
        {
          name: txt_name,
          email: txt_email,
          password: txt_password,
          gender: txt_gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Add authorization headers if needed, e.g., 'Authorization': `Bearer ${yourToken}`
          },
        }
      );
    } catch (error) {
      console.log(error.response.data);
    }
    fetchData();
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchData();
    };

    // Call the inner async function
    loadData();
  }, []);

  const on_delete = async (e) => {
    try {
      const response = await axios.delete(
        "http://localhost:3000/user/api/delete/" + e
      );
    } catch (error) {
      console.log(error.response.data);
    }
    console.log(e);

    fetchData();
  };

  const on_edit_value = (e) => {
    console.log(e);
    setid(e._id);
    setName(e.name);
    setemail(e.email);
    setpassword(e.password);
    setgender(e.gender);
    setset_submit_state("update");

    // clear_field();
  };

  const on_update = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/user/api/update/" + id,
        {
          name: txt_name,
          email: txt_email,
          password: txt_password,
          gender: txt_gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Add authorization headers if needed, e.g., 'Authorization': `Bearer ${yourToken}`
          },
        }
      );
      fetchData();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const clear_field = () => {
    setName("");
    setemail("");
    setpassword("");
    setgender("");
  };

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
            value={txt_name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
            value={txt_email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="password"
            name="age"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="password"
            value={txt_password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          gender <br />
          <input
            type="radio"
            onChange={() => setgender("male")}
            name="gender"
            checked={txt_gender === "male" ? true : false}
            value={"male"}
          />{" "}
          male
          <input
            type="radio"
            name="gender"
            checked={txt_gender === "female" ? true : false}
            onChange={() => setgender("female")}
            value={"female"}
          />{" "}
          female
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            onClick={submit_state === "insert" ? on_add : on_update}
          >
            {submit_state === "insert" ? "add" : "update"}
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
                  <strong>email:</strong>
                  {stu.email}
                </p>

                <p>
                  <strong>genders:</strong>
                  {stu.gender}
                </p>
                <button
                  type="button"
                  className="bg-green-600 rounded-xl mb-1 p-2 w-full"
                  onClick={() => on_edit_value(stu)}
                >
                  edit
                </button>
                <button
                  type="button"
                  className="bg-red-600 rounded-xl p-2 w-full"
                  onClick={() => on_delete(stu._id)}
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
