import "./App.css";
import "./css/AdminCss/logIn.css";
import "./css/AdminCss/reset.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { routes } from "./Router";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    if (localStorage.getItem("login") != "null" && localStorage.getItem("password") != "null") {
      document.cookie = `token=${localStorage.getItem("token")}`
    }
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect exact from="/" to="log-in" />
          {routes.map((el, i) => {
            return (
              <Route
                key={i}
                path={el.path}
                exact={el.isExact}
                component={el.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
