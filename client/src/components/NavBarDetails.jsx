import { Link } from 'react-router-dom'

var navbardetails = require('./navbar.module.css')

export default function NavBarDetails(){
    return <div className={navbardetails.container}>
        <div className={navbardetails.item1}>
        <img src="https://relativobranding.com/pi/logo_guau.png" height="75px" />
        </div>
        <div className={navbardetails.item2}>
        <Link to="/dogs">
        <button className={navbardetails.button}>Regresar</button>
        </Link>
        </div>
    </div>
}

