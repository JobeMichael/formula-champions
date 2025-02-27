import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Layout from "./components/Layout";
import { AppContext } from "./context/AppContext";
import { useAppContext } from "./hooks/useAppContext";
import Champions from "./routes/Champions";
import SeasonDetails from "./routes/SeasonDetails";

function App() {
  const context = useAppContext();

  return (
    <AppContext.Provider value={context}>
      <Layout>
        <Router basename="/">
          <Switch>
            <Route exact path="/" component={Champions} />
            <Route exact path="/season/:year" component={SeasonDetails} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
