import { Route, Switch } from "react-router-dom";

import Login from "./scenes/Autentification/Login/Login";
import Register from "./scenes/Autentification/Register/Register";
import RecordScene from "./scenes/Records";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/records" component={RecordScene} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
