/* 3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  - Se a media for igual ou maior que 7 - Aprovado
  - Se a media for maior e igual a cinco e menor que 7 - Recuperação
  - Se a media for menor que 5 - Reprovado */

  function mediaDoAluno(a, b, c) {
    
    const media = (a + b + c) / 3

    if (media >= 7) {
        return `Média ${media.toFixed(1)}: Aprovado.`
    } else if (media >=5 && media < 7) {
        return `Média ${media.toFixed(1)}: Recuperação.`
    } else {
        return `Média ${media.toFixed(1)}: Reprovado.`
    }
}

console.log(mediaDoAluno(3, 4, 5))
console.log(mediaDoAluno(6, 7, 5))
console.log(mediaDoAluno(10, 7, 8))