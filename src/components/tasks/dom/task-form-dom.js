import plusIcon from '../../../assets/icons/plus.png';
import { checkErrors, addTask } from '../tasks';

const showTaskForm = (taskButton, taskForm) => {
  taskButton.style.display = 'none';
  taskForm.style.display = 'grid';
};

const hideTaskForm = (taskButton, taskForm) => {
  taskButton.style.display = 'grid';
  taskForm.style.display = 'none';
};

const handleSubmit = (taskButton, taskForm) => {
  if (checkErrors()) {
    return;
  }
  hideTaskForm(taskButton, taskForm);
  addTask();
};

const taskButtons = (taskButton, taskForm, title, dueDate) => {
  const element = document.createElement('div');
  element.id = 'buttons';

  const cancelButton = document.createElement('button');
  cancelButton.id = 'cancel-button';
  cancelButton.classList.add('form-button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.innerHTML = 'Cancel';
  cancelButton.addEventListener('click', () => hideTaskForm(taskButton, taskForm));
  element.appendChild(cancelButton);

  const submitButton = document.createElement('button');
  submitButton.id = 'submit-button';
  submitButton.setAttribute('type', 'button');
  submitButton.classList.add('form-button');
  submitButton.innerHTML = 'Submit';
  submitButton.addEventListener('click', () => handleSubmit(taskButton, taskForm, title, dueDate));
  element.appendChild(submitButton);

  return element;
};

const projectList = () => {
  const element = document.createElement('div');
  element.classList.add('form-input');

  const label = document.createElement('label');
  label.setAttribute('for', 'projects');
  label.innerHTML = 'Projects';
  element.appendChild(label);

  const projects = document.createElement('select');
  projects.id = 'projects';

  const project = document.createElement('option');
  project.value = 'Default';
  project.innerHTML = 'Default';
  projects.appendChild(project);

  element.appendChild(projects);

  return element;
};

const createTaskForm = (taskButton) => {
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

  element.appendChild(projectList());

  element.appendChild(taskButtons(taskButton, element, titleInput, dueDateInput));

  return element;
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

const formArea = () => {
  const element = document.createElement('div');
  element.classList.add('inbox-task-form');

  const taskButton = newTaskButton();
  const taskForm = createTaskForm(taskButton);

  taskButton.addEventListener('click', () => showTaskForm(taskButton, taskForm));

  element.appendChild(taskButton);
  element.appendChild(taskForm);

  return element;
};

export default formArea;
