import { GET_ALL_ROOMS } from "./actionTypes"

const initialState = {
    rooms: []
}

const reducer = (state = initialState, action) => {
    if (action.type === GET_ALL_ROOMS) {
        return Object.assign({}, state, {
            rooms: state.rooms.concat(action.payload)
        })
    }
    return state;
}

export default reducer