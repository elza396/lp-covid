import React from 'react';
import './App.css';
import {MainSection} from "./components/Main-Section/MainSection";
import {Overview} from "./components/Overview/Overview";
import {Contagion} from "./components/Contagion/Contagion";

function App() {
  return (
    <div className="App">
      <MainSection />
      <Overview />
      <Contagion />
    </div>
  );
}

export default App;
