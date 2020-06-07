import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//global rest
import "normalize.css";

//global style
import { StyledGlobal } from "./components/css/Global";

//template
import { Header } from "./components/Header";

//pages
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Archive } from "./pages/Archive";

const App = () => {
  return (
    <>
      <StyledGlobal />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/projects/archive" component={Archive}></Route>
          <Route exact path="/contact" component={Contact}></Route>

          <Route path="/" component={() => <div>404</div>}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
