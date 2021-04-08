import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CreateNavePage from "../pages/CreateNavePage";

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
        <Route exact path = {"/navers/create"}>
          <CreateNavePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default Routes;