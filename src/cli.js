import readlineSync from 'readline-sync';

const bienvenido = () => {
    console.log ('Hola! Bienvenido a Juegos Mentales!');
    const name = readlineSync.question('Cómo quieres que te llame?');
    console.log (`Hola! ${name}`)
    return name;
}

const pregunta = (number) => {
    console.log ('Responde "yes" si el número es par, de lo contrario responde "no".');
    console.log (`Pregunta: ${number}`)
    const respuesta = readlineSync.question ('Tu respuesta: ')
    return respuesta;
}
export default bienvenido;
export { pregunta };