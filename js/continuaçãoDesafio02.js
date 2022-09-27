/** AULA 08 26 DE SET DE 2022: MÉTODOS DE ARRAYS
 */

const qtdProdutos = parseInt(prompt('Informe a quantidade de produtos')) 

const precosProdutos = []

for (let i = 0; i < qtdProdutos; i++) {
    let preco = parseFloat(prompt('Informe o valor do produto' + (i + 1)))
    //pegar o valor e adiciona-lo no final do seu array
    precosProdutos.push(preco) //utlizando o push para tirar o i, não precisar se preocupar com o tamanho do array    
}

/** */

let soma = 0

for (let preco of precosProdutos) {
    soma += preco 
} 

alert(`O preço final a pagar é de ${soma}`)

