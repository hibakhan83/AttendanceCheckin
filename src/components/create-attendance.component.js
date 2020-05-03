import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateAttendance extends Component {
  constructor(props) {
    super(props);

    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastName = this.onChangelastName.bind(this);
    this.onChangepantherId = this.onChangepantherId.bind(this);
    this.onChangedepartment = this.onChangedepartment.bind(this);
    this.onChangelevel = this.onChangelevel.bind(this);
    this.onChangecampus = this.onChangecampus.bind(this);
    this.onChangedegree = this.onChangedegree.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangecollege = this.onChangecollege.bind(this);
    this.onChangeyear = this.onChangeyear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pantherId: 0,
      firstName: '',
      lastName: '',
      department: '',
      level: '',
      campus: '',
      degree: '',
      email: '',
      college: '',
      year: 0,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.firstName),
            firstName: response.data[0].firstName
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangelastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  onChangepantherId(e) {
    this.setState({
      pantherId: e.target.value
    })
  }

  onChangedepartment(e) {
    this.setState({
      department: e.target.value
    })
  }

  onChangelevel(e) {
    this.setState({
      level: e.target.value
    })
  }

  onChangecampus(e) {
    this.setState({
      campus: e.target.value
    })
  }

  onChangedegree(e) {
    this.setState({
      degree: e.target.value
    })
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangecollege(e) {
    this.setState({
      college: e.target.value
    })
  }

  onChangeyear(e) {
    this.setState({
      year: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const attendance = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }

    console.log(attendance);

    axios.post('http://localhost:5000/attendances/add', attendance)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Attendance Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>First Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangefirstName}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group"> 
          <label>Last Name: </label>
          <input type = "text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangelastName}
          />
        </div>

        <div className="form-group"> 
          <label>Panther ID: </label>
          <input type = "text"
              required
              className="form-control"
              value={this.state.pantherId}
              onChange={this.onChangepantherId}
          />
        </div>

        <div className="form-group"> 
          <label>Department: </label>
          <input type = "text"
              required
              className="form-control"
              value={this.state.department}
              onChange={this.onChangedepartment}
          />
        </div>

        <div className="form-group"> 
          <label>Level: </label>
          <input type = "text"
              required
              className="form-control"
              value={this.state.level}
              onChange={this.onChangelevel}
          />
        </div>

        <div className="form-group"> 
          <label>Campus: </label>
          <input type = "text"
              required
              className="form-control"
              value={this.state.campus}
              onChange={this.onChangecampus}
          />
        </div>

        <div className="form-group"> 
          <label>Degree: </label>
          <input type = "text"
              required
              className="form-control"
              value={this.state.degree}
              onChange={this.onChangedegree}
          />
        </div>

        <div className="form-group"> 
          <label>Email: </label>
          <input type = "text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
          />
        </div>

        <div className="form-group"> 
          <label>College: </label>
          <input type = "text"
              required
              className="form-control"
              value={this.state.college}
              onChange={this.onChangecollege}
          />
        </div>

        <div className="form-group"> 
          <label>Year: </label>
          <input type = "text"
              required
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeyear}
          />
        </div>


        <div className="form-group">
          <input type="submit" value="Create Attendance Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}