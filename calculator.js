function calculator(num1, operator, num2) {
    if (operator === "+") {
        let add = num1 + num2
        return add
    }
    if (operator === "-") {
        let subtract = num1 - num2
        return subtract
    }
    if (operator === "*") {
        let multiply = num1 * num2
        return multiply
    }
    if (operator === "/") {
        let divide = num1 / num2
        return divide
    }
}

module.exports = calculator