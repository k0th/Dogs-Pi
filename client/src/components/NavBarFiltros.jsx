import Order from './Order'
import OrderRaza from './OrderRaza'
import Temperament from './Temperament'


var navbarfiltros = require('./navbar.module.css')

export default function NavBarFiltros(){
    return <div className={navbarfiltros.container1}>
        <div  className={navbarfiltros.item4}>
        </div>
        <div  className={navbarfiltros.item5}>
       <Order/>
        </div>
        <div  className={navbarfiltros.item6}>
       <OrderRaza/>
        </div>
        <div  className={navbarfiltros.item7}>
       <Temperament/>
        </div>
        <div  className={navbarfiltros.item4}>
        </div>
    </div>
}