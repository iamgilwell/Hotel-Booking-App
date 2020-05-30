import React from 'react';
import Header from './components/Header';
import Slider from './components/Home/Slider';
import AboutUsHome from './components/Home/AboutUsHome';
import DiscoverourServices from './components/OurServices/DiscoverourServices'
import Testimonials from './components/Home/Testimonials'
import Blogs from './components/Home/Blogs';
import Rooms from './components/Rooms'
import Footer from './components/Footer'
import Search from './components/Home/Search';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <AboutUsHome />
      <DiscoverourServices />
      <Rooms />
      <Testimonials />
      <Blogs />
      <Footer />
      <Search />
    </div>
  );
}

export default App;
