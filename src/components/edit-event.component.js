import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSemester = this.onChangeSemester.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        description: '',
        semester: '',
        year: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/events/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            name: response.data.name,
            description: response.data.description,
            semester: response.data.semester,
            year: response.data.year,
        })   
      })
      .catch(function (error) {
        console.log("Component did not mount" + error);
      })

    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.name),
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeSemester(e) {
    this.setState({
      semester: e.target.value
    })
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const event = {
      name: this.state.name,
      description: this.state.description,
      semester: this.state.semester,
      year: this.state.year
    }

    console.log(event);

    axios.post('http://localhost:5000/events/update/' + this.props.match.params.id, event)
      .then(res => console.log(res.data));

      // window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Event</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}>
              {/* {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              } */}
          </input>
        </div>
        <div className="form-group"> 
          <label>description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <label>Semester: </label>
          <div>
          <input  type="text"
              required
              className="form-control"
              value={this.state.semester}
              onChange={this.onChangeSemester}
              />
          </div>
        </div>

        <div className="form-group">
          <label>Year: </label>
          <div>
          <input  type="text"
              required
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
              />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Event Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}