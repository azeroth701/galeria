import "./App.css";
import Buttons from "./components/Buttons";
import react, { usestate } from 'react';
import React, { Component } from 'react'
import ReactHowler from 'react-howler'

function App() {
  return (
    <div
      className=" min-width: 640px min-w-[100vh] min-h-[100vh] bg-gradient-to-r from-yellow-300 via-purple-400 to-blue-400 
     "
    >
      <div className="  p-48 ml-16 grid  grid-flow-col ">
      < ReactHowler 
        src = 'http://goldfirestudios.com/proj/howlerjs/sound.ogg' 
        playing = { true } />
       
        <Buttons className=" float-left">Next</Buttons>
      </div>
    </div>
  );
}

export default App;
