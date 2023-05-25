import {
  newTaskButton, showTaskForm, createTaskForm, hideTaskForm, handleSubmit,
} from '../../tasks/dom/task-dom';
import './inbox-dom.scss';

const inboxInfo = () => {
  const element = document.createElement('div')
  element.id = 'inbox-info';
  element.innerHTML = 'There are No Tasks coming up.';

  return element;
};

const taskClick = (taskButton, taskForm) => {
  taskButton.addEventListener('click', () => {
    showTaskForm(taskButton, taskForm);
  });
};

const cancelClick = (taskButton, taskForm) => {
  const formButtons = taskForm.getElementsByClassName('form-button');

  formButtons.item(0).addEventListener('click', () => hideTaskForm(taskButton, taskForm));

  formButtons.item(1).addEventListener('click', () => handleSubmit(taskButton, taskForm));
};

const inboxPage = () => {
  const element = document.createElement('div');
  element.id = 'inbox-page';

  const taskButton = newTaskButton();
  const taskForm = createTaskForm();
  element.appendChild(taskButton);
  element.appendChild(taskForm);
  taskClick(taskButton, taskForm);
  cancelClick(taskButton, taskForm);
  element.appendChild(inboxInfo());

  return element;
};

export default inboxPage;
