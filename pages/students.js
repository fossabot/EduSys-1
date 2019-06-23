import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import StudentsTable from "../components/StudentsTable";
export default class extends React.Component {
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
                <div className="column is-half has-text-centered is-centered">
                  <StudentsTable />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </section>
    );
  }
}
