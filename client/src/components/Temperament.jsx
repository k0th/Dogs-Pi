import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { orderTemperaments, temperamentDogs } from "../store/actions"

var inputorder = require('./orders.module.css')

export default function Temperament(){
    let temperament = useSelector((state)=>state.dogstemperaments) // Me traigo el estado de temperamento
    
    let dispatch = useDispatch()  //Despacho una accion que manda llamar la base de datos local de temperamentos
    useEffect(()=>{
        dispatch(temperamentDogs())
    }, [])

    function onSelectChange(e){
        dispatch(orderTemperaments(e.target.value)) // Le paso el valor del value del option
    }

    return <div>
        <select name="select" onChange={onSelectChange} className={inputorder.selectorder}>
            {
              temperament.map((el)=>{
                return (
                    <option value={el.name}>{el.name}</option>
                )
              })  
            }
        </select>
    </div>
}