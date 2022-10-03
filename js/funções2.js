/** AULA 11 28 DE SET DE 2022: FUNÇÕES
 * As funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-lo em algum lugar no escopo do qual você quiser chamá-la. 
 * Toda vez que uma palavra estiver acompnhada de uma parantese é uma função. Ex: cumprimentar (parametro)
 */
//palavra-chave para criar função: function. Funções precisam ter nomes

//padrão de construção de uma função
//function + nome + parenteses + chaves.
/**PARAMETROS
 * São valores que passamos para as funções, para que elas utilizem esses valores dentro delas.
 * 
 */
//Como passar um valor como parâmetro para mostrá-lo dentro do alert
//para criar parametro: por um nome dentro do parametro. Parametro pode ser number, string, outra função qualquer coisa
//toda vez que acionar um no parametro é só separar por vírgula
//Qunado o usuário não passar o valor para o parametro,  repetir = 1 //valor padrão quando nenhum valor é passado para ele. Se escrever um valor em cumprimentar () ele vai repertir 1 vez
function cumprimentar (mensagem, repetir = 1) {
    for (let i= 1; i <= repetir; i++ ) {
    //se criar uma variavel dentro da função {} ai precisa ter var, let ou const
    //alert () = tb é uma função do js
    alert (mensagem) //pode ter concatenação (`Olá, mundo $ {mensagem}, só que fazendo prompt {}`)
    // document.write(`<p>${mensagem} </p>`) : forma de por na página do html
} //quando chamar a função cumprimentar ele vai apresentar todas as linhas de códigos da função solicitadas
}

//forma de chamar a função:
/*da forma que define os parametros, define sua ordem:
1º parametro: mensagem, 2º parametro repetir onde tem for*/
cumprimentar ('Olá, mundo!') //Quando não se passa um valor ao parametro dá undefined. 3 são a quantidade de vezes para repetir
/*cumprimentar ('Eu gosto muito do JavaScript') //agora pode dá diversos valores para a função
cumprimentar ('JavaScript sola o C#') // valores do parametro (mensagem) */

function soma(num, num2) {
   
    //abaixo do return nada vai pegar pq ele é o ultima linha do código do cadeamento de function
    return num + num2 //retorna algum valor que vc declarar
    //Outra forma de fazer:  let result = num + num2 / return result
}

function maiorValor (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    } //a partir de uma função booleana pode por dois return
}


let resultado = soma(5, 6) //11
console.log(`O valor da variável resultado é ${resultado}`)

const num1 = parseInt(prompt(`Informe o primeiro número`)) //sempre por prompt () para abrir caixa de diálogo
const num2 = parseInt(prompt(`Informe o segundo número`))

alert(`O maior número entre esses é ${maiorValor(num1, num2)}`)

/* soma (7.5, 7) //14.5
soma(2,5) //7
soma(8, 3) //11 */










