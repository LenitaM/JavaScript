alert('Vamos calcular seu peso ideal? Primeiro precisamos saber sua altura e sexo')

const mensagemSexo = `
Informe seu sexo:
Digite 1 para homem
Digite 2 para mulher
`
const sexo = parseFloat(prompt(mensagemSexo))
const altura = parseFloat(prompt(`Por favor, digite sua altura`))
 
if (sexo == 1) {
    let pesoHomem = (72.7 * altura) - 58
    alert(`Seu peso ideal é ${pesoHomem.toFixed(2)} kg`)
} else if (sexo == 2) {
    let pesoMulher = (62.1 * altura) - 44.7
    alert(`Seu peso ideal é ${pesoMulher.toFixed(2)} kg`)
}
