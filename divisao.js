// 7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function resultadoDivisão(a, b) {
    const resultado = a / b

    if (a % b == 0) {
        return `O resultado da divisão é ${resultado}, e é um número par.`
    } else {
        return `O resultado da divisão é ${resultado.toFixed(2)}.`
    }
}

console.log(resultadoDivisão(10, 5))
console.log(resultadoDivisão(8, 3))
