import { Link } from "react-router-dom"
var addboton = require('./addboton.module.css')

export default function AddBoton(){
    //Me lleva hacia home
    return <div> 
        <Link to="/dogs/agregar"> 
            <button type="button" className={addboton.button}>
             Agregar
            </button>
        </Link>
    </div>
}