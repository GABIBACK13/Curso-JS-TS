const listaTarefas = document.querySelector('.lista-tarefas');
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');

function createLi(text) {
  let li = document.createElement('li');
  let btnApagar = document.createElement('button');
  listaTarefas.appendChild(li);
  li.innerText = `${text} `;
  li.appendChild(btnApagar);
  btnApagar.innerText = 'Apagar';
  btnApagar.classList.add('apagar');
};

function addListItem(text) {
  if (!text) {
    return
  }
  createLi(text)
};

// ---------------------- event selector ------------------------ //
document.addEventListener('click', function(e) {
  element = e.target;
  if (element.classList.contains('btn-tarefa')) {
    let text = inputTarefa.value;
    addListItem(text);
  }
  if (element.classList.contains('apagar')) {
    
  }
});