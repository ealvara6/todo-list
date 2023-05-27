const getId = () => {
  let id = JSON.parse(localStorage.getItem('id'));
  if (id === null) {
    id = 0;
    localStorage.setItem('id', JSON.stringify(id += 1));
    return JSON.parse(localStorage.getItem('id'));
  }
  localStorage.setItem('id', JSON.stringify(id += 1));
  return JSON.parse(localStorage.getItem('id'));
};

class Task {
  constructor(title, dueDate, desc, prio) {
    this.id = getId(),
    this.title = title,
    this.dueDate = dueDate,
    this.desc = desc,
    this.prio = prio,
    this.expand = false;
  }

}

const checkErrors = () => {
  const title = document.getElementById('title-input').value;
  const dueDate = document.getElementById('due-date-input').value;
  if (title === '') {
    alert('title is missing');
    return true;
  }
  if (dueDate === '') {
    alert('please enter a due date');
    return true;
  }

  return false;
};

const addTask = () => {
  const title = document.getElementById('title-input').value;
  const dueDate = document.getElementById('due-date-input').value;
  const desc = document.getElementById('desc-input').value;
  const prio = document.getElementById('prio-input').value;

  const task = new Task(title, dueDate, desc, prio);

  let existingEntries = JSON.parse(localStorage.getItem('allTasks'));
  if (existingEntries === null) { existingEntries = []; }
  existingEntries.push(task);
  localStorage.setItem('allTasks', JSON.stringify(existingEntries));
  console.log(JSON.parse(localStorage.getItem('allTasks')));
};

const deleteTask = (item) => {
  console.log(item);
};

export {
  addTask,
  deleteTask,
  checkErrors,
};
