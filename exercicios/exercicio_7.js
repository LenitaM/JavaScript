//7
alert("Vamos fazer uma conversão de Fahrenheit para Celsius") 
const nomeUsuario = prompt("Olá! usuário, qual o seu nome?") 
alert("Olá, " + nomeUsuario + " , seja bem-vinde a esse exercício!")

const tempF = Number( prompt("Digite a temperatura em fahrenheit"))
const tempC = (tempF - 32) * 0.5556

alert("A temperatura em Celsius é "  +  tempC)