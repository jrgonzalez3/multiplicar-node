//recuerda, cuando no tiene pleca(/) es un paquete
const argv = require('./config/yargs').argv;

const colors = require('colors')
//const colors = require('colors/safe')
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});


const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

//busca el primer comando, o sea la posicion cero
let comando = argv._[0]

//es una accion basado en condicion o casos
switch (comando) {
  case 'listar':
    //console.log('listar');
    listarTabla(argv.base, argv.limite);

    break;
  case 'crear':
    //console.log('crear');
    crearArchivo(argv.base, argv.limite)
      .then(archivo => {
        console.log(`Archivo creado : ${archivo.info}`);
      })
      .catch(e => console.log(e));

    break;

  default:
    console.log('comando no reconocido, posibles opciones crear, listar');

    break;
}