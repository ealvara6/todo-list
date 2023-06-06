import { addToProject, deleteFromProject } from '../projects/project';
import { updatePages } from '../pages/page';

const getAllTasks = () => JSON.parse(localStorage.getItem('allTasks'));

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
  constructor(title, dueDate, desc, prio, project, check) {
    this.id = getId();
    this.title = title;
    this.dueDate = dueDate;
    this.desc = desc;
    this.prio = prio;
    this.expand = false;
    this.project = project;
    this.check = check;
  }
}

const checkErrors = () => {
  const title = document.getElementById('title-input').value;
  // const dueDate = document.getElementById('due-date-input').value;
  const dueDate = new Date(document.getElementById('due-date-input').value);
  if (title === '') {
    alert('title is missing');
    return true;
  }
  if (Number.isNaN(dueDate.getTime())) {
    alert('please enter a due date');
    return true;
  }

  return false;
};

const addTask = () => {
  const title = document.getElementById('title-input').value;
  const dueDate = `${document.getElementById('due-date-input').value}T00:00`;
  const desc = document.getElementById('desc-input').value;
  const prio = document.getElementById('prio-input').value;
  const project = document.getElementById('projects').value;
  const check = false;

  const task = new Task(title, dueDate, desc, prio, project, check);

  let existingEntries = getAllTasks();
  if (existingEntries === null) { existingEntries = []; }
  existingEntries.push(task);
  localStorage.setItem('allTasks', JSON.stringify(existingEntries));

  addToProject(task);
  updatePages();
};

const deleteTask = (item) => {
  const taskArray = getAllTasks();
  const newTaskArray = taskArray.filter((task) => task.id !== item.id);
  localStorage.setItem('allTasks', JSON.stringify(newTaskArray));
  deleteFromProject(item);
  updatePages(item.project);
};

const handleTaskCheck = (item) => {
  const taskArray = getAllTasks();
  const TaskIndex = taskArray.findIndex((task) => task.id === item.id);
  if (taskArray[TaskIndex].check) {
    taskArray[TaskIndex].check = false;
    localStorage.setItem('allTasks', JSON.stringify(taskArray));
    return false;
  }
  taskArray[TaskIndex].check = true;
  localStorage.setItem('allTasks', JSON.stringify(taskArray));
  return true;
};

export {
  addTask,
  deleteTask,
  checkErrors,
  handleTaskCheck,
};
