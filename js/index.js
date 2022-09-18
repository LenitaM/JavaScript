/** aula 1: 15 set 2022
 * variáveis no JS 
 * operadores matemáticos do JS
 * tipos primitivos
 */
// TIPOS PRIMITIVOS
// string = qualquer tipo é textos 
// boolean = true or false 
// number = qualquer tipos de numeros . sem "aspas" o pc vai entender que são números

//CONSOLE.LOG
// serve para escrever mensagens para o usuário
console.log("Hello Wold") //string
console.log(5) //number
console.log(34.6)
console.log(true) //booelan
console.log(false)

//VARIÁVEIS
//LET - VAR - CONST
//variáveis = locais na memoria onde se armazena informações que podem ser alteradas e usadas posteriormente
//LET
//let declara uma variavel, armazena um dado chamado "mensagem" = significa que vai atribuir valor "Minha mensagem" 
let mensagem = "Minha mensagem"
//quiser chamar a variavel, o console vai escrever o valor da variavel let
console.log(mensagem) // "Minha nmensagem"
mensagem = "Novo Texto" //não precisa repetir o let pq ela já foi declarada
console.log(mensagem)// "Novo Texto" pq ser modificada para outro texto

//CONST
// const (valor constante) o valor dela NUNCA pode ser mudado
//se mudar o valor da variavel const vai dá: Uncaught TypeError: Assignment to constant variable.
const pi = 3.14 /
console.log(pi) // 3.14
//const pi = 5 **não vai funcionar 
//console.log(pi) 
const a = 6
const b = a

console.log(a)
console.log(b)

//VAR
//não recomendo o seu uso devido a facilidade de modificação da variavel.
var idade = 18 // var deixa repetir a variavel duas vezes, subescreve
console.log(idade)
var idade = 30 //não pode pq uma idade já foi declarada 
console.log(idade)

//OPERADORES MATEMÁTICOS EM JAVASCRIPT
//SOMA (+)
const soma = 5 + 32
console.log(soma) //37

const soma2 = 65 + soma
console.log(soma2) //102

//console.log("45" - 2) //se for "45" + 2 = 452 aberração do JS "45" - 2 = 43 
//concatenação = junção, tranformar em uma coisa só 452

//SUBTRAÇÃO
const sub = soma - 2
console.log(sub) //3

//MULTIPLICAÇÃO (*)
const multi = soma2 * 4
console.log(multi) //408

//DIVISÃO  (/)
let divisao = multi / 2
console.log(divisao) // 204

let dim = divisao - 100
console.log(dim) // 104

//Resto da divisão (%) - para saber o resto da divisão
console.log(4 % 2) // 0
console.log(15 % 7) // 1

//EXPONENCIAÇÃO (**)
//maneira antiga
console.log(Math.pow(2,3)) 
console.log(Math.pow(3,3))
//outro método
let pot = Math.pow(3,3) //27 
console.log(pot)
//maneira atual
console.log(3**4) //81

//LÓGICA ALGEBRICA
console.log(5 + 3 * 2 / 2 - 4) // 4 
console.log(5 + 3 * 2 / (2 - 4)) // -8
console.log(10 / 5 * 4 / 2) //4
//priorização divisão ou multi depois soma ou subtração, casos de parenteses
//o código segue da direita para esquerda em caso de ter o mesmo nivel

//Aula 2: 16 set 2022

alert("Cógido Funcionando") //mostra uma mensagem para o usurários
prompt("Olá! usuário, qual o seu nome?") //assim não armazena o resultado
const nomeUsuario = prompt("Olá! usuários, qual o seu nome?") // mostra e armazena as respostas(const armazena a resposta no console)

//CONCATENAÇÃO para intereção com usuários
alert("Olá, " + nomeUsuario) //concatenação pegar textos e valores, juntar para se tornar um
prompt("Olá, " + nomeUsuario + ". Digite algum número, por favor") //precisa por os espaços para ficar adequado a separação
let num = prompt("olá, " + nomeUsuario + " . Digite algum número, por favor") // mostra a mensagen e armazena a resposta do usuários
console.log(typeof num) //typeof = retorna tipo do valor que a variavel armazena

let num = Number(prompt("olá, " + nomeUsuario + " . Digite algum número, por favor"))

//OPERADORES DE INCREMENTOS E DECREMENTOS = valor da variavel 
const sucessor = num + 1 //(ou ++)
const antecessor = num - 1 //(--)

alert("O sucerssor de " + num + sucessor)
alert("O antecessor de " + antecessor)

//OPERADORES DE PÓS E PRÉ INCREMENTOS (++ = +1)
console.log(num++) //operador de pós-incremento: vai mostrar o valor anterior da variavel depois o valor dela muda. //100
console.log(num) //101
console.log(++num) //102 //operador de pré-incremento: incrementa e depois aumenta o valor da variavel

//OPERADORES DE PÓS E PRÉ DECREMENTOS (-- = -1)
console.log(num--) //7 //operador de pós-decremento 
console.log(num) //6
console.log(--num) //5 //operador de pré-incremento