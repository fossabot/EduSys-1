import React, { Component } from "react";
import cogoToast from "cogo-toast";

import Input from "./form/Input";
import SubmitButton from "./form/Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newStudent: {
        type: "student",
        name: "",
        contact_no: "",
        class: "",
        section: "",
        batch: ""
      }
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newStudent: {
          ...prevState.newStudent,
          [name]: value
        }
      }),
      () => console.log(this.state.newStudent)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newStudent;

    console.log(userData);
    fetch("https://edusys-yas.herokuapp.com/api/submit", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        if (data.message === "200 ok") {
          cogoToast.success("Registration complete!", {
            position: "bottom-right",
            heading: "Successful",
            color: "#24D160"
          });
        }
        console.log("====================================");
        console.log(JSON.stringify(data));
        console.log("====================================");
      });
    });
  }

  handleClearForm(e) {
    this.setState({
      newStudent: {
        type: "student",
        name: "",
        contact_no: "",
        class: "",
        section: "",
        batch: ""
      }
    });
  }

  render() {
    return (
      <form>
        <Input
          inputType={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.newStudent.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"number"}
          name={"contact_no"}
          title={"Contact No."}
          value={this.state.newStudent.contact_no}
          placeholder={"Enter your contact no."}
          handleChange={this.handleInput}
        />{" "}
        {/* Age */}
        <Input
          inputType={"number"}
          name={"class"}
          title={"Class"}
          value={this.state.newStudent.class}
          placeholder={"Enter your class"}
          handleChange={this.handleInput}
        />{" "}
        {/* Class */}
        <Input
          inputType={"text"}
          name={"batch"}
          title={"Batch"}
          value={this.state.newStudent.batch}
          placeholder={"Enter your batch"}
          handleChange={this.handleInput}
        />{" "}
        {/* Batch */}
        <Input
          inputType={"text"}
          name={"section"}
          title={"Section"}
          value={this.state.newStudent.section}
          placeholder={"Enter your section"}
          handleChange={this.handleInput}
        />{" "}
        {/* Age */}
        <SubmitButton
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
        />{" "}
        {/*Submit */}
        <SubmitButton
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

export default Form;
