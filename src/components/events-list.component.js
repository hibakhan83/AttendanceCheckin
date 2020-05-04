import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Event = props => (
  
  <tr>
    <td><Link to={"/event/"+props.event._id}>{props.event.name}</Link> </td>  
    <td>{props.event.description}</td>
    <td>{props.event.semester}</td>
    <td>{props.event.year}</td>
    <td>
      <Link to={"/edit-event/"+props.event._id}>Edit </Link>  | <a href="" onClick={() => { props.deleteEvent(props.event._id) }}>Delete</a> 
    </td>
  </tr>

)


export default class EventsList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteEvent = this.deleteEvent.bind(this)
  
      this.state = {events: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/events/')
        .then(response => {
          this.setState({ events: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    deleteEvent(id) {
      console.log(id);
      axios.delete('http://localhost:5000/events/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        events: this.state.events.filter(el => el._id !== id)
      })
    }
  
    eventList() {
      return this.state.events.map(currentevent => {
        return <Event event={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id}/>;
      })
    }
  
    render() {
      return (
        <div>
          <h3><center>Scheduled Events</center></h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Semester</th>
                <th>Year</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              { this.eventList() }
            </tbody>
          </table>
        </div>
      )
    }
  }