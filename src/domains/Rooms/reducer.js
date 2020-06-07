import { GET_ALL_ROOMS, GET_ROOMS_SUCCESS, GET_ROOMS_FAILURE } from "./actionTypes"
const initialState = {
    rooms: [],
    loading: false,
    hasErrors: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ROOMS:
            console.log(action.type);
            return { ...state, loading: true }
        case GET_ROOMS_SUCCESS:
            return { rooms: action.payload, loading: false, hasErrors: false }
        case GET_ROOMS_FAILURE:
            return { ...state, loading: false, hasErrors: true }

        default:
            return state;
    }

}

export default reducer