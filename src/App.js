import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Registration from "./Registration";
import Slider from "./Slider";

function App() {
  return (
    <React.StrictMode>
     
      <Navbar />
      
       <Registration /> 
    </React.StrictMode>
  );
}

export default App;

{
  /* 
        const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const inputEvent = (event) => {
    setName(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };
  
  <div>
        <h1>Hello {fullName}</h1>
        <input input="text" onChange={inputEvent} value={name} placeholder="Enter Your Name" />
        <button onClick={onSubmit} > Submit</button>
      </div> */
}
