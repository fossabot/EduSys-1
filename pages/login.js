import "../styles/styles.sass";
import Layout from "../components/Layout";

const Login = props => (
  <Layout>
    <section className="hero">
      <div className="hero-body">
        <div class="columns is-mobile is-centered">
          <div class="column is-half has-text-centered">
            <div className="tile is-child notification is-info">
            <h1 className="title is-3">Sorry</h1>
            <p class="bd-notification">
              This feature is not yet implemented.
              <br />
              Please come back later
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Login;
