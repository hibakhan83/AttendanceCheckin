import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import AttendancesList from "./components/attendances-list.component";
import EditAttendance from "./components/edit-attendance.component";
import CreateAttendance from "./components/create-attendance.component";
import CreateUser from "./components/create-user.component";
import EventsList from "./components/events-list.component";
import CreateEvent from "./components/create-event.component";
import EditEvent from "./components/edit-event.component";
import SpecificEvent from "./components/specific-event.component";
import dataSearch from './components/Search.component';


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={EventsList} />
      <Route path="/events"  component={EventsList} />
      <Route path="/event/:id" component={SpecificEvent} />
      <Route path="/attendance" exact component={AttendancesList} />
      <Route path="/edit/:id" component={EditAttendance} />
      <Route path="/create" component={CreateAttendance} />
      <Route path="/user" component={CreateUser} />
      <Route path="/create-event" component={CreateEvent} />
      <Route path="/edit-event/:id" component={EditEvent} />
      <Route path="/search" component={dataSearch} />

      </div>
    </Router>
  );
}

export default App;
