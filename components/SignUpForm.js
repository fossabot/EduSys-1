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
        password: "",
        confirm_password: ""
      }
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        [name]: value
      }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    cogoToast.loading("Completing action...", {
      position: "bottom-right",
      heading: "Please wait",
      color: "#24D160"
    });
    let userData = this.state.newUser;
    let pass = this.state.newUser.password;
    let confPass = this.state.newUser.confirm_password;

    if (pass === confPass) {
      fetch("https://edusys-yas.herokuapp.com/api/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(response => {
        response.json().then(data => {
          if (data.message === "failed") {
            cogoToast.error("Email already in use!", {
              position: "bottom-right",
              heading: "Sign-up Failed",
              color: "#24D160"
            });
          }
          else {
            cogoToast.success("Sign-up complete!", {
              position: "bottom-right",
              heading: "Successful",
              color: "#24D160"
            });
          }
          console.log('====================================');
          console.log("Successful" + JSON.stringify(data));
          console.log('====================================');
        });
      });
    } else {
      cogoToast.error("Passwords don't match!", {
        position: "bottom-right",
        heading: "Sign-up failed!",
        color: "#24D160"
      });
      console.log("====================================");
      console.log("Passwords don't match");
      console.log("====================================");
    }
  }

  handleClearForm(e) {
    this.setState({
      newUser: {
        email: "",
        password: "",
        confirm_password: ""
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
        <Input
          inputType={"text"}
          name={"confirm_password"}
          title={"Confirm Password"}
          value={this.state.newUser.confirm_password}
          placeholder={"Enter your Confirm Password"}
          handleChange={this.handleInput}
        />{" "}
        {/* Confirm Password */}
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
