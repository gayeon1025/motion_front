import React, { FC } from 'react'
import './App.css'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home";
import Join from "./Pages/Join";
import Notice from "./Pages/Notice";
import Board from "./Pages/Board";
import Schedule from "./Pages/Schedule";
import Education from "./Pages/Edu";
import Exam from "./Pages/Exam";
import Equipment from "./Pages/Equipment";
// import Gallery from "./Pages/Gallery";
import Login from "./Pages/Login";
import NoticeEditor from "./Pages/NoticeEditor";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/home" component={Home} />
            <Route path="/join" component={Join} />
            <Route exact path="/notice/:offset/:limit" component={Notice} />
            <Route exact path="/notice/new" component={NoticeEditor} />
            <Route exact path="/board/:offset/:limit" component={Board} />
            <Route path="/board" component={Board} />
            <Route path="/calendar" component={Schedule} />
            <Route path="/edu" component={Education} />
            <Route path="/exam" component={Exam} />
            <Route path="/equipment" component={Equipment} />
            {/* <Route path="/gallery" component={Gallery} /> */}
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
