var paginadocss = require('./dogs.module.css')

export default function Paginado({dogs, dogsForPage, paginado}){ // por props estas constantes
    let pageNumbers=[]

    for (let i=0; i<Math.ceil(dogs/dogsForPage); i++){ // divide los personajes entre los personajes por pagina (21.5)
        pageNumbers.push(i+1)
    }

    // De la división del for resultan los números de páginas que tenemos, entonces mapeamos cada número y  lo 
    // renderizamos para que muestre una númeración

    return (
        <nav className={paginadocss.pagination}>
        <ul className={paginadocss.ul}>
            {   
                pageNumbers && 
                pageNumbers.map(number =>{
                    return (
                    <li key={number} className={paginadocss.li}>
                         <a onClick={()=>paginado(number)} className={paginadocss.a}>{number}</a>
                    </li>
                )})
            }
        </ul>
    </nav>
    )
}