import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Layout from "./components/Layout";
import SeasonDetails from "./routes/SeasonDetails";
import Seasons from "./routes/Seasons";

function App() {
  return (
    <Layout>
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Seasons} />
          <Route exact path="/season/:year" component={SeasonDetails} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
