const {Router} = require('express');
const router = Router();
const { default: axios } = require('axios');
//const {axios} = require('axios'); // requiero axios para mandar la info
const {Temperaments} = require('../db') // me traigo la base de datos local
const {API_KEY} = process.env;


/// TRAE LOS TEMPERAMENTOS DE LOS PERROS, LOS INGRESA A LA BASE DE DATOS Y LOS DEVUELVE
// router.get('/',  (req, res, next)=>{
//     let result = []
//     axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
//         .then( async (response)=>{
//                 let alltemperaments = response.data
//                 let newarray = []
//                 for(var i = 0; i < alltemperaments.length; i++){
//                     let name = alltemperaments[i].temperament
//                     if(name){
//                         let nametemperament = name.split(",")
//                         for(var j = 0; j < nametemperament.length; j++){
//                             let arraytemperament = nametemperament[j]
//                             console.log(arraytemperament)
//                             if(!newarray.includes(arraytemperament))
//                             newarray.push(arraytemperament)
//                             console.log(newarray) 
//                         }
//                     } 
//                 }
//                 for(var i = 0; i < newarray.length; i++){
//                     let name = newarray[i]
//                     if(name){
//                         let obj = {
//                             name: name
//                         }
//                         await Temperaments.create(obj)
//                     }
//                 }
//                 Temperaments.findAll().then((response)=>{
//                     res.send(response)
//                 })
//             })
//     //     function DataBase(){
//     //         await Temperaments.findAll().then((response)=>{
//     //             result = response
//     //     })
//     // } 
//     // res.send(DataBase())
// })

router.get('/',  (req, res, next)=>{
    Temperaments.findAll()
    .then((response)=>{
        if(response.length === 0){
            axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
            .then((responseApi)=>{
                let alltemperaments = responseApi.data
                let newarray = []
                for(var i = 0; i < alltemperaments.length; i++){
                    let name = alltemperaments[i].temperament
                    if(name){
                        let nametemperament = name.split(",")
                        //console.log(nametemperament)
                        for(var j = 0; j < nametemperament.length; j++){
                            let arraytemperament = nametemperament[j].trim()
                            //console.log(arraytemperament)
                            if(!newarray.includes(arraytemperament))
                            newarray.push(arraytemperament)
                            //console.log(newarray) 
                        }
                    } 
                }
                for(var i = 0; i < newarray.length; i++){
                    let name = newarray[i]
                    if(name){
                        let obj = {
                            name: name
                        }
                        Temperaments.create(obj)
                    }
                }
                res.send("Ya ingrese los datos a la base de datos")
            })
        }else{
            Temperaments.findAll().then((response)=>{
                res.send(response)
            })
        }
    });
})

// router.get('/',  (req, res, next)=>{
//     Temperaments.findAll()
//     .then((response)=>{
//         if(response.length === 0){
//             axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
//             .then( async (responseApi)=>{
//                 let alltemperaments = responseApi.data
//                 for(var i =0; i < alltemperaments.length; i++){
//                     let name = alltemperaments[i].temperament
//                     if(name){
//                         let obj = {
//                             name: name
//                         }
//                         await Temperaments.create(obj)
//                     }
//                 }
//                 res.send("Ya ingrese los datos a la base de datos")
//             })
//         }else{
//             Temperaments.findAll().then((response)=>{
//                 res.send(response)
//             })
//         }
//     });
// })

// router.get("/temp", async(req, res, next) =>{
//     Temperaments.findAll().then((response)=>{
//         res.send(response)
//     })
// })

module.exports = router;