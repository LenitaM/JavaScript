/**
 * Crie um algoritmo para ler N números, some-os e faça a média entre os números
 */

 let arr = []
 let contador = Number(prompt("Digite um valor"))
 for (i = 1; i <= contador; i++) {
     arr.push(Number(prompt(`Digite a entrada número ${i}:`))) 
 }
 let total = arr.reduce((total, currentElement) => total + currentElement)
 let media = total / contador
 alert(media)

 //estudar arr.reduce , currentElement