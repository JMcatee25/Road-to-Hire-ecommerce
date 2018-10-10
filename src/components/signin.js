import React from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./../auth0/Auth";
import "./../css/output.css";

function SignIn(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace(
      "https://jmcatee25.github.io/Road-to-Hire-ecommerce/"
    );
  };
  return (
    <nav className="auth0Container">
      {!auth0Client.isAuthenticated() && (
        <button className="signInButton" onClick={auth0Client.signIn}>
          Sign In
        </button>
      )}
      {auth0Client.isAuthenticated() && (
        <div>
          <label>{auth0Client.getProfile().name}</label>
          <button
            onClick={() => {
              signOut();
            }}
            className="signInButton"
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default withRouter(SignIn);
