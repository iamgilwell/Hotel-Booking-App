import React, { Component } from 'react'

class Testimonials extends Component {
    render() {
        return (
            <section className="testimonial-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Testimonials</span>
                                <h2>What Customers Say?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="testimonial-slider owl-carousel">
                                <div className="ts-item">
                                    <p>After a construction project took longer than expected, my husband, my daughter and I
                                    needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                                    city, neighborhood and the types of housing options available and absolutely love our
                                vacation at Sona Hotel.</p>
                                    <div className="ti-author">
                                        <div className="rating">
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star-half_alt"></i>
                                        </div>
                                        <h5> - Alexander Vasquez</h5>
                                    </div>
                                    <img src="/assets/img/testimonial-logo.png" alt="" />
                                </div>
                                <div className="ts-item">
                                    <p>After a construction project took longer than expected, my husband, my daughter and I
                                    needed a place to stay for a few nights. As a Chicago resident, we know a lot about our
                                    city, neighborhood and the types of housing options available and absolutely love our
                                vacation at Sona Hotel.</p>
                                    <div className="ti-author">
                                        <div className="rating">
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star"></i>
                                            <i className="icon_star-half_alt"></i>
                                        </div>
                                        <h5> - Alexander Vasquez</h5>
                                    </div>
                                    <img src="/assets/img/testimonial-logo.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default Testimonials