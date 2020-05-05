import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';




const Attendance = props => (
  <tr>
    <td>{props.attendance.pantherId}</td>
    <td>{props.attendance.firstName}</td>
    <td>{props.attendance.lastName}</td>    
    <td>{props.attendance.department}</td>
    <td>{props.attendance.level}</td>
    <td>{props.attendance.campus}</td>
    <td>{props.attendance.degree}</td>    
    <td>{props.attendance.email}</td>
    <td>{props.attendance.college}</td>
    <td>{props.attendance.year}</td>
    <td>
      <Link to={"/edit/"+props.attendance._id}>Mark Present</Link> 
    </td>
  </tr>
)




var path = window.location.pathname;
var res = path.split("/", 3);
var res0 = res[2];

export default class AttendancesList extends Component {
  constructor(props) {
    super(props);

    this.deleteAttendance = this.deleteAttendance.bind(this)

    this.state = {attendances: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/filtered-event/'+res0)
      .then(response => {
        this.setState({ attendances: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAttendance(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      attendances: this.state.attendances.filter(el => el._id !== id)
    })
  }

  attendanceList() {
    return this.state.attendances.map(currentattendance => {
      return <Attendance attendance={currentattendance} deleteAttendance={this.deleteAttendance} key={currentattendance._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Attendances</h3>
        <ExportCSV csvData={this.state.attendances} fileName={this.state.fileName} />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>PantherId</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Level</th>
              <th>Campus</th>
              <th>Degree</th>
              <th>Email</th>
              <th>College</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.attendanceList() }
          </tbody>
        </table>
      </div>
    )
  }



}

export const ExportCSV = ({csvData, fileName}) => {

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {
      const ws = XLSX.utils.json_to_sheet(csvData);
      const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], {type: fileType});
      FileSaver.saveAs(data, fileName + fileExtension);
  }
  const divButton = {
    color: 'white',
    textAlign: 'right',
  };
  return (
     <div style={divButton}><Button variant="warning" onClick={(e) => exportToCSV(csvData,fileName)}>Completed Checkin</Button></div>
  )
}