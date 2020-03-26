import React from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import NaviBar from "./Components/NavigationBar/NaviBar";
import Login from "./Components/UserAuth/Login";
import Dashboard from "./Components/Dashboard";

import "./App.css";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <NaviBar />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute exact path="/dashboard" component={Dashboard}>
        <Dashboard />
      </PrivateRoute>

      {/* <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path='/' component={NaviBar} />
      </Switch> */}
    </div>
  );
}

export default App;
