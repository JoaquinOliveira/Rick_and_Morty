import { ADD_FAVORITES, DELETE_FAVORITES } from "./type"


export function addFavorites(id) {
    return {
        type: ADD_FAVORITES,
        payload: id
    }
}

export function deleteFavorites(id) {
        return {
            type: DELETE_FAVORITES,
            payload: id
        }
}

