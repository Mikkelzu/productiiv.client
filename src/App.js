import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home/home';
import About from './pages/about/about';
import Services from './pages/services/services';
import NotFound from "./pages/notfound/notfound";
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import './App.css';
import FooterComponent from './page-components/footer.component'
import Pricing from "./pages/pricing/pricing";
import Profile from "./pages/app/profile/profile";
import Dashboard from "./pages/app/dashboard/dashboard"

export default function App() {
  
  return (
    <Router>
      <div>
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
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/services">
            <Services />
          </Route>

{/* APP ROUTES */}
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
{/* END APP ROUTES */}


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
