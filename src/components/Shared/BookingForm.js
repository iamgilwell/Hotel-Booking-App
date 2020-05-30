import React, { Component } from 'react'

class BookingForm extends Component {
    render() {
        return (
            <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
                <div className="booking-form">
                    <h3>Booking Your Hotel</h3>
                    <form action="#">
                        <div className="check-date">
                            <label htmlFor="date-in">Check In:</label>
                            <input type="text" className="date-input" id="date-in" />
                            <i className="icon_calendar"></i>
                        </div>
                        <div className="check-date">
                            <label htmlFor="date-out">Check Out:</label>
                            <input type="text" className="date-input" id="date-out" />
                            <i className="icon_calendar"></i>
                        </div>
                        <div className="select-option">
                            <label htmlFor="guest">Guests:</label>
                            <select id="guest">
                                <option value="">2 Adults</option>
                                <option value="">3 Adults</option>
                            </select>
                        </div>
                        <div className="select-option">
                            <label htmlFor="room">Room:</label>
                            <select id="room">
                                <option value="">1 Room</option>
                                <option value="">2 Room</option>
                            </select>
                        </div>
                        <button type="submit">Check Availability</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default BookingForm