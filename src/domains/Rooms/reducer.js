import { GET_ALL_ROOMS, GET_ROOMS_SUCCESS, GET_ROOMS_FAILURE, FILTER_ROOMS_BY_PRICE } from "./actionTypes"
const initialState = {
    rooms: [],
    loading: false,
    hasErrors: false,
    filter: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ROOMS:
            console.log(action.type);
            return { ...state, loading: true }
        case GET_ROOMS_SUCCESS:
            return { ...state,rooms: action.payload, loading: false, hasErrors: false }
        case GET_ROOMS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        case FILTER_ROOMS_BY_PRICE:

            return { ...state, filter: action.payload.filters }
        default:
            return state;
    }

}

export default reducer