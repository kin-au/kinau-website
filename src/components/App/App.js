import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Error from "../Error/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" render={() => <Header />} exact />
      <Route render={() => <Error />} />
    </Switch>
  );
}

export default App;
