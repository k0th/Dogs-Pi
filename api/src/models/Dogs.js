// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le inyectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('dog', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     height: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     weight: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     years: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
//};

const {DataTypes} = require('sequelize'); // generamos una instancia de Sequelize

module.exports = (sequelize) =>{ // exportamos una función, donde le pasamos como parámetro sequelize
  sequelize.define('dogs', { // nombramos la base de datos y le ponemos las columnas que usará.
    id: {
      type:DataTypes.UUID, //ID dinamico
      allowNull: false,
      primaryKey: true, 
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    years: {
      type:DataTypes.STRING,
      allowNull: true,
    },
    temperament: {
      type:DataTypes.STRING,
      allowNull: true,
    },
  })
}
