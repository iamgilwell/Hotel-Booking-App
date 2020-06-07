import { combineReducers } from "redux"
import roomReducer from '../domains/Rooms/reducer'

const rootReducer = combineReducers({
    rooms: roomReducer
})

export default rootReducer