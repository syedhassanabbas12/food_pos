import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from "../config/routes";
import { isLoggedIn } from "../helpers/auth-helper";

function AppRouter() {
  return (
    <Switch>
      {isLoggedIn()
        ? // ONLY AUTHENTICATED ROUTES AVAILABLE IF LOGGED IN
          Routes.filter((route) => route.requireAuthentication).map((route) => (
            <Route
              key={route.name}
              path={route.path}
              component={route.component}
            />
          ))
        : // ONLY NON-AUTHENTICATED ROUTES AVAILABLE IF LOGGED OUT
          Routes.filter((route) => !route.requireAuthentication).map(
            (route) => {
              return (
                <Route
                  key={route.name}
                  path={route.path}
                  component={route.component}
                />
              );
            }
          )}

      <Route path="*">
        {isLoggedIn() ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
}

export default AppRouter;
