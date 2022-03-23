import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Switch, Router } from "react-router";

function App() {
  return (
    <>
      <Switch>
        <Router>
          <Route path='/' component={Login}/>
          <Route path='/home' component={Home}/>
        </Router>
      </Switch>
    </>
  );
}

export default App;
