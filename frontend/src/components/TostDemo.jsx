import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toastdemo() {
  const notify = () => toast.success("Welcome to React!");

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  );
}

export default Toastdemo;
