import readlineSync from 'readline-sync';

const bienvenido = () => {
    console.log ('Hola! Bienvenido a Juegos Mentales!');
    const name = readlineSync.question('Cómo quieres que te llame?');
    console.log (`Hola! ${name}`)
}

export default bienvenido;