import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRooms } from '../../domains/Rooms/actions'

const Rooms = ({ dispatch, loading, rooms, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchRooms())
    }, [dispatch])

    // Show loading, error, or success state
    const renderRooms = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts.</p>
        return rooms.map(room => <p key={room.id} room={room} />)
    }
    return (
        <section className="hp-room-section" >

            <div className="container-fluid">
                <div className="hp-room-items">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="hp-room-item set-bg" data-setbg="/assets/img/room/room-b1.jpg">
                                <div className="hr-text">

                                    {renderRooms()}
                                    {
                                        Object.keys(rooms).map((obj, i) => {
                                            return (
                                                <div>
                                                    <h3> {(rooms)[obj].name}</h3>

                                                </div>
                                            )
                                        })}

                                    <h2>199$<span>/Pernight</span></h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="r-o">Size:</td>
                                                <td>30 ft</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Capacity:</td>
                                                <td>Max persion 5</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Bed:</td>
                                                <td>King Beds</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Services:</td>
                                                <td>Wifi, Television, Bathroom,...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="#" className="primary-btn">More Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hp-room-item set-bg" data-setbg="/assets/img/room/room-b2.jpg">
                                <div className="hr-text">
                                    <h3>Premium King Room</h3>
                                    <h2>159$<span>/Pernight</span></h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="r-o">Size:</td>
                                                <td>30 ft</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Capacity:</td>
                                                <td>Max persion 5</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Bed:</td>
                                                <td>King Beds</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Services:</td>
                                                <td>Wifi, Television, Bathroom,...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="#" className="primary-btn">More Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hp-room-item set-bg" data-setbg="/assets/img/room/room-b3.jpg">
                                <div className="hr-text">
                                    <h3>Deluxe Room</h3>
                                    <h2>198$<span>/Pernight</span></h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="r-o">Size:</td>
                                                <td>30 ft</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Capacity:</td>
                                                <td>Max persion 5</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Bed:</td>
                                                <td>King Beds</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Services:</td>
                                                <td>Wifi, Television, Bathroom,...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="#" className="primary-btn">More Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="hp-room-item set-bg" data-setbg="/assets/img/room/room-b4.jpg">
                                <div className="hr-text">
                                    <h3>Family Room</h3>
                                    <h2>299$<span>/Pernight</span></h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="r-o">Size:</td>
                                                <td>30 ft</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Capacity:</td>
                                                <td>Max persion 5</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Bed:</td>
                                                <td>King Beds</td>
                                            </tr>
                                            <tr>
                                                <td className="r-o">Services:</td>
                                                <td>Wifi, Television, Bathroom,...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <a href="#" className="primary-btn">More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )

}

const mapStateToProps = state => ({
    loading: state.rooms.loading,
    rooms: state.rooms.rooms,
    hasErrors: state.rooms.hasErrors
})

export default connect(mapStateToProps)(Rooms)