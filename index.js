const sum = require('./sum')
const multiply = require("./multiplication");
const subtract = require('./subtraction');
const divide = require('./division')

             // Normal Operation

// const a = 12; b = 0;

// console.log(`Sum: ${sum(a, b)}`);
// console.log(`Substraction: ${subtract(a, b)}`);
// console.log(`Multiplication: ${multiply(a, b)}`);
// try {
//     console.log(`Division : ${divide(a, b)}`);
    
// } catch (error) {
//     console.error(error.message)
// }


              // When all values given by Terminal

let result;
const Operation = process.argv[2]
const a = parseFloat(process.argv[3])
const b = parseFloat(process.argv[4])

try {
    switch (Operation) {
        case "sum" :
            result = sum(a, b)
            break;

        case "subtract" :
            result = subtract(a, b)
            break;

        case "multiply" :
            result = multiply(a, b)
            break;

        case "divide" :
            result = divide(a, b)
            break;
        
        default:
            throw new Error ('unknown operation')
        }
        console.log(`operation is ${Operation} and value ${result}`);
        
} catch (error) {
    console.error(error.message)
}