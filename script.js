const corpo = document.body;

function createHeader() {
  const header = document.createElement('header');
  header.innerText = 'Minha Lista de Tarefas';
  corpo.appendChild(header);
}
createHeader()