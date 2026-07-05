
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
const game = () => {
    let wins = 0;
    while (wins < 3) {
        const number = randomNum();
        const answer = pregunta(number);
        if (comparison(answer, number) === true){
            wins++
        } else {
            wins = 0
        }
    }
}

export { isEven, randomNum, game };