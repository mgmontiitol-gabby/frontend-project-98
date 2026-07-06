
import {preguntaprog} from '../cli.js';

const randomNum = () => {
    return Math.floor(Math.random() * (50 - 1) + 1);
}

const randomIndex = () => {
    return Math.floor(Math.random() * 10);
}

const progression = () => {
    const length = 10;
    const start = randomNum();
    const step = randomNum();
    const number = Array.from({ length }, (_ , index) => start + index * step);
    return number;
}

const hiddenIndex = (progression) => {
    const index = randomIndex();
    const guess = progression[index];
    progression[index] = '..';
    return [index, guess];
}

const game = (name) => {
    let wins = 0;
    console.log('¿Qué número falta en la progresión?');
    while (wins < 3){
        const coll = progression(); 
        const [ _, rightAnswer] = hiddenIndex(coll);
        const userAnswer = preguntaprog(coll);
        
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

export {game};