/**AULA 07 22 DE SET DE 2022
 * Questão
 * Crie um programa que pergunte quantos produtos um cliente pegou e depois peça para que ele informe
    o preço de cada produto. Ao recuperar possuir o valor de cada produto, faça a soma total da compra e
    informe o maior e o menor preço que foi informado.
 */
//1ª parte: recuperar a quantidade de produtos
const qtdProdutos = parseInt(prompt('Informe a quantidade de produtos')) //preço de 10 produtos

//2ª parte: ler o preço de cada produto e armazenar em um array
const precosProdutos = [] //array vazio de inicio
//3ª parte: fazer um loop para catalogar a quantidade de produtos 
/**se a variavel fosse i =1; 1 <= qtdProdutos para pegar todos os produtos */

//representa o contador//
for (let i = 0; i < qtdProdutos; i++) {
    let preco = parseFloat(prompt('Informe o valor do produto' + (i + 1)))
    precosProdutos[i] = preco //quero que omeu i = 0 receba um novo valor (de acordo a posição do array) e representa em qual posição o valor vai ser guardado a partir do valor de let preco e sempre começa com 0
    console.log(precosProdutos)
}
//como fica 'Informe a quantidade de produtos' = 10 
//'Informe o valor do produto' = [1,2,3,4,5,6,7,8,9,0] (10) o array vai ser estabelecido pela qtdProdutos e os valores pelo let preco. O nome do array é precoProdutos [i] que recebrerar os valores a partir de let preco
/**Criando outro loop para pegar a quantidade de arrays de precosProdutos */
let soma = 0
//lenght retorna a quantidade de valores que possui dentro de uma array. *enquanto i for menor que a quantidade de produtos dentro do array incremente (ele vai somar pra mim)
//for para percorrer um array inteiro
/*for (let i = 0; i < precosProdutos.length; i++) {
    const valor = precosProdutos [i]
    //soma = soma + valor
    soma += valor //(outra forma) pega o valor dela mesmo +  o valor de outro variavel
    //alert (`O preço final a pagar é de ${soma}`) //$ string só funciona com crase
 } //3, 4, 5 - vai informa a posição do preço dos produtos e a soma de acordo com seu preço 
 //para cada loop do for, o valor de 'preco' vai receber o valor de cada posição do array*/
/*--FOR OF--*/ 
//Outra maneira de percorrer de forma mais simples o array, ela vai recebr automaticamente as posições, sem precisar por incremente, condição visto acima. 
for (let preco of precosProdutos) {
    soma += preco //soma vai receber ela mesmo + o preço dos produtos soma = soma + preco
} // for of percorre todo o array sem precisar por tudo aquele rolê

alert(`O preço final a pagar é de ${soma}`)

