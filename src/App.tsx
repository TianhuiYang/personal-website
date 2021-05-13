import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";

function App() {
  return (
    <Router>
      <Switch>
        <Router>
          <Route exact path="/" component={Experience} />
          <Route path="/experience" component={Experience} />
          <Route path="/about" component={About} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
