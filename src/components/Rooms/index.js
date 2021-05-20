import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchRooms, getRoomsSuccess} from '../../domains/Rooms/actions';
import {Link} from 'react-router-dom';

const Rooms = (props) => {
  // const [filter, setFilter] = useState(0)
  const {dispatch, loading, rooms, hasErrors} = props;
  const [allRooms, setRooms] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await dispatch(fetchRooms());
      // ...
    }
    fetchData();

    setRooms(fetchData());
  }, []);

  //   useEffect(() => {
  //     //setRooms(dispatch(fetchRooms()));
  //     //dispatch(fetchRooms());
  //     const fetchAllRooms = () => dispatch(fetchRooms());
  //     fetchAllRooms();
  //     setRooms(fetchAllRooms)
  //   },[setRooms]);

  console.log('Index.js data----------> rooms', rooms);
  // Show loading, error, or success state
  const renderRooms = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return rooms.map((room) => <p key={room.id} room={room} />);
  };

  const RoomDivHolder = ({id, name, number_of_guests, price, room_number}) => {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="room-item">
          <img src="img/room/room-1.jpg" alt="" />
          <div className="ri-text">
            <h4>{name}</h4>
            <h3>
              {price}$<span> / Pernight</span>
            </h3>
            <table>
              <tbody>
                <tr>
                  <td className="r-o">Size:</td>
                  <td>30 ft</td>
                </tr>
                <tr>
                  <td className="r-o">Capacity:</td>
                  <td>Max persion 3</td>
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
            <Link to={`/room-details/${id}`} className="primary-btn">
              More Details
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            {rooms.map((room, id) => (
              <RoomDivHolder id={room.id} name={room.name} price={room.price} />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="room-pagination">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">
                Next <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.rooms.loading,
  rooms: state.rooms.rooms,
  hasErrors: state.rooms.hasErrors,
});
export default connect(mapStateToProps)(Rooms);
