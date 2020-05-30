import React, { Component } from 'react'
import BookingForm from '../Shared/BookingForm'

const Slider = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-text">
                            <h1>React Django Hotel Booking App</h1>
                            <p>Here are the best hotel booking sites, including recommendations for international
                            travel and for finding low-priced hotel rooms.</p>
                            <a href="#" className="primary-btn">Discover Now</a>
                        </div>
                    </div>
                    <BookingForm />
                </div>
            </div>
            <div className="hero-slider owl-carousel">
                <div className="hs-item set-bg" data-setbg="/assets/img/hero/hero-1.jpg"></div>
                <div className="hs-item set-bg" data-setbg="/assets/img/hero/hero-2.jpg"></div>
                <div className="hs-item set-bg" data-setbg="/assets/img/hero/hero-3.jpg"></div>
            </div>
        </section>
    )
}

export default Slider