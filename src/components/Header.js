
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';

const Header = () => {
  return (
    <Router>
      <div className="header bg-black p-2 text-white">
      <nav className="py-2">
        <ul className="flex just justify-center item-center">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="px-4">
            <Link to="/register">Register</Link>
          </li>

        </ul>
      </nav>
    </div>

    <div className="main-content">
    <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route  path="/login">
          <Login/>
        </Route>

        <Route path="/register">
         <Register/>
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default Header
