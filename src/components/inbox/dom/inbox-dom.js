import {
  newTaskButton, showTaskForm, createTaskForm, hideTaskForm, createTaskItem,
} from '../../tasks/dom/task-dom';
import addTask from '../../tasks/tasks';
import './inbox-dom.scss';

const taskClick = (taskButton, taskForm) => {
  taskButton.addEventListener('click', () => {
    showTaskForm(taskButton, taskForm);
  });
};

const cancelClick = (taskButton, taskForm) => {
  const formButtons = taskForm.getElementsByClassName('form-button');

  formButtons.item(0).addEventListener('click', () => hideTaskForm(taskButton, taskForm));

  formButtons.item(1).addEventListener('click', () => addTask(taskButton, taskForm));
};

const createInboxList = (element) => {
  const tasks = JSON.parse(localStorage.getItem('allTasks'));
  for (let i = 0; i < tasks.length; i += 1) {
    console.log(tasks[i]);
    element.appendChild(createTaskItem(tasks[i]));
  }
};

const inboxInfo = () => {
  const element = document.createElement('div');
  element.id = 'task-list';

  if (JSON.parse(localStorage.getItem('allTasks')) !== null) {
    createInboxList(element);
  } else {
    const emptyInbox = document.createElement('div');
    emptyInbox.id = 'empty-inbox';
    emptyInbox.innerHTML = 'There are no tasks available';
    element.appendChild(emptyInbox);
  }

  return element;
};

const taskButtonSection = (element) => {
  const taskButton = newTaskButton();
  const taskForm = createTaskForm();
  element.appendChild(taskButton);
  element.appendChild(taskForm);
  taskClick(taskButton, taskForm);
  cancelClick(taskButton, taskForm);
};

const inboxPage = () => {
  const element = document.createElement('div');
  element.id = 'inbox-page';

  taskButtonSection(element);
  element.appendChild(inboxInfo());

  return element;
};

export default inboxPage;
