const currentDate = new Date();

const options = {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric'
};

const formattedDate = currentDate.toLocaleDateString('en-IN', options);

document.querySelector('.current-date').textContent = `Today - ${formattedDate}`;

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);

  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  };

  return date.toLocaleDateString('en-IN', options);
}

let toDoList = [
  {name: 'Clean the laptop, organize important files, and back up everything to cloud storage', dueDate: '2026-11-09'},
  {name: 'Revise JavaScript concepts', dueDate: '2026-11-05'},
  {name: 'Clean and organize your desk', dueDate: '2026-11-26'},
  {name: 'Renew subscriptions', dueDate: '2027-02-15'},
  {name: "Practice 3 LeetCode problems", dueDate: '2026-11-06'},
];

renderToDoList();

function addTask() {

  const inputElement = document.querySelector('.name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  if (name.trim() === '' || dueDate === '') {
    return;
  }

  toDoList.push({
    name, 
    dueDate
  });
  
  inputElement.value = '';
  dateInputElement.value = '';

  renderToDoList();
}

function renderToDoList() {
    const todoListElement = document.querySelector('.todo-list');

  if (toDoList.length === 0) {
    todoListElement.innerHTML =
      '<p class="empty-message">No tasks yet. Add one!</p>';
    return;
  }

  let todoListHTML = '';

  for (let i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];

    const { name, dueDate } = todoObject;

    const html = `
      <div class="todo-list-box">
        <div class="todo-name">${name}</div>
        <div class="todo-due-date">${formatDate(dueDate)}</div>
        <button onclick="removeTask(${i});"
          class="remove-button">Remove</button>
      </div>`;

    todoListHTML += html;
  }

  todoListElement.innerHTML = todoListHTML;

}

function removeTask(i) {
  toDoList.splice(i, 1);
  setTimeout( () => {
    renderToDoList();}, 200);
}