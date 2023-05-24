import './project.scss';
import data from '../projects.json';

const createProjects = (element) => {
  data.forEach((item) => {
    const project = document.createElement('button');
    project.classList.add('sidebar-item');
    project.innerHTML = item.name;

    element.appendChild(project);
  });
};

export default createProjects;
