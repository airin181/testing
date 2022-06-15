const calculator = {
    sum: (a,b) => a+b,
    sub: (a,b) => a-b,
    div: (a,b) => a/b,
    mult: (a,b) => a*b,
}

module.exports = calculator; 
console.log(calculator.sum(2,2));