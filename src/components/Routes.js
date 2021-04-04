import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <LoginPage />
        </Route>
        <Route exact path = {"/navers"}>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default Routes;