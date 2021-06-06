import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./view/LandingPage/LandingPage";
import NavbarPage from "./view/NavbarPage/NavbarPage";
import SalesPage from "./view/SalesPage/SalesPage";
import ProductPage from "./view/ProductPage/ProductPage";

import "./App.css";
function App() {
  return (
    <Router>
      <NavbarPage />
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/sales">
            <SalesPage />
          </Route>
          <Route exact path="/product">
            <ProductPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
