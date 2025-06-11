import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home.jsx";
import Signup from "./components/Signup.jsx";
import Signin from "./components/signin.jsx";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-9xl bg-amber-950">hello</h1> */}
      {/* <Home /> */}
      {/* <Signup /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/singup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
