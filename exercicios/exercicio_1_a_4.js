alert("Vamos fazer um exercicio?") 
const nomeUsuario = prompt("Olá! usuário, qual o seu nome?") 
alert("Olá, " + nomeUsuario + " , seja bem-vinde a esse exercício!")
//1 Retângulo
alert("Vamos calcular área do retângulo") 
const nomeAltura = Number(prompt ("Olá! " + nomeUsuario + ", digite o valor da altura do retângulo"))
const nomeBase = Number(prompt("Agora, digite o valor da base do retângulo"))

const valorAreaQ = nomeAltura * nomeBase 
console.log(valorAreaQ)

alert("O resultado é" + valorAreaQ)

alert("Agora , " + nomeUsuario + " , digite os números para calcular  o perímetro do retângulo")
const nomeAlturaP = Number(prompt ("Olá! " + nomeUsuario + ", digite o valor da altura do retângulo"))
const nomeBaseP = Number(prompt("Agora, digite o valor da base do retângulo"))

const valorPerimetroR = 2 * (nomeAltura + nomeBase)
console.log(valorPerimetroR)

alert("O resultado é" + valorPerimetroR)

//2 Quadrado
alert(nomeUsuario + " , agora vamos calcular a área do quadrado?")
const nomeLado = Number(prompt("Por favor , " + nomeUsuario + " , digite o valor dos lados do quadradro"))

const valorQuadradoA = nomeLado * nomeLado
console.log(valorQuadradoA)

alert("O resultado é" + valorQuadradoA)

alert(nomeUsuario + " , agora vamos calcular o perímetro do quadrado?")
const nomeLadoQ = Number (prompt("Por favor , " + nomeUsuario + " , digite o valor dos lados do quadradro"))
const nomeQuadradoP = 4 * nomeLadoQ
console.log(nomeQuadradoP)

alert("O resultado é" + nomeQuadradoP)

//3 Circículo
alert("Muito bem!" + nomeUsuario + " , vamos calcular o perímetro de um circulo?")
const nomePerimetroC = Number(prompt("Por favor , " + nomeUsuario + " , digite o valor do raio do círculo"))

const valorPerimetroC = 2 * 3.14 * nomePerimetroC
console.log(valorPerimetroC)

alert("O resultado é" + valorPerimetroC)

alert("Vamos, para a vez da área do círculo" + nomeUsuario)
const nomeAreaC = Number(prompt("Por favor , " + nomeUsuario + " , digite o valor do raio do círculo"))

const valorAreaC = 3.14 * nomeAreaC * nomeAreaC
console.log(valorAreaC)

alert("O resultado é" + valorAreaC)

//4 Triângulo
alert("Dessa vez vamos calcular o perímetro do triângulo? possuem três lados então são três valores.")
const valorA = Number(prompt("Digite o primeiro valor do lado do triângulo"))
const valorB = Number (prompt("A vez do segundo valor do lado do triângulo"))
const valorC = Number(prompt("Por fim, o terceiro valor do lado do triângulo"))

const valorPerimetroT = valorA + valorB + valorC
console.log(valorPerimetroT)

alert("O resultado é" + valorPerimetroT)





