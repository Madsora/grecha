import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './containers/Autentification/Login/Login';
import Register from './containers/Autentification/Register/Register';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path='/sign-in' component={Login} />
          <Route path='/sign-up' component={Register}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
