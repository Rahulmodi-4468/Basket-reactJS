import React from "react";
import "./App.css";
// import Home from "./Home";
import Navbar from "./Navbar";
import Registration from "./Registration";
// import Slider from "./Slider";

function App() {
  return (
    <React.StrictMode>
      <Navbar />

      <Registration />
    </React.StrictMode>
  );
}

export default App;
