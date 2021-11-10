import { Link } from "react-router-dom"
var home = require('./home.module.css')


export default function Home(){


    //Me lleva hacia home
    return <div className={home.container}> 
       <Link to="/dogs">
        <img src="https://relativobranding.com/pi/dog.png" className={home.item1} width="600px" height="500px"/>
        </Link>
            <div className={home.item2}>
            <img src="https://relativobranding.com/pi/logo_guau.png" height="175px"/>
             <Link to="/dogs"> 
              <button type="button" className={home.button}>
                 Ingresar
              </button>
             </Link>
            </div>      
    </div>
}