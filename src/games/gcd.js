
import {preguntaGcd} from '../cli.js';

// numeros aleatorios
const randomNum = () => {
    return Math.floor(Math.random() * 50);
}

//algoritmo de Euclides.

const euclides= (num1, num2) => {
    let a = num1;
    let b = num2;

    while ( b !== 0){
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

const gcd = (name) => {
    let wins = 0;
    console.log ('Encuentra el máximo común divisor de los números dados.');

    while (wins < 3){
        const num1 = randomNum();
        const num2 = randomNum();

        const rightAnswer = euclides(num1, num2);
        const userAnswer = preguntaGcd (num1, num2);

        if (Number(userAnswer) === rightAnswer){
            wins++;
            console.log('¡Muy Bien, Es Correcto!')
        } else {
            wins = 0
            console.log(`'${userAnswer}' es una respuesta incorrecta. La respuesta correcta era '${rightAnswer}'. ¡Intentémoslo de nuevo, ${name}!`)
        }
    }
    console.log (`¡Felicidades, ${name} Ganaste!`)
}

export {gcd};