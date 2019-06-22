import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

class Index extends React.Component {
  render() {
    return (
      <section>
        <Head>
          <title>Home</title>
        </Head>
        <Layout>
          <section className="hero">
            <div className="hero-body">
              <div className="columns is-mobile is-centered">
                <div className="column is-half has-text-centered">
                  <div className="tile is-child notification is-light">
                    <h1 className="title is-1">EduSys</h1>
                    <p className="bd-notification">
                      This platform provides you with a teacher and student
                      management system for your educational institute.
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

export default Index;
