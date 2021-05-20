import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Experience} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
