import Head from "next/head";
import "../styles/styles.sass";
import Layout from "../components/Layout";
import LogInForm from "../components/LogInForm"

const Login = props => (
  <Layout>
    <Head>
      <title>Log In | EduSys</title>
    </Head>
    <section className="hero">
          <div className="hero-body">
            <div className="columns is-centered">
              <div className="column is-one-third">
                <div className="notification is-info">
                  <h1 className="title is-4">Student</h1>
                  <hr />
                  <LogInForm />
                </div>
              </div>
            </div>
          </div>
        </section>
  </Layout>
);

export default Login;
