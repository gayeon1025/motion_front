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
import ExamList from "./Pages/ExamList";
import EquipmentEditor from "./Pages/EquipmentEditor";
import EducationEditor from "./Pages/EduEditor";
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router exact path="/" component={App}>
          <Route path="/home" component={ Home }/>
          <Route path="/join" component={ Join }/>
          <Route exact path="/notices/:offset/:limit" component={ Notice }/>
          <Route exact path="/notices/new" component={ NoticeEditor }/>
          <Route exact path="/boards/:offset/:limit" component={ Board }/>
          <Route exact path="/boards/new" component={ BoardEditor }/>
          <Route path="/calendar" component={ Schedule }/>
          <Route exact path="/edu/:offset/:limit" component={ Education }/>
          <Route exact path="/edu/new" component={ EducationEditor }/>
          <Route exact path="/exams" component={ Exam }/>
          <Route exact path="/exams/:grade/:offset/:limit" component={ ExamList }/>
          <Route exact path="/exams/new" component={ ExamEditor }/>
          <Route exact path="/equipments" component={ Equipment }/>
          <Route exact path="/equipments/new" component={ EquipmentEditor }/>
          <Route path="/gallery" component={ Gallery }/>
          <Route path="/login" component={ Login }/>
        </Router>
      </header>
    </div>
  );
}

export default App;
