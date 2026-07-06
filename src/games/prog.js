
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