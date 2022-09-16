//Aula 2: 16 set 2022
alert("Cógido Funcionando") 
const nomeUsuario = prompt("Olá! usuários, qual o seu nome?") 

alert("Olá, " + nomeUsuario) 

let num = Number(prompt("olá, " + nomeUsuario + " . Digite algum número, por favor"))

//OPERADORES DE INCREMENTOS = valor da variavel +1 ou -1
//const sucessor = num + 1 igual a ++
//const antecessor = num - 1

//alert("O sucerssor de " + num + sucessor)
//alert("O antecessor de " + num + antecessor)
console.log(num++) //100 //operador de pós-incremento
console.log(num) //101
console.log(++num) //102 //operador de pré-incremento

//OPERADORES DE DECREMENTOS (-- = -1)
console.log(num--) //7 //operador de pós-decremento 
console.log(num) //6
console.log(--num) //5 //operador de pré-incremento