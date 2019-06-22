import React, { Component } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import StudentForm from "../components/StudentForm";
import TeacherForm from "../components/TeacherForm";

class Form extends Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Sign Up | EduSys</title>
        </Head>
        <section className="hero">
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column is-one-third">
                <div className="notification is-info">
                  <h1 className="title is-4">Student</h1>
                  <hr />
                  <StudentForm />
                </div>
              </div>
              <div className="column is-one-third">
                <div className="notification is-warning">
                  <h1 className="title is-4">Teachers</h1>
                  <hr style={{ background: "#5F501B" }} />
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
