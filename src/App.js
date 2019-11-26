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
import Login from "./Pages/Login";
import axios from 'axios';
import NoticeEditor from "./Pages/NoticeEditor";
import BoardEditor from "./Pages/BoardEditor";
import ExamEditor from "./Pages/ExamEditor";
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router exact path="/" component={App}>
          <Route path="/home" component={ Home }/>
          <Route path="/join" component={ Join }/>
          <Route exact path="/notice/:offset/:limit" component={ Notice }/>
          <Route exact path="/notice/new" component={ NoticeEditor }/>
          <Route exact path="/board/:offset/:limit" component={ Board }/>
          <Route exact path="/board/new" component={ BoardEditor }/>
          <Route path="/calendar" component={ Schedule }/>
          <Route exact path="/edu/:offset/:limit" component={ Education }/>
          <Route exact path="/exam" component={ Exam }/>
          <Route exact path="/exam/new" component={ ExamEditor }/>
          <Route path="/equipment" component={ Equipment }/>
          <Route path="/gallery" component={ Gallery }/>
          <Route path="/login" component={ Login }/>
        </Router>
      </header>
    </div>
  );
}

export default App;
