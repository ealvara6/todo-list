import { addToProject } from '../projects/project';
import { updatePages } from '../pages/page';

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
  constructor(title, dueDate, desc, prio, project) {
    this.id = getId();
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
    this.prio = prio;
    this.expand = false;
    this.project = project;
  }
}

const checkErrors = () => {
  const title = document.getElementById('title-input').value;
  // const dueDate = document.getElementById('due-date-input').value;
  const dueDate = new Date(document.getElementById('due-date-input').value);
  const todayDate = new Date();
  if (title === '') {
    alert('title is missing');
    return true;
  }
  if (dueDate === '') {
    alert('please enter a due date');
    return true;
  }
  if (dueDate.getDay() < todayDate.getDay()) {
    alert('please enter a valid due date');
    return true;
  }

  return false;
};

const addTask = () => {
  const title = document.getElementById('title-input').value;
  const dueDate = document.getElementById('due-date-input').value;
  const desc = document.getElementById('desc-input').value;
  const prio = document.getElementById('prio-input').value;
  const project = document.getElementById('projects').value;

  const task = new Task(title, dueDate, desc, prio, project);

  let existingEntries = JSON.parse(localStorage.getItem('allTasks'));
  if (existingEntries === null) { existingEntries = []; }
  existingEntries.push(task);
  localStorage.setItem('allTasks', JSON.stringify(existingEntries));

  addToProject(task);
  updatePages();
};

const deleteTask = (item) => {
  const taskArray = JSON.parse(localStorage.getItem('allTasks'));
  const newTaskArray = taskArray.filter((task) => task.id !== item.id);
  localStorage.setItem('allTasks', JSON.stringify(newTaskArray));
  updatePages();
};

export {
  addTask,
  deleteTask,
  checkErrors,
};
