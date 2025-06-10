import { useState } from "react";
import "./App.css";
import Home from "./components/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-9xl bg-amber-950">hello</h1> */}
      <Home />
    </>
  );
}

export default App;
