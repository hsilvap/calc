
export function Calculate(operation, input, secondInput) {
    switch (operation) {
        case '+':
            return Add(input, secondInput)
        case '-':
            return Substract(input, secondInput)
        case 'x':
            return Multiply(input, secondInput)
        case '÷':
            return Divide(input, secondInput)
        default:
            throw new Error('Invalid operation')
    }
}

function Add(input, secondInput) {
    const [pInput, pSecondInput] = parseNumbers(input, secondInput)
    return pInput + pSecondInput
}

function Substract(input, secondInput) {
    const [pInput, pSecondInput] = parseNumbers(input, secondInput)
    return pInput - pSecondInput
}

function Multiply(input, secondInput) {
    const [pInput, pSecondInput] = parseNumbers(input, secondInput)
    return pInput * pSecondInput
}

function Divide(input, secondInput) {
    const [pInput, pSecondInput] = parseNumbers(input, secondInput)
    if (pSecondInput === 0)
        return 'Error'
    return pInput / pSecondInput
}

function parseNumbers(input, secondInput) {
    const pInput = parseFloat(input)
    const pSecondInput = parseFloat(secondInput)
    return [pInput, pSecondInput]
}

