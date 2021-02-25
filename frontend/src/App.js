import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import StudentPage from "./Components/views/Student/StudentPage";
import NotificationPage from "./Components/views/Notification/NotificationPage";
import CalendarPage from "./Components/views/CalendarPage/CalendarPage";
import LoginPage from "./Components/views/Login/LoginPage";
import QnaPage from "./Components/views/QnA/QnaPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/student" component={StudentPage} />
        <Route path="/noty" component={NotificationPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/qna" component={QnaPage} />
      </Switch>
    </Router>
  );
}

export default App;
