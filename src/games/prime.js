
import {preguntaPrime} from '../cli.js';

// numero aleatorio 
const randomNum = () => {
    return Math.floor(Math.random() * 50);
}

//formula para hallar el un número primo
const primeNum = (n) => {
    if (n === 2){
        return true;
    } else if (n <= 1) {
        return false;
    } else if (n % 2 === 0){
        return false;
    }
    
    const limit = Math.sqrt(n);
    for (let i = 2; i <= limit; i += 1){
        if(n % i === 0){
            return false
        }
    } return true;
}

const comparison = (answer, rightAnswer) => {
    return (answer === 'yes') === rightAnswer;
}

const game = (name) => {
    let wins = 0;
    let failed = false;
    console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');
    while (wins < 3){
        const num = randomNum();

        const rightAnswer = primeNum(num);
        const userAnswer = preguntaPrime(num);

        if (comparison(userAnswer,rightAnswer) === true){
            wins++;
            console.log('¡Muy Bien, Es Correcto!')
        } else {
            console.log(`'${userAnswer}' es una respuesta incorrecta. La respuesta correcta era '${primeNum(num) ? 'yes' : 'no'}'. ¡Intentémoslo de nuevo, ${name}!`);
            failed = true
            break;
        }
    }
    if (!failed) {
    console.log(`¡Felicidades, ${name}!`);
    }
}

export { game };