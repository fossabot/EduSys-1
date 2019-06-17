import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/styles.sass";

class Index extends React.Component {
  render() {
    return (
      <section>
        <Head>
          <title>Home</title>
        </Head>
        <Layout>
        </Layout>
      </section>
    );
  }
}

export default Index;
