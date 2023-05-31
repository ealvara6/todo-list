import './project.scss';
import plusIcon from '../../../assets/icons/plus.png';
import { openModal, closeModal } from '../../modal/modal';
import { handleSubmit } from '../project';
import { getProjectArray } from '../project';

const createProjectModal = () => {
  const modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const header = document.createElement('div');
  header.classList.add('modal-header');
  header.innerHTML = 'New Project';
  modalContent.appendChild(header);

  const projectName = document.createElement('div');
  projectName.classList.add('form-input');

  const projectNameLabel = document.createElement('label');
  projectNameLabel.setAttribute('for', 'project-name');
  projectNameLabel.innerHTML = 'Project Name :';
  projectName.appendChild(projectNameLabel);

  const projectNameInput = document.createElement('input');
  projectNameInput.id = 'project-name';
  projectNameInput.setAttribute('type', 'text');
  projectName.appendChild(projectNameInput);

  modalContent.appendChild(projectName);

  const modalButtons = document.createElement('div');
  modalButtons.classList.add('modal-buttons');

  const close = document.createElement('div');
  close.classList.add('modal-button');
  close.innerHTML = 'Close';
  close.addEventListener('click', () => closeModal(modal));
  modalButtons.appendChild(close);

  const submit = document.createElement('div');
  submit.classList.add('modal-button');
  submit.innerHTML = 'Submit';
  submit.addEventListener('click', () => {
    closeModal(modal);
    handleSubmit(projectNameInput.value);
  });
  modalButtons.appendChild(submit);

  modalContent.appendChild(modalButtons);

  modal.appendChild(modalContent);

  return modal;
};

const newProjectButton = () => {
  const button = document.createElement('button');
  button.classList.add('sidebar-item');

  const icon = new Image();
  icon.src = plusIcon;
  button.appendChild(icon);

  const title = document.createElement('div');
  title.innerHTML = 'Create New Project';
  button.appendChild(title);

  button.addEventListener('click', () => {
    const projectModal = document.getElementById('project-modal');
    openModal(projectModal);
  });

  return button;
};

const createProjects = (element) => {
  const projects = getProjectArray();
  projects.forEach((item) => {
    const projectButton = document.createElement('button');
    projectButton.classList.add('sidebar-item', 'sidebar-project');

    const projectName = document.createElement('div');
    projectName.innerHTML = item.name;
    projectButton.appendChild(projectName);

    element.appendChild(projectButton);
  });

  element.appendChild(newProjectButton());
};

export {
  createProjects,
  createProjectModal,
};
