import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";
import PublicRouter from "./routes/public.route";
import PrivateRouter from "./routes/private.route";
import "./App.css";
import { Icon } from "@ant-design/compatible";

function App() {
  // localStorage.setItem("token", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => {
          console.log(route.routes);
          return route.routes ? (
            <PrivateRouter key={i} {...route} />
          ) : (
            <PublicRouter key={i} {...route} />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
