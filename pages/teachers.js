import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import TeachersTable from "../components/TeachersTable"

class Teachers extends React.Component {
  render() {
    return (
      <section>
        <Head>
          <title>Teachers | EduSys</title>
        </Head>
        <Layout>
          <section className="hero">
            <div className="hero-body">
              <div className="columns is-mobile is-centered">
                <div className="column is-half has-text-centered">
                  <TeachersTable />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </section>
    );
  }
}

export default Teachers;
