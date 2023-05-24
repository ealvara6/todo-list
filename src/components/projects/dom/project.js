import './project.scss';
import plusIcon from '../../../assets/icons/plus.png';
import data from '../projects.json';

const newProjectButton = () => {
  const button = document.createElement('button');
  button.classList.add('sidebar-item');

  const icon = new Image();
  icon.src = plusIcon;
  button.appendChild(icon);

  const title = document.createElement('div');
  title.innerHTML = 'Create New Project';
  button.appendChild(title);

  return button;
};

const createProjects = (element) => {
  data.forEach((item) => {
    const project = document.createElement('button');
    project.classList.add('sidebar-item');
    project.innerHTML = item.name;

    element.appendChild(project);
  });

  element.appendChild(newProjectButton());
};

export default createProjects;
