/** AULA 10: 27 DE SET DE 2022: OBJETOS EM JAVASCRIPT
 * 
 * Objetos são representações do mundo real, podendo representar estruturas mais complexas. Sendo assim, objeto é uma estrurtura que permite organizar dados na forma de *chave valor* ex: let nome = 'Paulo' 
 * 
 */

//para criar objeto usas chaves e dentro dela vai ter valor
let pessoa = {
    //os nomes dos objetos são chamados de propriedade ou atríbuto//
    nome: 'Felipe', //pode ser qualquer coisa como outro objeto, string, array, número, boelana, métodos.
    idade: '23', //sempre tem que terminar a sentaça dos objetos com vírgula
    cpf: '123.123.123-12',
    altura: 175,
    endereco: {
        rua: 'Rua Soledad',
        numero: 456,
        estado: 'BH',
        complemento: 'Sem complemento',
        cep: '123000-000',
    }, // cria subpobjetos dentro do objeto endereço, para terminar o objeto endereco deve terminar com vírgula tb
    solteiro: true,
    habilidades: ['React', 'Java', 'JavaScript', 'Golang', 'Rust'],
    cumprimentar () {console.log(`Olá, tudo bem? Meu nome é ${this.nome}`)
    /**Estrutura de um método:
     * Métodos são usados para automatizar os processos de trabalho
     * Quando eu desejo referenciar o mesmo objeto dentro dele mesmo, eu utilizao a chave `this.`
     * Dentro do método vc pode acessar qualquer valor declarado nos objetos. This = representa todos os métodos que o objeto declarado possuí 
     */
} 
} 
console.log(pessoa)
//Quiser pegar informações especificas: vai de camadas em camadas
console.log(pessoa.habilidades[2]) 
console.log(pessoa.endereco.estado) //quiser acessar informações dos subobjetos dentro dos objetos
//se não quiser mostra no console só usar pessoa.endereco.estado//
pessoa.cumprimentar() //cumprimentar vai ta em roxo para mostrar que é método, sem parenses só mostra que tem ele, mas não apresenta. Ela vai apresentar os valores que foram postos no método cumprimentar().

pessoa.nome = 'Pablo Escobar' //altera os valores do objeto
pessoa.cumprimentar ()

pessoa.habilidades.push('Angular') //adiciona valores nos objetos   
console.log(pessoa.habilidades) 
console.log(pessoa['cpf']) //outra forma de procurar propriedades dentro dos objetos

console.log(pessoa.endereco.rua)

pessoa.endereco.rua='Rua Dezessete de Setembro'

/** COMO TER OS MESMO VALORES EM DOIS OBJETOS DIFERENTES: DESTRUCTURING
 * como se criasse uma branch nova, mas sem alterar a main. os três pontos são um operador chamado Destructuring, que cria um novo objeto sem interferir nos atributos/propriedades do principal  
 * ex: endereco {...end}.
 * let end = {
 * rua: 'Rua',
        numero: 456,
        estado: 'BH',
        complemento: 'Sem complemento',
        cep: '123000-000',
 * }
        let pessoa = {
            enedereco {...end} -> assim muda só esse ponto do objeto, mas não altera a main
        }
 */







/**
 * Vc pode fazer outro objeto com a parte de endereço assim: 
 * let end = {
 *  rua: 'Rua',
        numero: 456,
        estado: 'BH',
        complemento: 'Sem complemento',
        cep: '123000-000',
 * }
        Assim cria-se dois objetos. As funções dentro do objeto chama-se de método, porém funções = métodos. */
