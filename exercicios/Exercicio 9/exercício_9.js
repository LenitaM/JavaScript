/**EXERCÍCIO 09 AULA 5/: 21 DE SETEMBRO DE 2022
 * Um posto está vendendo combustíveis com a seguinte tabela de descontos:
Álcool
*Até 25 litros, desconto de 2% por litros
* Acima de 25 litros, desconto de 4% por litros
Gasolina
*Até 25 litros, desonto de 3% por litros
*Acima de 25l, desconto de 5% opr litros
 */

const mensagem = `
Informe qual combústivel deseja abastecer:
Digite 1 para álcool 
Digite 2 para gasolina`

const tipoCombustivel = parseInt(prompt(mensagem))
const qtdLitro = parseFloat(prompt(`Por favor, digite a quantidade de litro que deseja abastecer`))


const gasolina = 2.70 //preço por litro
const alcool = 1.90
//ele indica os dois pesos: Problema

if (tipoCombustivel == 1 && qtdLitro <=25 ) {
   let pagarAlcool = alcool * qtdLitro * 0.98
   alert(`O preço a pagar é ${pagarAlcool.toFixed(2)} reais`)
} else if (qtdLitro > 25 ) {
    let pagarAlcool = (alcool * qtdLitro) * 0.96
    alert(`O preço final do pagamento é ${pagarAlcool.toFixed(2)} reais`)
}
if (tipoCombustivel == 2 && qtdLitro <= 25) {
    let pagarGasolina = gasolina * qtdLitro * 0.97
    alert(`O preço a pagar é ${pagarGasolina.toFixed(2)} reais`)
} else if (qtdLitro > 25) {
    let pagarGasolina = gasolina * qtdLitro * 0.95
    alert(`O preço a pagar é ${pagarGasolina.toFixed(2)} reais`)
}




