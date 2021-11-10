import { Link } from "react-router-dom";

var card = require('./dog.module.css')

export default function Dog({name, image, temperament, weight, id}){
    return <div className={card.container}>
        <h3 className={card.h3}>{name}</h3>
        <img src={image} alt="img" height="170" width="250" className={card.img}/>
        <p className={card.title}>Temperamento:</p><p className={card.descriptions}>{temperament}</p>
        <p className={card.title}>Peso:</p><p className={card.descriptions}>{weight}</p>

        
        <Link to={`/dogs/${id}`}>
        <button className={card.button}>Ver Detalles</button>
        </Link>
        
    </div>
}

