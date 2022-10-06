// VARIÁVEIS GLOBAIS
const corpo = document.body;

// PRIMEIRA QUESTÃO
function createHeader() {
  const header = document.createElement('header');
  header.innerText = 'Minha Lista de Tarefas';
  corpo.appendChild(header);
}
createHeader();
// SEGUNDA QUESTÃO
function createParagraph () {
  const paragraph = document.createElement('p');
  paragraph.id = 'funcionamento';
  paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  corpo.appendChild(paragraph);
}
createParagraph();
const form = document.createElement('form');
form.id = 'addFrases';
corpo.appendChild(form)
// TERCEIRA QUESTÃO
function createInput() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'texto-tarefa';
  form.appendChild(input);
}
createInput();
// QUARTA QUESTÃO
function createOrderedList() {
  const ol = document.createElement('ol');
  ol.id = 'lista-tarefas';
  corpo.appendChild(ol)
}
createOrderedList();
// QUINTA QUESTÃO
function createButton() {
  const button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.type = 'submit';
  button.innerText = 'Criar Tarefa';
  form.appendChild(button);
}
createButton();
const input = document.getElementById('texto-tarefa');
console.log(input.value);
const botao = document.getElementById('criar-tarefa');
let arrayDeFrases = [];
botao.addEventListener('click', gravaValores);
function gravaValores(evento) {
  evento.preventDefault();
  let texto = input.value;
  let guardado = JSON.parse(localStorage.getItem('frases')) || [];
  guardado.push(texto);
  localStorage.setItem('frases', JSON.stringify(guardado));
  input.value = "";
  escreveNoDOm();
}
const ol = document.getElementById('lista-tarefas');
function escreveNoDOm() {
  const li = document.createElement('li');
  let recebeFrases = JSON.parse(localStorage.getItem('frases'));
  let tamanho = recebeFrases.length - 1;
  li.innerText = recebeFrases[tamanho];
  ol.appendChild(li);
}
ol.addEventListener('click', function(evento) {
  selected = document.querySelector('.selected')
  if(selected === null){
  let oneItem = evento.target;
  oneItem.style.backgroundColor = 'grey';
  oneItem.className 
+= ' selected'
} else {
  selected.style.backgroundColor = 'white';
  selected.classList.remove('selected')
  let oneItem = evento.target;
  oneItem.style.backgroundColor = 'grey';
  oneItem.className += ' selected'
}
})
let verdade = true;
ol.addEventListener('dblclick', function(evento) {
   const completed = document.querySelector('.completed')
  let elemento = evento.target
  if(elemento === completed) {
    elemento.classList.remove('completed');
    elemento.style.textDecoration = 'none';
  }else{
    elemento.className += ' completed';
    elemento.style.textDecoration = 'line-through solid black';
  }
})
// Questão 10
const botao2 = document.createElement('button');
botao2.id = 'apaga-tudo';
botao2.innerText = 'LIMPAR LISTA';
corpo.appendChild(botao2);

botao2.addEventListener('click', function() {
  let children = ol.children;
  if(children.length > 0){
    for(let index = children.length - 1; index >= 0; index -= 1){
      children[index].remove()
    }
  }
})