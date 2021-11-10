import { useDispatch } from "react-redux";
import { ASCENDENTE, DESCENDENTE } from "../constants/orderconstants";
import { order } from "../store/actions";

var inputorder = require('./orders.module.css')

export default function Order(){
    let dispatch=useDispatch()
    function onSelectChange(e){
        dispatch(order(e.target.value)) // manda llamar la función sort y le paso el value del select
    }

    return <div>
        <select name="select" onChange={onSelectChange} className={inputorder.selectorder}>
            <option value={ASCENDENTE} >Orden Ascendente</option>
            <option value={DESCENDENTE}>Orden Descendente</option>
        </select>
    </div>
}