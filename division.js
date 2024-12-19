function divide(a, b){
    if(b === 0){
        throw new Error('Devision by zero is not allowed!')
    };
    return a / b;
}

module.exports = divide;