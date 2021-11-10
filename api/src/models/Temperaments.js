// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('temperament', {
//     id: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
// };
 const {DataTypes} = require('sequelize');

 module.exports = (sequelize) => {
     sequelize.define('temperaments', {
         id:{
            type:DataTypes.UUID, // ID dinámico
            allowNull:false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
         },
         name: {
             type: DataTypes.STRING,
             allowNull: false,
         }
     })
 }