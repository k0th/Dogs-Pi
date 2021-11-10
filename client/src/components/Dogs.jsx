
import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {getDogs} from "../store/actions"
import Dog from "./Dog"
import Paginado from "./Paginado"

var dogsgrid = require('./dogs.module.css')

export default function Dogs(){
    let dogs = useSelector((state)=>state.dogsfiltered) // use selector para traer el estado
    let [currentPage, setCurrentPage] = useState(1) // número de la pagina actual
    let [dogsForPage, setdogsForPage] = useState(8) // número de perros por página
    let indexLastDog = currentPage * dogsForPage
    let indexFirstDog = indexLastDog - dogsForPage
    let currentDogs = dogs.slice(indexFirstDog, indexLastDog) // Corto con slice tomando en cuenta el primer y ultimo indice

    let paginado = (pageNumber) =>{ //Lleva el numero de la página 
        setCurrentPage(pageNumber)
    }

    let dispatch = useDispatch() // despacho una action
    useEffect (()=>{ // mando traer la action getDogs y la invoco
        dispatch(getDogs())
    }, []) // mantiene solo una ejecución para pintar el DOM
    
    return (<div className={dogsgrid.container}>

        {currentDogs.map((dog)=>{ //recorro el array de elementos y saco sus propiedades 
            return <Dog key={dog.id} id={dog.id} name={dog.name} image={dog.image} temperament={dog.temperament} weight={dog.weight} />
        })} 
        <div className={dogsgrid.pagination}>
        <Paginado
            dogs={dogs.length}
            dogsForPage={dogsForPage}
            paginado={paginado}
        /> 
        </div>
    </div>)
}


// export default function Dogs(){
//     let dogs = useSelector((state)=>state.dogsfiltered) // use selector para traer el estado
//     let dispatch = useDispatch() // despacho una action
//     useEffect (()=>{ // mando traer la action getDogs y la invoco
//         dispatch(getDogs())
//     }, []) // mantiene solo una ejecución para pintar el DOM
    
//     return <div>
//         {dogs.map((dog)=>{ //recorro el array de elementos y saco sus propiedades 
//             return <Dog key={dog.id} id={dog.id} name={dog.name} image={dog.image} temperament={dog.temperament} weight={dog.weight} />
//         })}  
//     </div>
// }

// const Dogs = () => {
//     const dispatch = useDispatch()
//     const dogs = useSelector(state => state.dogs)
//     dispatch(getDogs())
//     return (
//         <div>
//                 {
//                 dogs.map((element) =>{
//                 return <div>
//                 <img src={element.image} height="300" width = "500"/>
//                 <p>{element.name}</p>
//                 <p>{element.temperament}</p>
//                 <p>{element.weight}</p>
//                 </div>
//                 })
//                 }
//         </div>
//     )
// }
// export default Dogs
