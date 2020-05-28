import React from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar';

function App() {
  console.log("This is React");

  return (


    <header className="App-header">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
      </Switch>


    </header>

  );
}

export default App;
