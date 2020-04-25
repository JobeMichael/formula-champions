import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import SeasonDetails from "./routes/SeasonDetails";
import Seasons from "./routes/Seasons";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Seasons} />
        <Route exact path="/season/:year" component={SeasonDetails} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
