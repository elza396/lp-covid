import React from 'react';
import './App.css';
import {MainSection} from "./components/Main-Section/MainSection";
import {Overview} from "./components/Overview/Overview";

function App() {
  return (
    <div className="App">
      <MainSection />
      <Overview />
    </div>
  );
}

export default App;
