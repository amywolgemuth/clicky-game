import React from "react";
import Jumbotron from "./components/Jumbotron";
import MemoryGameContainer from "./components/MemoryGameContainer";
import "./App.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MemoryGameContainer /> 
  </div>
);

export default App;
