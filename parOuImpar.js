// 4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parOuImpar(numero) {
    
    if (numero % 2 == 0) {
        return `O número ${numero} é PAR.`
    } else {
        return `O número ${numero} é ÍMPAR.`
    }
}

console.log(parOuImpar(2))
console.log(parOuImpar(1))