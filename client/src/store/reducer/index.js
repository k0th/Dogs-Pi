import { ASCENDENTE } from '../../constants/orderconstants';
import { GET_DOGS, SEARCH_ID_DOGS, SEARCH_NAME_DOGS, SORT, SORT_RAZA, TEMPERAMENTS_DOGS, SORT_TEMPERAMENTS } from '../actions';

const initialState = {
    dogs:[],
    dogsfiltered:[],
    dogstemperaments:[],
}

export default function reducer(state = initialState, action){
    switch(action.type) {
        case GET_DOGS:
        return {
                ...state,
                dogs: action.payload,
                dogsfiltered:action.payload
            }
        case SEARCH_NAME_DOGS:
                return {
                ...state,
                 dogsfiltered: action.payload,
            }
        case SEARCH_ID_DOGS:
                return {
                ...state,
                 dogsfiltered: action.payload,
                }
        case SORT:
            let orderDogs = [...state.dogs]
            orderDogs = orderDogs.sort((a,b)=>{
                    if(a.name < b.name) {
                        return action.payload === ASCENDENTE ? -1 : 1
                    }
                    if(a.name > b.name){
                        return action.payload === ASCENDENTE ? 1 : -1
                    }
                    return 0
            })
            return {
                ...state,
                dogsfiltered: orderDogs
            }
        case SORT_RAZA:
            let orderRaza = [...state.dogs]
            orderRaza = orderRaza.sort((a,b)=>{
                if(parseInt(a.weight) < parseInt(b.weight)){
                    return action.payload === ASCENDENTE ? -1 : 1
                }
                if(parseInt(a.weight) > parseInt(b.weight)){
                    return action.payload === ASCENDENTE ? 1 : -1 
                }
                return 0
            })
            return{
                ...state,
                dogsfiltered: orderRaza
            }
        case TEMPERAMENTS_DOGS:
            return {
                ...state,
                dogstemperaments: action.payload
            }
        case SORT_TEMPERAMENTS:
            let orderTemperaments = [...state.dogs]
            orderTemperaments = orderTemperaments.filter((element)=>{
                let temp = element.temperament
                if(temp){
                    let temp = element.temperament.split(",")
                    if(temp.includes(action.payload)){
                        return element
                    }
                }
            })
            return {
                ...state,
                dogsfiltered: orderTemperaments
            }
        default:
            return state
    }
}