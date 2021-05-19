import React from 'react';
import {connect} from 'react-redux';

const RoomDetails =()=>{
    return(
        <div>
            <p>Room Details</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}


export default connect(mapStateToProps)(RoomDetails)