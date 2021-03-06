import { Route, Switch } from "react-router-dom";

import Login from "./scenes/Autentification/Login/Login";
import Register from "./scenes/Autentification/Register/Register";
import RecordScene from "./scenes/Records";
import Header from "./containers/Header";
import Footer from "./containers/Footer/Footer";
import AuthWrapper from "./containers/AuthWrapper";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/sign-in" component={Login} />
        <Route
          path="/sign-up"
          component={() => (
            <AuthWrapper role="admin" fallback="/sign-up">
              <Register />
            </AuthWrapper>
          )}
        />
        <Route
          path="/records"
          component={() => (
            <AuthWrapper role="registrator" fallback="/records">
              <RecordScene />
            </AuthWrapper>
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
