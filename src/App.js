import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from './pages/home/home';
import About from './pages/about/about';
import Services from './pages/services/services';
import NotFound from "./pages/notfound/notfound";
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import './App.css';
import FooterComponent from './page-components/footer.component'

export default function App() {

  return (
    <Router>

      <div>
        <header className="page-header">
          <div className="container">
            <div className="top-wrapper">
              <div className="logo-wrapper d-inline-block">
                <Link to="/">
                  <img src="https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg" alt="NestJS - A progressive Node.js framework" />
                </Link>
              </div>

              <nav className="pull-right">
                <ul className="nav-wrapper">
                  <li className="hidden-xs">
                    <NavLink activeClassName="active" to="/about">
                      ABOUT
                      </NavLink>
                  </li>
                  <li className="hidden-sm">
                    <NavLink activeClassName="active" to="/services">
                      SERVICES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/pricing">
                      PRICING
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/login">
                      LOGIN
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" to="/signup">
                      SIGN UP!
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="main-wrapper text-align-center">
                <h1 className="hero-title"> Productiiv.io</h1>
                <h4 className="hero-subtitle"> A producitivity platform to keep track of your important business! </h4>
                <div className="buttons-wrapper">
                  <h3>Check out our current platform services and give them a quick read!</h3>
                  <Link to="/" className="btn btn-secondary d-inline-block">Activity Time Tracker</Link>
                  <Link to="/" className="btn btn-secondary d-inline-block">Break Scheduler</Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>

      <FooterComponent />
    </Router>
  );
}
