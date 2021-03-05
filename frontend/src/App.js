import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import StudentPage from "./Components/views/Student/StudentPage";
import NotificationPage from "./Components/views/Notification/NotificationPage";
import CalendarPage from "./Components/views/CalendarPage/CalendarPage";
import NotiRegistPage from "./Components/views/Notification/NotiRegistPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/student" component={StudentPage} />
        <Route path="/noti" exact component={NotificationPage} />
        <Route path="/noti/reg" component={NotiRegistPage} />
        <Route path="/calendar" component={CalendarPage} />
      </Switch>
    </Router>
  );
}

export default App;
