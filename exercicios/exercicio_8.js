//8 V = π · r² · h 
alert("Vamos calcular o volume de uma lata de óleo") 
const nomeUsuario = prompt("Olá! usuário, qual o seu nome?") 
alert("Olá, " + nomeUsuario + " , seja bem-vinde a esse exercício!")

const raio = Number(prompt("Digite o raio da lata"))
const altura = Number(prompt("Digite a altura da lata de óleo"))

const volume = raio * raio * altura * 3.14

alert("O resultado do volume da lata de óleo é " + volume)