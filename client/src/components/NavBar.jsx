import AddBoton from "./AddBoton";
import AddDogs from "./AddDogs";
import SearchBar from "./SearchBar";

var navbar = require('./navbar.module.css')

export default function NavBar(){
    return <div className={navbar.container}>
        <div className={navbar.item1}>
        <img src="https://relativobranding.com/pi/logo_guau.png" height="75px" />
        </div>
        <div className={navbar.item2}>
        <SearchBar/>
        </div>
        <div className={navbar.item3} >
        <AddBoton/>
        </div>
    </div>
}