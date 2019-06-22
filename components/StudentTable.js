import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class extends Component {
  static async getInitialProps() {
    const res = await fetch("https://edusys-yas.herokuapp.com/api/students");
    const studentData = await res.json();
    console.log(JSON.stringify(studentData));
    return studentData;
  }
  componentWillMount() {
    this.setState({
      studentData: this.props.studentData
    });
  }
  render() {
    return (
      <table className="table is-striped is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Batch</th>
            <th>Contact No.</th>
          </tr>
        </thead>
        <tbody>
          {this.state.studentData.map(studentDataRow => (
            <tr>
              <td>{studentDataRow.name}</td>
              <td>{studentDataRow.class}</td>
              <td>{studentDataRow.section}</td>
              <td>{studentDataRow.batch}</td>
              <td>{studentDataRow.contact_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
