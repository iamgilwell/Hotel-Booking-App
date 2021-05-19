import { GET_ALL_ROOMS, GET_ROOMS_SUCCESS, GET_ROOMS_FAILURE, FILTER_ROOMS_BY_PRICE } from "./actionTypes"

export const getRooms = () => ({
    type: GET_ALL_ROOMS
})

export const getRoomsSuccess = rooms => ({
    type: GET_ROOMS_SUCCESS,
    payload: rooms
})

export const getRoomsFailure = () => ({
    type: GET_ROOMS_FAILURE
})

export const filterByprice = filters => ({
    type: FILTER_ROOMS_BY_PRICE,
    payload: filters
})


export function fetchRooms() {
    return async dispatch => {
      //  dispatch(getRooms())
        try {
            const response = await fetch('http://127.0.0.1:8000/api/')
            const data = await response.json()
            dispatch(getRoomsSuccess(data))
        } catch (error) {
            dispatch(getRoomsFailure())
        }
    }
}

export function filteredRooms(filters) {
    dispatch(filteredRooms(filters))
}