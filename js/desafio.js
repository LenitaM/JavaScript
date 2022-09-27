//AULA 05 21 DE SET 2022: DESAFIO.JS, está no arquivo.txt: não lineariedade do código IF, ELSE IF E ELSE
/**
 * Formas de pagamentos:
 * métodos de pagamentos
 *em dinheiro
 *em cheque
 *no cartão
 */

/** AULA 06 // 22 DE SET 2022
 * ESTRUTURA DE REPETIÇÃO
 * 
 * while - enquanto
 * (NaN = not a number) quando tenta transformar uma coisa em número que não é numero, quando usa um parseInt/Float ou Number
 * isNaN = define se o NaN  e numero ou n (função do JS)
 */

 //recebendo o preço do produto e transformando em valor de decimal -- parseFloat = transforma a string em números decimais
 let precoProduto = parseFloat(prompt("Qual o preço do produto?")) /*R$400 = NaN*/  //prompt interage e  armazena a resposta do usuário
// `` crase quebra linha na string 
//isNan() == true não permite aceitar outra coisa a não ser número 
while (isNaN(precoProduto) == true || precoProduto <= 0) { 
    alert("O preço digitado é inválido. Por favor, informe o preço apenas com números sem carácteres especiais (letras ou acentos)")
    precoProduto = parseFloat(prompt("Qual o preço do produto?"))
} //para o usuário só poder digitar numeros *(NaN = not a number)


const mensagem = ` 
 Informe o método de pagamento:
 Digite 1 para pagamento em dinheiro
 Digite 2 para pagamento em cheque
 Digite 3 para pagamento em cartão
`
let metodoDePagamento = parseInt(prompt(mensagem)) //tem que mudar a constatante pra let se não funciona o while 

console.log(precoProduto)
console.log(metodoDePagamento)

while (isNaN(metodoDePagamento) == true|| metodoDePagamento >= 4 || metodoDePagamento <= 0) {
    alert("Você não digitou nenhuma das opção apresentadas. Por favor, repita o processo.")
    metodoDePagamento = parseInt(prompt(mensagem))   
}
/**
 * Condições de pagamento:
 * 1 à vista em dinheiro ou cheque, recebe 10% (100 - 10 = 90) de desconto
 * 2 à vista no cartão de crédito, recebe 15% de desconto
 * 3 em duas vezes, preço normal de etiquete sem juros
 * 4 em três vezes ou mais, preço normal de etiqueta mais juros de 10%
 */
//se o "metodoDePagamento foi 1 ou 2, significa que a pessoa possuíra um desconto de 10%" // || porta ou == comparada o conteúdo da varíavel mesmo que o tipo de váriavel seja diferente
if (metodoDePagamento == 1|| metodoDePagamento == 2) {
    const precoFinal = precoProduto * 0.9 //90% (90/100 = 0.9) convertido para decimal é 0.9
    alert(`O preço final do pagamento é ${precoFinal.toFixed(2)} reais`) //tofixed() vai limitar a quantidade de casas decimais //usa a `` é essencial para fazer a concatenação
}
//usar muitos if (sempre true) pode usar muito da processador pq ele vai testa todos os ifs *o else deixa o código mais ágil para o usuário pq ela é uma condição do else if, pode ter vários else if no cadeamento de if
/**if (metodoDePagamento == 3) {
 alert("Metodo de pagamento selecionado: cartão de crédito") } */
else if (metodoDePagamento == 3) {
    alert("Método de pagamento: cartão de crédito")
    //parseInt server para tranformar texto em número inteiro
    const parcelas = parseInt(prompt("Informe a quantidade de parcelas")) 
//não tem problema em repetir o nome da variável pq está em outro bloco, agora fora do bloco if, else if precisa ser igual. * juros = preco * 0,1
    if (parcelas == 1) {
        
        alert (`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
    }
else if (parcelas == 2) {
    const precoFinal = precoProduto
    alert (`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
}
else if (parcelas >= 3) {
    const precoFinal = precoProduto * 1.1
    alert (`O preço final de pagamento é ${precoFinal.toFixed(2)} reais`)
}
}

