import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Rooms from './components/Rooms';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/rooms" component={Rooms} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
