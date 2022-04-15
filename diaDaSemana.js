// 1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diaDaSemana(numero) {
    switch(numero) {
        case 1:
            return 'Domingo'
        case 2:
            return 'Segunda'
        case 3: 
            return 'Terça'
        case 4:
            return 'Quarta'
        case 5:
            return 'Quinta'
        case 6:
            return 'Sexta'
        case 7:
            return 'Sábado'
        default:
            return 'Não é dia de semana.'
    }
}


console.log(diaDaSemana(1))
console.log(diaDaSemana(2))
console.log(diaDaSemana(3))
console.log(diaDaSemana(4))
console.log(diaDaSemana(5))
console.log(diaDaSemana(6))
console.log(diaDaSemana(7))
console.log(diaDaSemana(8))