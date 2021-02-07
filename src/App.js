import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Home path="/Home" />
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
