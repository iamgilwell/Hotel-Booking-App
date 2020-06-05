import { GET_ALL_ROOMS } from "./actionTypes"

export function getAllRooms(payload) {
    return { type: GET_ALL_ROOMS, payload }
}