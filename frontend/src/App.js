import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import StudentPage from "./Components/views/Student/StudentPage";
import NotificationPage from "./Components/views/Notification/NotificationPage";
import CalendarPage from "./Components/views/CalendarPage/CalendarPage";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/student" component={StudentPage} />
        <Route path="/noty" component={NotificationPage} />
        <Route path="/calendar" component={CalendarPage} />
      </Switch>
    </Router>
  );
}

export default App;
