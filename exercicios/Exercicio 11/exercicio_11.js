alert('Vamos calcular IMC - Indice de Massa Corporal? Precisamos do seu peso e sua altura para esse exercicio')

const peso = parseFloat(prompt(`Informe seu peso`))
const altura = parseFloat(prompt(`Agora, informe sua altura`))

const imc = peso / (altura * altura)

if (imc < 18.5) {
    alert(`Seu IMC é ${imc}, você está abaixo do peso`)
}
else if (imc >= 18.5 && imc < 25) {
    alert(`Seu IMC ${imc}, você está abaixo no peso normal`)
}
else if (imc >= 25 && img <= 30) {
    alert(`Seu IMC ${imc}, você está acima do peso`)
}
else if (imc > 30) {
    alert(`Seu IMC ${imc}, você está obeso`)
}
//Problema não dá as outras opções
