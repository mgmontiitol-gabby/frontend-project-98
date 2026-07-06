
const randomNum = () => {
    return Math.floor(Math.random() * (50 - 1) + 1);
}

const progression = () => {
    const length = 10;
    const start = randomNum();
    const step = randomNum();
    const number = Array.from({ length }, (_ , index) => start + index * step);
    return number;
}