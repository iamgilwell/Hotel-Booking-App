import React, { Component } from 'react'
import Header from '../Header';
import Slider from './Slider';
import AboutUsHome from './AboutUsHome';
import DiscoverourServices from '../OurServices/DiscoverourServices'
import Testimonials from './Testimonials'
import Blogs from './Blogs';
import Rooms from '../Rooms'
import Footer from '../Footer'
import Search from './Search';

class Home extends Component {
    render() {
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
        )
    }
}

export default Home;
