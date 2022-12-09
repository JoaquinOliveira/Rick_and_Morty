import { ADD_FAVORITES, DELETE_FAVORITES } from './type'


const initialState = {
    myFavorites: [],
}

export default function rootReducer(state = initialState, { type, payload }) {
    let array = [];
    switch (type) {
        case ADD_FAVORITES:
            array = [...state.myFavorites]
            array.push(payload)
            return {
                ...state,
                myFavorites: array
            }
            /* return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            } */
        case DELETE_FAVORITES:
            const filtered = state.myFavorites.filter(fav => fav.id !== payload )
            return {
                ...state,
                myFavorites: filtered
            }
        default:
            return state;
    }
}
