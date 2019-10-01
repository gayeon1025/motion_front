import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Notice from "./Pages/Notice";
import Board from "./Pages/Board";
import Schedule from "./Pages/Schedule";
import Education from "./Pages/Edu";
import Exam from "./Pages/Exam";
import Equipment from "./Pages/Equipment";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router exact path="/" component={App}>
          <Route path="/home" component={ Home }/>
          <Route path="/join" component={ Join }/>
          <Route path="/notice" component={ Notice }/>
          <Route path="/board" component={ Board }/>
          <Route path="/calendar" component={ Schedule }/>
          <Route path="/edu" component={ Education }/>
          <Route path="/exam" component={ Exam }/>
          <Route path="/equipment" component={ Equipment }/>
          <Route path="/gallery" component={ Gallery }/>
        </Router>
      </header>
    </div>
  );
}

export default App;
