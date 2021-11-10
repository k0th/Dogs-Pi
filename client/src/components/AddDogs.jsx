import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"

var adddogscs = require ('./adddogs.module.css')

export default function AddDogs(){
    // let temperamentsAdd = useSelector((state)=>state.dogstemperaments)

    const[dogs, setDogs] = useState({})
    let history = useHistory()
    function onInputChange(e){
        e.preventDefault()
        setDogs ({
            ...dogs,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3001/api/dogs", dogs).then(()=>[
            history.push('/dogs')
        ])
    }

    // let temp = ""

    // function onSelectChange(e){
    //     e.preventDefault()
    //     temp = e.target.value + "," + temp
    //     console.log(temp)
    // }

    return <div className={adddogscs.div}><form onSubmit={onSubmit} className={adddogscs.container}>
        <p>¡Gracias por usar nuestra aplicación!, agrega aqui un nuevo Dog</p>
        <label htmlFor="" className={adddogscs.label}>Nombre</label>
        <input onChange={onInputChange} name="name" type="text" value={dogs.name} className={adddogscs.input}></input>
        <label htmlFor="" className={adddogscs.label}>Imagen</label>
        <input onChange={onInputChange} name="image" type="text" value={dogs.image} className={adddogscs.input}></input>
        <label htmlFor="" className={adddogscs.label}>Altura</label>
        <input onChange={onInputChange} name="height" type="text" value={dogs.height} className={adddogscs.input}></input>
        <label htmlFor="" className={adddogscs.label}>Peso</label>
        <input onChange={onInputChange} name="weight" type="text" value={dogs.weight} className={adddogscs.input}></input>
        <label htmlFor="" className={adddogscs.label}>Edad</label>
        <input onChange={onInputChange} name="years" type="text" value={dogs.years} className={adddogscs.input}></input>
        <label htmlFor="" className={adddogscs.label}>Temperamento</label>
        <input onChange={onInputChange} name="temperament" type="text" value={dogs.temperament} className={adddogscs.input}></input>
        <input type="submit"  className={adddogscs.button} ></input>
        {/* <select name="select" onChange={onSelectChange}>
         {
           temperamentsAdd.map((el)=>{  
             return (
                 <option value={el.name}>{el.name}</option>
             )
           })  
         }
     </select> */}
    </form> 
   </div>
   
}