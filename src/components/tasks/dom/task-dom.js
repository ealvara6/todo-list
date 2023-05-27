import './task-dom.scss';
import plusIcon from '../../../assets/icons/plus.png';
import editIcon from '../../../assets/icons/edit.png';
import deleteIcon from '../../../assets/icons/delete.png';

const showTaskForm = (taskButton, taskForm) => {
  taskButton.style.display = 'none';
  taskForm.style.display = 'grid';
};

const hideTaskForm = (taskButton, taskForm) => {
  taskButton.style.display = 'grid';
  taskForm.style.display = 'none';
};

const handleSubmit = (taskButton, taskForm) => {
  hideTaskForm(taskButton, taskForm);
  const title = document.getElementById('title-input');
  console.log(title.value);
};

const handleClick = (item, task, maxInfo) => {
  if (!item.expand) {
    task.style.height = '150px';
    task.appendChild(maxInfo);
    item.expand = true;
  } else {
    task.style.height = '70px';
    task.removeChild(maxInfo);
    item.expand = false;
  }
};

const createEditButton = () => {
  const element = document.createElement('button');

  const icon = new Image();
  icon.src = editIcon;
  element.appendChild(icon);

  return element;
};

const createDeleteButton = () => {
  const element = document.createElement('button');

  const icon = new Image();
  icon.src = deleteIcon;
  element.appendChild(icon);

  return element;
};

const createTaskForm = () => {
  const element = document.createElement('form');
  element.classList.add('task-form');
  element.style.display = 'none';

  const title = document.createElement('div');
  title.id = 'form-title';
  title.classList.add('form-input');

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title-input');
  titleLabel.innerHTML = 'Title: ';
  title.appendChild(titleLabel);

  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.id = 'title-input';
  title.appendChild(titleInput);
  element.appendChild(title);

  const dueDate = document.createElement('div');
  dueDate.id = 'due-date';
  dueDate.classList.add('form-input');

  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute('for', 'due-date-input');
  dueDateLabel.innerHTML = 'Due Date:';
  dueDate.appendChild(dueDateLabel);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('name', 'due-date');
  dueDateInput.id = 'due-date-input';
  dueDate.appendChild(dueDateInput);
  element.appendChild(dueDate);

  const desc = document.createElement('div');
  desc.id = 'desc';
  desc.classList.add('form-input');

  const descLabel = document.createElement('label');
  descLabel.setAttribute('for', 'desc');
  descLabel.innerHTML = 'Description: ';
  desc.appendChild(descLabel);

  const descInput = document.createElement('textarea');
  descInput.setAttribute('name', 'desc');
  descInput.id = 'desc-input';
  desc.appendChild(descInput);
  element.appendChild(desc);

  const prio = document.createElement('div');
  prio.id = 'prio';
  prio.classList.add('form-input');

  const prioLabel = document.createElement('label');
  prioLabel.setAttribute('for', 'prio');
  prioLabel.innerHTML = 'Priority';
  prio.appendChild(prioLabel);

  const options = ['low', 'medium', 'high'];
  const prioInput = document.createElement('select');
  prioInput.id = 'prio-input';
  options.forEach((item) => {
    const option = document.createElement('option');
    option.setAttribute('value', item);
    option.innerHTML = item;
    prioInput.append(option);
  });
  prio.appendChild(prioInput);
  element.appendChild(prio);

  const buttons = document.createElement('div');
  buttons.id = 'buttons';

  const cancelButton = document.createElement('button');
  cancelButton.id = 'cancel-button';
  cancelButton.classList.add('form-button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.innerHTML = 'Cancel';
  buttons.appendChild(cancelButton);

  const submitButton = document.createElement('button');
  submitButton.id = 'submit-button';
  submitButton.setAttribute('type', 'submit');
  submitButton.classList.add('form-button');
  submitButton.innerHTML = 'Submit';
  buttons.appendChild(submitButton);
  element.appendChild(buttons);

  return element;
};

const createTaskItem = (item) => {
  const task = document.createElement('div');
  task.classList.add('task');

  const minInfo = document.createElement('div');
  minInfo.classList.add('min-info');

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.innerHTML = item.title;
  minInfo.appendChild(title);

  const titleHeader = document.createElement('div');
  titleHeader.classList.add('title-header', 'task-header');
  titleHeader.innerHTML = 'Name';
  minInfo.appendChild(titleHeader);

  const dueDate = document.createElement('div');
  dueDate.classList.add('task-due-date');
  dueDate.innerHTML = item.dueDate;
  minInfo.appendChild(dueDate);

  const dueDateHeader = document.createElement('div');
  dueDateHeader.classList.add('due-date-header', 'task-header');
  dueDateHeader.innerHTML = 'Due Date';
  minInfo.appendChild(dueDateHeader);

  const prio = document.createElement('div');
  prio.classList.add('task-prio');
  prio.innerHTML = item.prio;
  minInfo.appendChild(prio);

  const prioHeader = document.createElement('div');
  prioHeader.classList.add('prio-header', 'task-header');
  prioHeader.innerHTML = 'Priority';
  minInfo.appendChild(prioHeader);
  task.appendChild(minInfo);

  const maxInfo = document.createElement('div');
  maxInfo.classList.add('max-info');

  const descHeader = document.createElement('div');
  descHeader.classList.add('desc-header', 'task-header');
  descHeader.innerHTML = 'Details';
  maxInfo.appendChild(descHeader);

  const desc = document.createElement('div');
  desc.classList.add('task-desc');
  desc.innerHTML = item.desc;
  maxInfo.appendChild(desc);

  const buttons = document.createElement('div');
  buttons.classList.add('task-buttons');
  buttons.appendChild(createEditButton());
  buttons.appendChild(createDeleteButton());

  task.addEventListener('click', () => handleClick(item, task, maxInfo));

  maxInfo.appendChild(buttons);

  return task;
};

const newTaskButton = () => {
  const element = document.createElement('button');
  element.classList.add('task-button');

  const icon = new Image();
  icon.src = plusIcon;
  element.appendChild(icon);

  const title = document.createElement('div');
  title.innerHTML = 'Add New Task';
  element.appendChild(title);

  return element;
};

export {
  newTaskButton,
  showTaskForm,
  createTaskForm,
  hideTaskForm,
  handleSubmit,
  createTaskItem,
};
