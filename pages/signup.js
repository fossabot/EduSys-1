import Head from "next/head";
import Layout from "../components/Layout";
import SignUpForm from "../components/SignUpForm";

const SignUp = props => (
  <Layout>
    <Head>
      <title>Log In | EduSys</title>
    </Head>
    <section className="hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <div className="notification is-info">
              <h1 className="title is-4">Sign Up</h1>
              <hr />
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default SignUp;
