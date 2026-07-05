
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