import readlineSync from 'readline-sync';

const bienvenido = () => {
    console.log ('Hola! Bienvenido a Juegos Mentales!');
    const name = readlineSync.question('Cómo quieres que te llame?');
    console.log (`Hola! ${name}`);
    return name;
}

const pregunta = (number) => {
    console.log ('Responde "yes" si el número es par, de lo contrario responde "no".');
    console.log (`Pregunta: ${number}`);
    const respuesta = readlineSync.question ('Tu respuesta: ');
    return respuesta;
}

const preguntaCalc = (num1, num2, sign) => {
    console.log (`Pregunta: ${num1} ${sign} ${num2}`);
    const respuesta = readlineSync.question ('Tu respuesta: ');
    return respuesta;
}

const preguntaGcd = (num1, num2) => {
    console.log (`Pregunta: ${num1} ${num2}`);
    const respuesta = readlineSync.question ('Tu respuesta: ');
    return respuesta;
}

export default bienvenido;
export { pregunta, preguntaCalc, preguntaGcd };