import { useDispatch } from "react-redux";
import { ASCENDENTE, DESCENDENTE } from "../constants/orderconstants";
import { orderRaza } from "../store/actions";

var inputorder = require('./orders.module.css')

export default function OrderRaza(){
    let dispatch=useDispatch()
    function onSelectChange(e){
        dispatch(orderRaza(e.target.value)) // manda llamar la función sort y le paso el value del select
    }

    return <div>
        <select name="select" onChange={onSelectChange} className={inputorder.selectorder}>
            <option value={ASCENDENTE}>Peso mínimo</option>
            <option value={DESCENDENTE}>Peso máximo</option>
        </select>
    </div>
}