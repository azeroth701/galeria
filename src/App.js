import "./App.css";
import Buttons from "./components/Buttons";
import react, { usestate } from "react";
import React, { Component } from "react";
import ReactHowler from "react-howler";

function App() {
  return (
    <div
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl max-w-screen-md min-w-[100vh] min-h-[100vh] bg-gradient-to-r from-yellow-300 via-purple-400 to-blue-400 
     "
    >

<ReactHowler
        src={require("../src/sound/track.mp3")}
        playing={true}
      ></ReactHowler>
      ;
      <div className="  p-48 ml-16 grid  grid-flow-col ">
        <Buttons className=" float-left">Next</Buttons>
      </div>
    </div>
  );
}

export default App;
