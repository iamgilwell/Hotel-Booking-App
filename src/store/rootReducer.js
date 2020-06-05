import { combineReducers } from "redux"
import room from '../domains/Rooms/reducer'

const rootReducer = combineReducers({
    room
})

export default rootReducer