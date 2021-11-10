import { useState } from "react"
import { getDogsId, getDogsSearch } from "../store/actions"
import { useDispatch } from "react-redux"
var searchbar = require('./search.module.css')

export default function SearchBar(){
    const [search, setSearch] = useState('')
    let dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()

        if(Number(search) || search.length>8){
            dispatch(getDogsId(search))
             // Despacha la acción de búsqueda
        } else {
            dispatch(getDogsSearch(search))
            //Despacha la accion por text
        }
       
    }

    function onInputChange(e){
        setSearch(e.target.value) // Funcion para capturar el value del cambio de estado del input
    }
     // El return tiene un formulario, que recibe el parámetro a buscar
    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onInputChange} value={search} className={searchbar.input}></input> 
            <input type="submit" value="Buscar" className={searchbar.button}></input>
        </form>
    </div>
}