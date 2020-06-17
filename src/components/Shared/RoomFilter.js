import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { filterByprice, filteredRooms } from '../../domains/Rooms/actions'

const handleFilter = () => {
    useEffect(() => {
        dispatch(filteredRooms())
    })
}


const RoomFilter = (props) => {
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
                    <button type="submit" onClick={handleFilter}>Check Availability</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    filters: state.filter
})

const mapDispatchToProps = (dispatch) => ({
    filters: dispatch(filterByprice)
})

// const mapDispatchToProps = (dispatch) => {
//     names: dispatch(actions.startGetNames())
// }

export default connect(mapStateToProps, mapDispatchToProps)(RoomFilter);