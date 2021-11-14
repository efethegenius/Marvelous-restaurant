import Main from "./Main";
import { Lists } from "./Lists";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/food/:id" children={<Lists />}></Route>
    </Router>
  );
}
export default App;
