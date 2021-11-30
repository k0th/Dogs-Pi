import axios from 'axios';
export const GET_DOGS = 'GET_DOGS';
export const SEARCH_NAME_DOGS = 'SEARCH_NAME_DOGS';
export const SEARCH_ID_DOGS = 'SEARCH_ID_DOGS';
export const TEMPERAMENTS_DOGS = 'TEMPERAMENTS_DOGS';
export const SORT = 'SORT'
export const SORT_RAZA = 'SORT_RAZA'
export const SORT_TEMPERAMENTS = 'SORT_TEMPERAMENTS'


//Funcipon que manda cargar los perritos
export function getDogs(){
    return function(dispatch){
        return axios.get("http://localhost:3001/api/dogs/").then((response)=>{
            dispatch({
                type: GET_DOGS,
                payload: response.data,
            })
        })
    }
}
// Función de ordenamiento por Nombre
export function getDogsSearch(name){
    return function(dispatch){
        return axios.get("http://localhost:3001/api/dogs/dogs?name=" + name).then((response)=>{
            dispatch({
                type: SEARCH_NAME_DOGS,
                payload: response.data,
            })
        })
    }
}

//Función de ordenamiento por ID
export function getDogsId(id){
    return function(dispatch){
        return axios.get("http://localhost:3001/api/dogs/dogs/" + id).then((response)=>{
            dispatch({
                type: SEARCH_ID_DOGS,
                payload: response.data,
            })
        })
    }
}

//Función de ordenamiento por nombre
export function order(order){
    return {
        type: SORT,
        payload: order
    }
}

//Función de ordenamiento de Raza
export function orderRaza(orderRaza){
    return {
        type: SORT_RAZA,
        payload: orderRaza
    }
}
//Función de ordenamiento de temperamentos 
export function orderTemperaments(orderTemperaments){
    return {
        type: SORT_TEMPERAMENTS,
        payload: orderTemperaments
    }
}
// Función que pide a los temperamentos y los agrega a la base de datos
export function temperamentDogs(){
    return function(dispatch){
        return axios.get("http://localhost:3001/api/temperament").then((response)=>{
            dispatch({
                type: TEMPERAMENTS_DOGS,
                payload: response.data,
            })
        })
    }
}
