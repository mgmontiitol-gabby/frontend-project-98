
//signos aleatorios
const randomSign = () => {
    const sign = ['+', '-', '*'];
    const random = sign [Math.floor(Math.random() * sign.length)];
    return random;
}
//numeros aleatorios 
const randomNum = () => {
    return Math.floor(Math.random() * 50);
}
//operaciones correctas 
const operation = (num1, num2, sign) => {
    if (sign === '+'){
        return num1 + num2;
    } else if (sign === '-'){
        return num1 - num2;
    } else {
        return num1 * num2;
    }
}

const game = (name) => {
    let wins = 0;
    while (wins < 3){
        const rightAnswer = operation();
        const userAnswer = pregunta(number);
        if (Number(userAnswer) === rightAnswer){
            wins++;
            console.log('¡Muy Bien, Es Correcto!')
        } else {
            wins = 0
            console.log(`'${userAnswer}' es una respuesta incorrecta. La respuesta correcta era '${rightAnswer}'. ¡Intentémoslo de nuevo, ${name}!`)
        }
    }
}