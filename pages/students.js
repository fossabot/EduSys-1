import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

class Students extends React.Component {
  render() {
    return (
      <section>
        <Head>
          <title>Students | EduSys</title>
        </Head>
        <Layout>
          <section className="hero">
            <div className="hero-body">
              <div className="columns is-mobile is-centered">
                <div className="column is-half has-text-centered">
                  <div className="tile is-child notification is-light">
                    <h1 className="title is-1">Students</h1>
                    <p className="bd-notification">
                      This page will show the students' info list
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </section>
    );
  }
}

export default Students;
