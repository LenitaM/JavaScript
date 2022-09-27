//AULA 5: 20 DE SETEMBRO DE 2022
// Delimitação de Strings 

const aspasSimples="Olá,\nmundo"
// console.log(aspasSimples)

// caracteres de escapa

const aspasDuplas = "Olá eu sou o \nJavascript. Eu sou melhor que o\nPython"
console.log(aspasDuplas)
// console.log(aspasDuplas)

const textoComCrase = "Olá eu sou o Javascript. Eu sou melhor que o Python"
console.log(textoComCrase)
// console.log(textoComCrase)

// métodos das strings

const texto = 'O Javascript foi criado alguns anos após o Python. No entanto, o javascript é bem mais bacana.'

console.log(texto) //normal como foi escrito
console.log(texto.toUpperCase()) //deixa toda a frase maíuscula
console.log(texto.toLowerCase()) //deixa toda a frase mínuscula
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.')) //adiciona um texto ai feito com console.log(texto)

// console.log(texto[5], texto[17]) //exibir caracteres das palavras 
console.log(texto.substring(1, 12))

// case sensitive 
console.log(texto.replace('Javascript', 'Rust')) // substitui a primeira ocorrência da pesquisa
console.log(texto.replaceAll('Javascript', 'Kotlin'))
console.log(texto.replace(/Javascript/g, 'PHP'))
console.log(texto.replace(/Javascript/gi, 'PHP'))

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>')) //altera o arquivo.html
console.log(html.startsWith('batata')) //false

console.log(html.endsWith('</body>'))

const mensagem = "Olá, mundo"
console.log(mensagem)
console.log(mensagem.trim())

let senha = 'sonic'

console.log(senha.length)
console.log(senha.length >= 8)