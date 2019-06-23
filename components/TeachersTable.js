import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teacherData: []
    };
  }

  async componentWillMount() {
    const res = await fetch("https://edusys-yas.herokuapp.com/api/teachers");
    const teacherData = await res.json();

    this.setState({ teacherData });
  }

  render() {
    return (
      <table className="table is-striped is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Batch</th>
            <th>Contact No.</th>
          </tr>
        </thead>
        <tbody>
          {this.state.teacherData.map(teacherDataRow => (
            <tr>
              <td>{teacherDataRow.name}</td>
              <td>{teacherDataRow.batch}</td>
              <td>{teacherDataRow.contact_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
