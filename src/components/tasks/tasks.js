import { hideTaskForm } from './dom/task-dom';

class Task {
  constructor(title, dueDate, desc, prio) {
    this.title = title,
    this.dueDate = dueDate,
    this.desc = desc,
    this.prio = prio
  }
}

const checkErrors = (title, dueDate) => {
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

const addTask = (taskButton, taskForm) => {
  const title = document.getElementById('title-input').value;
  const dueDate = document.getElementById('due-date-input').value;
  const desc = document.getElementById('desc-input').value;
  const prio = document.getElementById('prio-input').value;

  if (checkErrors(title, dueDate)) { return; }

  const task = new Task(title, dueDate, desc, prio);

  let existingEntries = JSON.parse(localStorage.getItem('allTasks'));
  if (existingEntries === null) { existingEntries = []; }
  existingEntries.push(task);
  localStorage.setItem('allTasks', JSON.stringify(existingEntries));
  console.log(JSON.parse(localStorage.getItem('allTasks')));

  hideTaskForm(taskButton, taskForm);
};

export default addTask;
