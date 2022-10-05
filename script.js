// VARIÁVEL GLOBAL
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
// TERCEIRA QUESTÃO
function createInput() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  corpo.appendChild(input);
}
createInput();

