//recuerda, cuando no tiene pleca(/) es un paquete

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
//esto debe ir abajo de las opciones definidas
const argv = require('yargs')

    //debe enviar parametros, 1 nombre parametro, 2 nombre o que hace, 3 es un objeto con la config de flags o parametros que pueda recibir
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crear el archivo la tabla de multiplicar', opts)
    .help()
    .argv;
module.exports = { argv }