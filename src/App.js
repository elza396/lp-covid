import React from 'react';
import './App.css';
import {MainSection} from "./components/Main-Section/MainSection";
import {Overview} from "./components/Overview/Overview";
import {Contagion} from "./components/Contagion/Contagion";
import {Symptoms} from "./components/Symptoms/Symptoms";
import {Prevention} from "./components/Prevention/Prevention";
import {LastSection} from "./components/Last-section/Last-section";

function App() {
  return (
    <div className="App">
      <MainSection />
      <Overview />
      <Contagion />
      <Symptoms />
      <Prevention />
      <LastSection />
    </div>
  );
}

export default App;
