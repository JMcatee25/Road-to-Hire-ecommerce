import React from "react";
import { Route } from "react-router-dom";
import auth0Client from "../auth0/Auth";

function SecuredRoute(props) {
  const { component: Component, path, isSwitched, isEditing } = props;
  return (
    <Route
      path={path}
      render={() => {
        if (!auth0Client.isAuthenticated()) {
          auth0Client.signIn();
          return <div />;
        }
        return (
          <Component
            props={props}
            isSwitched={isSwitched}
            isEditing={isEditing}
          />
        );
      }}
    />
  );
}

export default SecuredRoute;
