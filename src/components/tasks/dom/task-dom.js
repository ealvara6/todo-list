import './task-dom.scss';
import '../../modal/modal.scss';
import format from 'date-fns/format';
import editIcon from '../../../assets/icons/edit.png';
import deleteIcon from '../../../assets/icons/delete.png';
import unchecked from '../../../assets/icons/unchecked.png';
import checked from '../../../assets/icons/checked.png';
import { deleteTask, handleTaskCheck, handleEdit, checkErrors } from '../tasks';
import { projectList } from './task-form-dom';
import { openModal, closeModal } from '../../modal/modal';

const editModalContent = (item, modal) => {
  const element = document.createElement('form');
  element.classList.add('edit-modal-form');

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
  titleInput.defaultValue = item.title;
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
  dueDateInput.setAttribute('value', format(new Date(item.dueDate), 'yyyy-MM-dd'));
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
  descInput.defaultValue = item.desc;
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
  options.forEach((expr) => {
    const option = document.createElement('option');
    option.setAttribute('value', expr);
    if (expr === item.prio) {
      option.selected = true;
    }
    option.innerHTML = expr;
    prioInput.append(option);
  });
  prio.appendChild(prioInput);
  element.appendChild(prio);

  const modalButtons = document.createElement('div');
  modalButtons.classList.add('modal-buttons');

  const close = document.createElement('div');
  close.classList.add('modal-button');
  close.innerHTML = 'Close';
  close.addEventListener('click', () => closeModal(modal));
  modalButtons.appendChild(close);

  const save = document.createElement('div');
  save.classList.add('modal-button');
  save.innerHTML = 'Save';
  save.addEventListener('click', () => {
    const itemId = item.id;
    const titleValue = titleInput.value;
    const dueDateValue = dueDateInput.value;
    const descValue = descInput.value;
    const prioValue = prioInput.value;

    handleEdit(itemId, titleValue, dueDateValue, descValue, prioValue);
    closeModal(modal);
  });
  modalButtons.appendChild(save);

  element.appendChild(modalButtons);

  return element;
};

const handleClick = (item, task, maxInfo) => {
  // minimizes and expands task object to show additional information
  if (!item.expand) {
    task.style.height = 'min-content';
    task.appendChild(maxInfo);
    item.expand = true;
  } else {
    task.style.height = '70px';
    task.removeChild(maxInfo);
    item.expand = false;
  }
};

const createEditModal = (item) => {
  const modal = document.createElement('div');
  modal.id = 'edit-modal';
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const header = document.createElement('div');
  header.classList.add('modal-header');
  header.innerHTML = 'Edit Task';
  modalContent.appendChild(header);

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.appendChild(editModalContent(item, modal));
  modalContent.appendChild(modalBody);

  modal.appendChild(modalContent);

  return modal;
};

const createEditButton = (item) => {
  const element = document.createElement('button');

  const icon = new Image();
  icon.src = editIcon;
  element.appendChild(icon);

  element.addEventListener('click', (e) => {
    e.stopPropagation();
    const editModal = createEditModal(item);
    document.body.appendChild(editModal);
    openModal(editModal);
  });

  return element;
};

const createDeleteButton = (item) => {
  const element = document.createElement('button');

  const icon = new Image();
  icon.src = deleteIcon;
  element.appendChild(icon);

  element.addEventListener('click', (e) => {
    e.stopPropagation();
    deleteTask(item);
  });

  return element;
};

const createCheckButton = (item) => {
  const element = document.createElement('button');
  const title = document.createElement('div');
  title.classList.add('task-check');

  const uncheckedIcon = new Image();
  uncheckedIcon.src = unchecked;

  const checkedIcon = new Image();
  checkedIcon.src = checked;

  if (item.check) {
    element.appendChild(checkedIcon);
  } else {
    element.appendChild(uncheckedIcon);
  }

  element.addEventListener('click', (e) => {
    e.stopPropagation();
    if (handleTaskCheck(item)) {
      element.removeChild(element.firstChild);
      element.appendChild(checkedIcon);
    } else {
      element.removeChild(element.firstChild);
      element.appendChild(uncheckedIcon);
    }
  });

  return element;
};

const createTaskItem = (item) => {
  const task = document.createElement('div');
  task.classList.add('task');
  task.id = item.id;

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
  dueDate.innerHTML = format(new Date(item.dueDate), 'MM/dd/yyyy');
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

  const projectTitle = document.createElement('div');
  projectTitle.classList.add('task-header');
  projectTitle.innerHTML = 'Project';
  maxInfo.appendChild(projectTitle);

  const project = document.createElement('div');
  project.classList.add('project');
  project.innerHTML = item.project;
  maxInfo.appendChild(project);

  const buttons = document.createElement('div');
  buttons.classList.add('task-buttons');
  buttons.appendChild(createCheckButton(item));
  buttons.appendChild(createEditButton(item));
  buttons.appendChild(createDeleteButton(item));

  task.addEventListener('click', () => handleClick(item, task, maxInfo));

  maxInfo.appendChild(buttons);

  return task;
};

export default createTaskItem;
