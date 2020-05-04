import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserfirstName = this.onChangeUserfirstName.bind(this);
    this.onChangeUserlastName = this.onChangeUserlastName.bind(this);
    this.onChangeUserpantherId = this.onChangeUserpantherId.bind(this);
    this.onChangeUsercampus = this.onChangeUsercampus.bind(this);
    this.onChangeUserdegree = this.onChangeUserdegree.bind(this);
    this.onChangeUserlevel = this.onChangeUserlevel.bind(this);
    this.onChangeUseremail = this.onChangeUseremail.bind(this);
    this.onChangeUseryear = this.onChangeUseryear.bind(this);
    this.onChangeUsercollege = this.onChangeUsercollege.bind(this);
    this.onChangeUserdepartment = this.onChangeUserdepartment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      pantherId: 0,
      campus: '',
      department: '',
      degree: '',
      level: '',
      email: '',
      year: 0,
      college: '',

    }
  }

  onChangeUserfirstName(e) {
    this.setState({
      firstName: e.target.value,
    })
  }

  onChangeUserlastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  onChangeUserpantherId(e) {
    this.setState({
      pantherId: e.target.value
    })
  }

  onChangeUsercollege(e) {
    this.setState({
      college: e.target.value
    })
  }

  onChangeUseremail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeUserlevel(e) {
    this.setState({
      level: e.target.value
    })
  }

  onChangeUseryear(e) {
    this.setState({
      year: e.target.value
    })
  }

  onChangeUserdegree(e) {
    this.setState({
      degree: e.target.value
    })
  }

  onChangeUsercampus(e) {
    this.setState({
      campus: e.target.value
    })
  }

  onChangeUserdepartment(e) {
    this.setState({
      department: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      pantherId: this.state.pantherId,
      department: this.state.department,
      level: this.state.level,
      campus: this.state.campus,
      degree: this.state.degree,
      email: this.state.email,
      college: this.state.college,
      year: this.state.year
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      firstName: '',
      lastName: '',
      pantherId: 0,
      department: '',
      level: '',
      campus: '',
      degree: '',
      email: '',
      college: '',
      year: 0
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
        <div className = "form-group">
          <label> Panther ID: </label>
          <input  type="text"
                required
                className="form-control"
                value={this.state.pantherId}
                onChange={this.onChangeUserpantherId}
                />
          </div>

          <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.firstName}
                onChange={this.onChangeUserfirstName}
                />
          </div>

          <div className = "form-group">
            <label> Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.lastName}
                onChange={this.onChangeUserlastName}
                />
          </div>

          <div className = "form-group">
            <label> Department </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.department}
                onChange={this.onChangeUserdepartment}
                />
          </div>

          <div className = "form-group">
            <label> Level: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.level}
                onChange={this.onChangeUserlevel}
                />
          </div>
          
          <div className = "form-group">
          <label> Campus: </label>
          <input  type="text"
                required
                className="form-control"
                value={this.state.campus}
                onChange={this.onChangeUsercampus}
                />
          </div>

          <div className = "form-group">
          <label> Degree: </label>
          <input  type="text"
                required
                className="form-control"
                value={this.state.degree}
                onChange={this.onChangeUserdegree}
                />
          </div>

          <div className = "form-group">
          <label> Email: </label>
          <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeUseremail}
                />
          </div>
        
          <div className = "form-group">
          <label> College: </label>
          <input  type="text"
                required
                className="form-control"
                value={this.state.college}
                onChange={this.onChangeUsercollege}
                />
          </div>

          <div className = "form-group">
          <label> Year: </label>
          <input  type="text"
                required
                className="form-control"
                value={this.state.year}
                onChange={this.onChangeUseryear}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}



