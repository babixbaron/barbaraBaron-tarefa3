// 6 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function converteDiasEmHoras(dias) {
    const horas = (dias * 24)
    return `${dias} dia(s) tem ${horas} horas.` 
}

console.log(converteDiasEmHoras(1))
console.log(converteDiasEmHoras(2))