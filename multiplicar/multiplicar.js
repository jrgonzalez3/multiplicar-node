//requeridos
//const express = require("express"); //esto son instalables
//const archivo = require("./archivo"); //esto son dentro del sistema
const fs = require("fs"); //estos son propios del node

const colors = require('colors')

let listarTabla = (base, limite = 10) => {
  console.log('++++++++++++++++++++++++++++++'.green);
  console.log(`Tabla de ${base}`.blue);
  console.log('++++++++++++++++++++++++++++++'.green);


  for (let i = 1; i <= limite; i++) {
    console.log(` ${base} * ${i} = ${base * i}\n`);
  }

}


let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    let data = "";
    for (let i = 1; i <= limite; i++) {
      data += ` ${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`tabla-${base}-al-${limite}.txt`);
    });
  });
};
//exportar la funcion o funciones para que lo lea
module.exports = { crearArchivo, listarTabla };
