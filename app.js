const { argv } = require('./config/yargs');
//const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

//console.log(argv);
//base = argv._[2];
//limite = argv._[4];

switch (comando) {

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv.base);
//console.log('Limite:' + argv.limite);

// let parametro = argv[2];
//console.log(parametro);
// let base = parametro.split('=')[1];
//console.log(base);