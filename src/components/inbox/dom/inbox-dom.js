import {
  newTaskButton, showTaskForm, createTaskForm, hideTaskForm,
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

const inboxInfo = () => {
  const element = document.createElement('div');
  element.id = 'inbox-info';

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
