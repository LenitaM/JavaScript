/**AULA 03 DE OUT DE 2022: CONTRUÇÃO DE APP
 * Métodos (funções) de recuperação de elementos de HTML
 */
//recupera elementos do HTML a partir do nome da tag
//const todoForma = document.getElementsByName ('form') [0] //elemento que quer pegar o array
//vai ter varios tipos getElement vai pegar vários elementos de uma vez
 /**
  * Outra forma de pegar elemento pelo nome, ById pega as tags com as id desejadas, elemento por elemento
  */
 const todoForm = document.getElementById ('todo-form')
 const todos = []
/**
 * addEventListener serve para ouvir eventos de elementos HTML sempre que foram emitidos
 * JS vai enviar os eventos
 */
 todoForm.addEventListener('submit', function(evento) {
    /**
     * Cancela o comportamento padrão (tenta ser enviado) de um formulário que seria recarregamento da página tentando fazer seu envio
     */
    evento.preventDefault ()
    /**
     * Cancela a propagação do evento que foi emitido para os elementos pai, evitando outros eventos sejam emitidos. Emissão do evente ative outros eventos, sem perder as atividades realizadas, evita que o código faça as coisas antes da hora
     */
    
    evento.stopPropagation ()
    /**
     * querySelector recupera o primeiro elemento que atenda a um selector css informado
     */
    const todoInput = document.querySelector ('#todo')
    /**
     * a propriedade value é uma propriedade que representa o atributo value dos elementos de formulário do HTML, para acessarmos o valor que está dentro deles. ".value" = Mostra os valores escritos pelos usuários
     */
    todos.push(todoInput.value) 
    todoInput.value = '' //se precisar mudar o valor de algum atributo. Apagar o valor escrito pelo usuário para que não necessite recarregar a página ou apagar manualmente
    renderizarTodos()

 }) //pode chamar uma função anonima, servem para conseguir passar como parametros e guardar dentro de variáveis. Para cada função vc precisa criar uma nova função para cada tag que quiser que seja realizada no js para pegar o valor dele. 

 //querySelector (input#todo ou #todo (vai pegar todos os o nome) depende da tag section#todo-list) = vai escrever seletores css dentro dele
 /**CRIAÇÃO DE FUNÇÃO PARA RENDENRIZAR AS ATIVIDADES NA TELA */
 function renderizarTodos () {
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = '' //apagar o que tem e depois adc. Não deixa duplicar elementos  

    for (let tarefa of todos) {
        /**createElement é um método responsável por gerar novos elementos HTML dentro do JS a partir de nome das tags */

        /**COLOCANDO ELEMENTOS UM DENTRO DO OUTRO NO JS */
        const divCard = document.createElement('div') 
        //indentifica a classe para adc no JS
        divCard.classList.add('card', 'bg-warning')
        console.log(divCard) 
       
        const divCardBody = document.createElement('div')
       divCardBody.classList.add('card-body', 'd-flex', 'allign-items-center')

       const pTodoText = document.createElement('p')
       pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
       //innerText é a propriedade que informa qual o contéudo de texto que está dentro de um elemento HTML
       
       pTodoText.innerText = tarefa
       
       const buttonDelete = document.createElement('button')
       buttonDelete.classList.add('btn', 'delete-todo')
       /**
        * Descobri o índice do elemento do array
        * indexOf informa em qual indece se encontra um determinado valor dentro do seu array, se ele não achar o valor dentro do array ele retorna -1 
        */
       buttonDelete.addEventListener('click', () => {
        const index = todos.indexOf(tarefa)
        //serve para excluir um determinado valor do seu array a partir do seu índice
        todos.splice (index, 1) //tem que especificar pra excluir apenas a quantidade de valores que deseja excluir. 1 = vai excluir apenas um item. se não especificar ele vai excluir todos os itens (index)
        renderizarTodos () //para excluir ele do html tem que sempre redenrizar
       })

       const spanIcon = document.createElement ('span')
       spanIcon.classList.add('material-symbols-outlined')
       spanIcon.innerText = 'delete'
        //appendChild serve para colocar novos elementos HTML dentro de outros. Elemento filho dentro do elemento pai. Pega um elemento por vez
        /**Formas de escrever a ordem de pai (externo) para filho (interno) ou filho para pai  */
       buttonDelete.appendChild(spanIcon)
       //a ordem é importante, tem que seguir a mesma do html
       //append pode adc um ou mais elementos de uma vez HTML dentro do outro (tem que seguir a ordem HTML)

       divCardBody.append(pTodoText, buttonDelete)
       divCard.appendChild(divCardBody)

       todosListSection.appendChild(divCard)
    }
 }