import { Route, Switch } from "react-router-dom";

import Login from "./scenes/Autentification/Login/Login";
import Register from "./scenes/Autentification/Register/Register";
import RecordScene from "./scenes/Records";
import Header from "./containers/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
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
