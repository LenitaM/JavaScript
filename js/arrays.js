/**AULA 07 23 DE SET 2022: ARRAYS
 * Arrays ou Vetores é um tipo especila que te permite amarzenar diversos valores (booleana, string, number etc) em apenas um local
 * arrays dentro de outro array é uma matriz
 */
//criando um array (considerado um objeto) *maneiras de criar
/*let arr = new Array() //quero colocar na variavel arr um novo objeto *array sem tamanho*
let arr2 = new Array(5) //5 é o tamanho do array, pode ser alterado depois - vai informa pra o js que no inicio vai ser um  array com 5 valores */
/*Cada valor de um array é separado por virgula (exemplos de valores de tipos diferentes dentro do arr)*/
let arr = [10, 15, 9.8, "Eu sou um texto dentro de um array", "Olá, mundo!", true, false, false] //maneira mais curta de criar um array, a mesma coisa da linha 6 *mais usada* = dão o mesmo resultado
console.log(arr)
/**Posições de um array
 * A primeira posição de um array é 0 (zero) = 0 1 2 3 4 5 6 7 (posições)
 * na computação o valor inicial é sempre 0
 * 8 valores // 7 posições se quiser saber a posição pe sempre (quantidade - 1 = posição.)
 * (8) [10, 15, 9.8, "Eu sou um texto dentro de um array", "Olá, mundo!", true, false, false]
 */
console.log(arr[4]) //conchetes informa a posição que o array que a gente quer //Olá, mundo!
console.log(arr[5])
console.log(arr[20]) //undefined = valor indefinido, pq não existe a posição 20. Sempre que vc tentar recuperar um posição que não existe, ele informará "undefined"
console.log(arr[2], arr[7]) //vai mostrar dois valores
/**Quiser mudar o contéudo da posição do array */
console.log(arr[6]) //false
arr[6] = "Ouro texto" // arr[6] agora é "Oureo texto"
console.log(arr[6])
console.log(arr[8]) //undefined
arr[8] = 'Agora a posição 8 existe dentro do arr'
console.log(arr) // (9) [10, 15, 9.8, "Eu sou um texto dentro de um array", "Olá, mundo!", true, false, false,'Agora a posição 8 existe dentro do arr'] = a posição 8 foi criada
console.log (arr[8])

/** METODOS DE ARRAYS 08: 26 DE SET 2022 */

const lista = ['João', 'Maria', "Paulo", 'Vitória','Augusto','Fábio','Larissa']
console.log(lista) //['João', 'Maria', "Paulo", 'Vitória','Augusto','Fábio','Larissa']
lista.push('Roberta') //adc roberta na última da lista
console.log(lista) //['João', 'Maria', "Paulo", 'Vitória','Augusto','Fábio','Larissa', 'Roberta']
lista.unshift('Carolina') //adc um valor no inicio na lista
console.log(lista) //['Carolina', 'João', 'Maria', "Paulo", 'Vitória','Augusto','Fábio','Larissa', 'Roberta']
lista.pop() //remove o ultimo valor do array
console.log(lista) //Roberta foi removida = ['Carolina', 'João', 'Maria', "Paulo", 'Vitória','Augusto','Fábio','Larissa']
lista.shift() //remove o primeiro valor de um array
console.log(lista) //Remove Carolina = ['João', 'Maria', "Paulo", 'Vitória','Augusto','Fábio','Larissa',
console.log(lista.concat('Júlio')) //cria um novo array adicionando o valor novo
const novaLista = lista.concat('Júlio') //vai mostrar  a nova lista
console.log(novaLista)
console.log(lista.join('-')) //vai juntar todos os valores e gerar um valor final com uma string, join chamado de separador = João-Maria-Paulo-Vitória-Augusto-Fábio-Larissa
