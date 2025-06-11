import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/home.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/signin.jsx";
function App() {
  // const [count, setCount] = useState(0);
  const [is_login, set_is_login] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin p_set_is_login={set_is_login} />} />
          <Route
            path="/singup"
            element={<Signup p_set_is_login={set_is_login} />}
          />
          <Route path="/home" element={<Home p_is_login={is_login} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
