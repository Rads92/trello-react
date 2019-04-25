import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import routes from "./routes";
import NoMatch from "./components/NoMatch/index";

function App() {
  const routesToRender = [];
  routes.forEach((route, key) => {
    const nestedRoutes = route.children.map((nestedRoute, nestedKey) => (
      <Route
        {...nestedRoute}
        path={route.main.path + nestedRoute.path}
        key={nestedKey}
      />
    ));

    routesToRender.push(<Route {...route.main} key />, ...nestedRoutes);
  });

  return (
    <div className="App">
      <Switch>
        {routesToRender}
        <Route key={"no-match"} component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
