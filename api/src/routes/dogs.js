//const { default: axios } = require('axios');
const {Router} = require('express'); // mando llamar a express router
const router = Router(); // le asigno a router la ejecución de Router.express
const axios = require('axios'); // hace las perticiones http
const {Dogs} = require('../db'); // me traigo la base de datos local
const {API_KEY} = process.env;

/// OBTIENE UN LISTADO DE TODOS LOS DOGS
router.get("/", (req, res, next)=>{
    let razasApi =  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    let razasDb = Dogs.findAll();
    let newArray = [];
    let newArrayDb = [];
    Promise.all([
        razasApi,
        razasDb
    ]).then((response)=>{
        const [razasApi, razasDb] = response
       // razasApi.data[0].name
       let razas = razasApi.data
       for (var i=0; i<razas.length; i++ ){
        let obj = {
            id: razas[i].id,
            name: razas[i].name,
            image: razas[i].image.url,
            temperament: razas[i].temperament,
            weight: razas[i].weight.metric
        }
        newArray.push(obj)
       }
       for (var i=0; i<razasDb.length; i++ ){
        let obj = {
            id:razasDb[i].id,
            name: razasDb[i].name,
            image: razasDb[i].image,
            temperament: razasDb[i].temperament,
            weight: razasDb[i].weight
        }
        newArrayDb.push(obj)
       }
       let unionArray = [...newArray, ...newArrayDb]
       res.send(unionArray)
    })
})

/// OBTIENE UN LISTADO DE LOS DOGS INGRESADOS POR QUERY
router.get("/dogs/", (req, res, next)=>{
    const {name} = req.query
    let nombreApi = axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    let nombreDb = Dogs.findAll();
    let newArray=[];
    let newArrayDb = [];
    Promise.all([
        nombreApi,
        nombreDb
    ]).then((response)=>{
        const [nombreApi, nombreDb] = response;
        let nombres = nombreApi.data;
        for(var i = 0; i<nombres.length; i++){
            let obj={
                name: nombres[i].name,
                image: nombres[i].image.url,
                temperament: nombres[i].temperament,
                weight: nombres[i].weight.metric
            }
            newArray.push(obj)
        }
        for (var i=0; i<nombreDb.length; i++ ){
            let obj = {
                id:nombreDb[i].id,
                name: nombreDb[i].name,
                image: nombreDb[i].image,
                temperament: nombreDb[i].temperament,
                weight: nombreDb[i].weight
            }
            newArrayDb.push(obj)
           }
           let unionArray = [...newArray, ...newArrayDb]
        let totalArray = []
        for(var i=0; i < unionArray.length; i++){
            let names=unionArray[i].name
            if(names.includes(name)){
                totalArray.push(unionArray[i])
            }
        } 
        if(totalArray.length === 0){
            res.send([{name: "No se encuentra el nombre de la raza que buscas", 
                       image:"https://www.relativobranding.com/pi/notfound.jpg",
                       weight: "Ninguno",
                       temperament:"Ninguno"
                    }])
        } else{
            res.status(200).send(totalArray)
        }
    })
})

/// OBTIENE UN NUEVO PERRITO POR ID
router.get("/dogs/:id", (req, res, next)=>{
    const { id } = req.params
    let razasidApi =  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    let razasidDb = Dogs.findAll();
    let newArrayid = [];
    let newArrayDb = [];
    Promise.all([
        razasidApi,
        razasidDb
    ]).then((response)=>{
        const [razasidApi, razasidDb] = response
       let razas = razasidApi.data
       for (var i=0; i<razas.length; i++ ){
        let obj = {
            id: razas[i].id,
            name: razas[i].name,
            image: razas[i].image.url,
            temperament: razas[i].temperament,
            weight: razas[i].weight.metric,
            height: razas[i].height.metric,
            years: razas[i].life_span
        }
        newArrayid.push(obj)
       }
       for (var i=0; i<razasidDb.length; i++ ){
        let obj = {
            id:razasidDb[i].id,
            name: razasidDb[i].name,
            image: razasidDb[i].image,
            temperament: razasidDb[i].temperament,
            weight: razasidDb[i].weight
        }
        newArrayDb.push(obj)
       }
       let unionArray = [...newArrayid, ...newArrayDb]
       let totalArrayid = []
       for(var i=0; i<unionArray.length; i++){
           let idraza = unionArray[i].id
           if (idraza === id){
              totalArrayid.push(unionArray[i])
           }
           if (idraza === parseInt(id)){
              totalArrayid.push(unionArray[i])
           }
       } 
       if(totalArrayid.length === 0){
           res.send([
               {name: "No se encuentra el nombre de la raza que buscas", 
                image:"https://www.relativobranding.com/pi/notfound.jpg",
                weight: "Ninguno",
                temperament:"Ninguno"
        }])
       } else{
           res.status(200).send(totalArrayid)
       }
    })
 
})

// /// OBTIENE UN NUEVO PERRITO POR ID
// router.get("/dogs/:id", (req, res, next)=>{
//     const { id } = req.params
//     let razasidApi =  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//     let razasidDb = Dogs.findAll();
//     let newArrayid = [];
//     let newArrayDb = [];
//     Promise.all([
//         razasidApi,
//         razasidDb
//     ]).then((response)=>{
//         const [razasidApi, razasidDb] = response
//        let razas = razasidApi.data
//        for (var i=0; i<razas.length; i++ ){
//         let obj = {
//             id: razas[i].id,
//             name: razas[i].name,
//             image: razas[i].image.url,
//             temperament: razas[i].temperament,
//             weight: razas[i].weight.metric,
//             height: razas[i].height.metric,
//             years: razas[i].life_span
//         }
//         newArrayid.push(obj)
//        }
//        let totalArrayid = []
//        for(var i=0; i<newArrayid.length; i++){
//            let idraza = newArrayid[i].id
//            //console.log(idraza)
//            if(idraza === parseInt(id)){
//                totalArrayid.push(newArrayid[i])
//                //console.log("Lo encontré")
//            }
//        } 
//        if(totalArrayid.length === 0){
//            res.send([{name: "No se encuentra el nombre de la raza que buscas", image:"https://www.relativobranding.com/notfoundperrito.jpg"}])
//        } else{
//            res.status(200).send(totalArrayid)
//        }
//     })
 
// })

/// CREA UN NUEVO DOG
// router.post("/", async (req, res, next)=>{
//     let razasidApi =  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
//     let razasidDb = Dogs.findAll();
//     Promise.all([
//         razasidApi,
//         razasidDb
//     ]).then(async (response)=>{
//         const[razasidApi, razasDb]= response
//         let sumasArray = [...razasidApi, ...razasDb]
//         let longituArray = sumasArray.length
//         console.log(longituArray)
//         let id = longituArray + 1
//         const {name, height, weight, years} = req.body;
//         const newDog = await Dogs.create({  //creamos una nueva raza en la base de datos
//             id,
//             name, 
//             height,
//             weight,
//             years,
//         })
//         res.status(201).send(newDog)
//     })
//     // try {
//     //     const {name, height, weight, years, id} = req.body;
//     //     const newDog = await Dogs.create({  //creamos una nueva raza en la base de datos
//     //         id,
//     //         name, 
//     //         height,
//     //         weight,
//     //         years,
//     //     })
//     //     res.status(201).send(newDog)
//     // } catch (e) {
//     //     next(e)
//     // }
// })

module.exports=router; //exporto las rutas


// return Dogs.findAll().then((perros) =>{ // metodo de sequelize, busca todos los elementos
//     res.send(perros)
// }).catch ((e) =>{
//     next(e)
// })

router.post("/", async (req, res, next)=>{
    try {
        const {name, image, height, weight, years, temperament } = req.body;
        const newDog = await Dogs.create({  //creamos una nueva raza en la base de datos
            name,
            image, 
            height,
            weight,
            years,
            temperament,
        })
        res.status(201).send(newDog)
    } catch (e) {
        next(e)
    }
})