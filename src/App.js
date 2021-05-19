import React from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Home from './components/Home/Home';
import Rooms from './components/Rooms';
import RoomDetails from './components/Rooms/RoomDetails';
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
      <Route path="/room-details" component={RoomDetails} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
