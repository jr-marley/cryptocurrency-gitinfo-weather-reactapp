import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Weather1 from './pages/weatherpage'
import Github from './pages/githubpage'
import Weather from './pages/currency';
import Dashboard from './pages/dashboardpage';
import Feature from './components/feature'
import News from './components/news'
import About from './components/about'
import Allpage from './pages/allprojectpage'
//import Contact from './components/contact'
import Infoo from './pages/infopage'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           <Route exact path="/">
            <Allpage />
          </Route>
          <Route exact path="/crypto">
            <Weather/>
          </Route>
      

          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/feature">
            <Feature />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/info">
            <Infoo />
          </Route>
          <Route path="/weather1">
            <Weather1/>
          </Route>
          <Route path="/github">
            <Github/>
          </Route>
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;