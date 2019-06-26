import React, { Component } from "react";
import cogoToast from "cogo-toast";
import Input from "./form/Input";
import SubmitButton from "./form/Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        email: "",
        password: ""
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
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    console.log(userData);
    fetch("https://edusys-yas.herokuapp.com/api/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
      	if (data.message === "failed") {
          cogoToast.error("Password and username don't match!", {
            position: "bottom-right",
            heading: "Login Failed",
            color: "#24D160"
          });
        }
        console.log("====================================");
        console.log("Successful" + JSON.stringify(data));
        console.log("====================================");
      });
    });
  }

  handleClearForm(e) {
    this.setState({
      newUser: {
        email: "",
        password: ""
      }
    });
  }

  render() {
    return (
      <form>
        {/* Contact no. */}
        <Input
          inputType={"email"}
          name={"email"}
          title={"Email"}
          value={this.state.newUser.email}
          placeholder={"Enter your email address"}
          handleChange={this.handleInput}
        />{" "}
        {/* Email */}
        <Input
          inputType={"text"}
          name={"password"}
          title={"Password"}
          value={this.state.newUser.password}
          placeholder={"Enter your Password"}
          handleChange={this.handleInput}
        />{" "}
        {/* Password */}
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
