import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ISSS Attendance</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link"> View Events</Link>
          </li>
           <li className="navbar-item">
          <Link to="/create-event" className="nav-link">Create Event</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Add Student</Link>
          </li>
          <li>
            <Link to = "/search" className = "nav-link"> Search </Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}