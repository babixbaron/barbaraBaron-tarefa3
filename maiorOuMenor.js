// 2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function maiorOuMenor(a, b) {
    if (a > b) {
        return `${a} é maior do que ${b}`
    } else if (b > a) {
        return `${b} é maior do que ${a}`
    } else {
        return `Os números são iguais.`
    }
}

console.log(maiorOuMenor(1,2))
console.log(maiorOuMenor(3,2))
console.log(maiorOuMenor(1,1))