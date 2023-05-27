import './task-dom.scss';
import editIcon from '../../../assets/icons/edit.png';
import deleteIcon from '../../../assets/icons/delete.png';
import { deleteTask } from '../tasks';

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

const createDeleteButton = (item) => {
  const element = document.createElement('button');

  const icon = new Image();
  icon.src = deleteIcon;
  element.appendChild(icon);

  element.addEventListener('click', () => deleteTask(item));

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
  buttons.appendChild(createDeleteButton(item));

  task.addEventListener('click', () => handleClick(item, task, maxInfo));

  maxInfo.appendChild(buttons);

  return task;
};

export default createTaskItem;
