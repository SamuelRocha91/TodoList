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
