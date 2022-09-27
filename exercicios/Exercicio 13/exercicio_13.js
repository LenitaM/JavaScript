// AULA 08 26 DE SET 2022 - Atidades dadas na sexta-feira aula 07

// 1º CRIAR UM NOVO ARRAY
const nums = []

//Criar um loop que execute 6 vezes
/**For = usado quando vc sabe a quantidade de vezes que vc quer repetir e o While quando vc não sabe */
for (let i = 1; i <= 6; i++) {
    const n = parseInt(prompt(`Digite o ${i}º número`)) // se começar com let i = 1 fosse let i = 0 dai teria que ter $ {i + 1}
    nums.push(n)
} // i = 1 a condição tem que ser < 6 pq a gente excluiu o zero

//separar os pares dos impares
const pares = []
const impares = []

//percorrer o array com os números informados
//for of: cria uma variável que guardará os valores de cada posição do array
//o array que iremos percorrer
//for of = faz o loop de maneira mais simples
for (let numero of nums) {

    /**
     * Separa os valores pares dos impares 
     * Colocando cada valor no seu respectivo array
     */
if (numero % 2 == 0) {
    pares.push (numero) //(n pares são divisiveis por 2, para saber os pares só o resto da divisão com 2 ser igual a 0) // % = resto da divisão
} else {
    impares.push (numero)
}
}  
alert(`Nós temos ${pares.length} valores pares; ${pares.join(',')}`) //length mostra a quantidade de valores que tem uma variável join mostra todos os valores separadores por uma string
alert(`Nós temos ${impares.length} valores ímpares; ${impares.join(',')}`)
