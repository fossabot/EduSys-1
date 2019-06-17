import React, { Component } from "react";
import Layout from "../components/Layout";
import StudentForm from "../components/StudentForm";
import TeacherForm from "../components/TeacherForm";
import "../styles/styles.sass";

class Form extends Component {
  render() {
    return (
      <Layout>
        <section className="hero">
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column is-one-third">
                <div className="notification is-primary">
                  Column One. A form will be here.
                  <StudentForm />
                </div>
              </div>
              <div className="column is-one-third">
                <div className="notification is-primary">
                  Column Two. A form will be here.
                  <TeacherForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Form;
