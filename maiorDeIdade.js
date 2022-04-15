// 5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorDeIdade(ano) {
    const idade = (2022 - ano)

    if (idade >= 18) {
        return `${idade} anos - MAIOR DE IDADE.`
    } else {
        return `${idade} anos - MENOR DE IDADE.`
    }
}

console.log(maiorDeIdade(1992))
console.log(maiorDeIdade(2004))
console.log(maiorDeIdade(2020))