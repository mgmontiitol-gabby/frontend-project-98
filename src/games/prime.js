
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