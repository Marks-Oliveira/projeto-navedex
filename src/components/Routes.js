import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "../pages/LoginPage";

const Routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default Routes;