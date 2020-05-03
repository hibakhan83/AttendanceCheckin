import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserfirstName = this.onChangefirstName.bind(this);
    this.onChangepantherId = this.onChangepantherId.bind(this);
    this.onChangedepartment = this.onChangedepartment.bind(this);
    this.onChangelevel = this.onChangelevel.bind(this);
    this.onChangecampus = this.onChangecampus(this);
    this.onChangedegree = this.onChangedegree(this);
    this.onChangeemail = this.onChangeemail(this);
    this.onChangecollege = this.onChangecollege(this);
    this.onChangeyear = this.onChangeyear(this);
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
    axios.get('http://localhost:5000/attendance/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          pantherId: response.data.pantherId,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          department: response.data.department,
          level: response.data.level,
          campus: response.data.campus,
          degree: response.data.degree,
          email: response.data.email,
          college: response.data.college,
          year: response.data.year
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.firstName),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangepantherId(e) {
    this.setState({
      pantherId: e.target.value
    })
  }

  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }
  onChangelastName(e) {
    this.setState({
      lastName: e.target.value
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
      pantherId: this.state.pantherId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      department: this.state.department,
      level: this.state.level,
      campus: this.state.campus,
      degree: this.state.degree,
      email: this.state.email,
      college: this.state.college,
      year: this.state.year
    }

    console.log(attendance);

    axios.post('http://localhost:5000/attendance/update/' + this.props.match.params.id, attendance)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
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
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangelastName}
              />
        </div>

        <div className="form-group"> 
          <label>Panther ID: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.pantherId}
              onChange={this.onChangepantherId}
              />
        </div>

        <div className="form-group"> 
          <label>Department: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.department}
              onChange={this.onChangedepartment}
              />
        </div>

        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>

        <div className="form-group"> 
          <label>Level: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.level}
              onChange={this.onChangelevel}
              />
        </div>

        <div className="form-group"> 
          <label>Campus: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.campus}
              onChange={this.onChangecampus}
              />
        </div>

        <div className="form-group"> 
          <label>Degree: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.degree}
              onChange={this.onChangedegree}
              />
        </div>

        <div className="form-group"> 
          <label>Last Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.college}
              onChange={this.onChangecollege}
              />
        </div>

        <div className="form-group"> 
          <label>Year: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeyear}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}