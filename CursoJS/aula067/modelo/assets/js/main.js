function ListOfTasksMAIN() {
  const listOfTasks = document.querySelector('.lista-tarefas');
  const inputTask = document.querySelector('.input-tarefa');
  const btnTask = document.querySelector('.btn-tarefa');
  
  // ------------------ function declaretaion --------------------- //
  function createLi(text) {
    let li = document.createElement('li');
    let btnApagar = document.createElement('button');
    listOfTasks.appendChild(li);
    li.innerText = `${text} `;
    li.appendChild(btnApagar);
    btnApagar.innerText = 'Apagar';
    btnApagar.classList.add('apagar');
  };
  
  function clearText() {
    inputTask.value = '';
    inputTask.focus();
  };
  
  function addListItem(text) {
    if (!text) {
      return
    }
    createLi(text);
    clearText();
    saveTasks();
  };
  
  function saveTasks() {
    let taskList = [];
    let taskListNode = listOfTasks.querySelectorAll('li');
    for (let taskLi of taskListNode) {
      let t = taskLi.innerText;
      t = t.replace('Apagar', '').trim();     //trim remove os espaços laterais
      taskList.push(t);
      let taskJSON = JSON.stringify(taskList);
      localStorage.setItem('tasks', taskJSON);
    }
  };
  
  function loadTasks() {
    try {
      const tasksJSON = localStorage.getItem('tasks');
      const tasks = JSON.parse(tasksJSON); 
      for (let task of tasks ) {
        addListItem(task);
      } 
    } catch (error) {
      return
    }
  };
  
  // ---------------------- event selector ------------------------ //
  document.addEventListener('click', function(e) {
    element = e.target;
    if (element.classList.contains('btn-tarefa')) {
      let text = inputTask.value;
      addListItem(text);
    }
    if (element.classList.contains('apagar')) {
      element.parentElement.remove();
      saveTasks();
    }
  });
  
  inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      let text = inputTask.value;
      addListItem(text);
    }
  });

  // -------------------------- action ---------------------------- //
  loadTasks();
};

// ====================== action ========================= //
ListOfTasksMAIN();
