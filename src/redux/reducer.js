import { Action } from '@remix-run/router';
import { ADD_FAVORITES, FILTER, DELETE_FAVORITES, ORDER } from './type'


const initialState = {
    myFavorites: [],
    allCharacters: [],
}

export default function rootReducer(state = initialState, { type, payload }) {
    /*let array = [];*/
    switch (type) {
        case ADD_FAVORITES:
            /* array = [...state.myFavorites]
             array.push(payload)
             return {
                 ...state,
                 myFavorites: array
             }*/
            return {
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.allCharacters, payload]
            }
        case DELETE_FAVORITES:
            const filtered = state.myFavorites.filter(fav => fav.id !== payload)
            return {
                ...state,
                myFavorites: filtered
            }
        case FILTER:
            const charactersCopy = [...state.allCharacters];
            const filteredCharacters =
                payload === 'All' ? charactersCopy : charactersCopy.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            const orderCopy = [...state.allCharacters]
            const order = orderCopy.sort((a, b) => {
                if (payload === 'Ascendente') {
                    orderCopy.sort((a, b) => a.id - b.id)
                }
                else {
                    orderCopy.sort((a, b) => b.id - a.id)
                }
                return {
                    ...state,
                    myFavorites: order
                }
            })
            break;
        default:
            return state;
    }
}
