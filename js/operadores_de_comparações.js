//AULA 04 - 19 DE SETEMBRO DE 2022: OPERADORES DE COMPARAÇÃO; OPERADORES LÓGICOS; OPERADORES DE CONVERSÃO DE VALORES
//OPERADORES DE COMPARAÇÃO - COMPARAR UM VALOR COM OUTRO 
//Esses valores de comparação em booleana só podem ser true or false

//IGUALDADE (==)
const msg = "Eu sou uma mensagem"
const msg2 = "Eu sou outra mensagem"
//saber se os valores das variáveis são iguais
console.log(msg == msg2) // (false) //"=" atribuição de valores, não é usado para comparação. para comparação "==" 

let a = 78 //number (tipo)
let b = "78" //string (tipo)
//console.log(typeof a) = typeof diz o tipo de variavel
console.log(a == b) //true //O JS vai testa o contéudo da váriavel e não seu tipo, por isso da true.

// Tipos de variáveis tem Valores identicos (===) usa mais para um controle dentro do js
console.log(a === b) //false

let c = 5
c = "Olá mundo" //Em outras linguagens isso não é possível, em outras linguagens não permite colocar outros tipos de valores, tem variavel para number, string, bool
console.log(c)

//DIFERENÇA (!=)

console.log(msg != msg2) //true
console.log(a!=b)

//Saber se o TIPOS da variavel é diferente (!==)
console.log(a!==b)

a = 65 //quando a varial já ta declarada não precisa por o tipo "let" "const"
b = 30
//MAIOR OU MENOR QUE (< >)
console.log(a > b) //TRUE
console.log(a<b) // FALSE
//MAIOR OU MENOR IGUAL ( >= <=)
let e = 500
let t = 500
console.log(e >= t) //TRUE
let d = 450
let r = 300
console.log (r <= d) //TRUE
