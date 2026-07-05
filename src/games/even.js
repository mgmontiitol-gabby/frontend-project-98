
import { pregunta } from '../cli.js';

// definir que es un numero par
const isEven = (number) => {
    return (number % 2 === 0);
}

// dar numeros aleatorios .floor da un numero entero
const randomNum = () => {
    return Math.floor(Math.random() * 50);
}

// evaluacion de la respuesta del usuario
const comparison = (answer, number) => {
    return (answer === 'yes') === isEven(number);
}
// contador de las respuestas
const game = (name) => {
    let wins = 0;
    while (wins < 3) {
        const number = randomNum();
        const answer = pregunta(number);
        if (comparison(answer, number) === true){
            wins++
            console.log('¡Correcto!');
        } else {
            wins = 0
            console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${isEven(number) ? "yes" : "no"}'. ¡Intentémoslo de nuevo, ${name}!`)
        }
    }
    console.log (`¡Felicidades, ${name}!`)
}

export { isEven, randomNum, game };