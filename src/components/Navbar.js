import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navBar">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/rooms'}>Rooms</Link></li>
                    <li><Link to={'/about-us'}>About Us</Link></li>
                    <li><Link to={'/blogs'}>Blogs</Link></li>
                    <li><Link to={'/contact-us'}>Contact Us</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
