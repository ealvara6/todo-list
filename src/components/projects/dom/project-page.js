import createTaskItem from '../../tasks/dom/task-dom';

const createProjectTaskList = (tasksElement) => {
  const allProjects = JSON.parse(localStorage.getItem('projects'));
  const project = allProjects.find((obj) => obj.name === tasksElement.getAttribute('value'));

  if (tasksElement.firstChild) {
    while (tasksElement.firstChild) {
      tasksElement.removeChild(tasksElement.firstChild);
    }
  }

  if (project.tasks !== null && project.tasks.length !== 0) {
    project.tasks.forEach((task) => {
      tasksElement.appendChild(createTaskItem(task));
    });
  } else {
    const emptyTasks = document.createElement('div');
    emptyTasks.classList.add('empty-tasks');
    emptyTasks.innerHTML = 'No tasks for this project';
    tasksElement.appendChild(emptyTasks);
  }
};

const projectHeader = (project) => {
  const element = document.createElement('div');
  element.classList.add('header');
  element.innerHTML = `${project.getAttribute('value')} Tasks`;

  return element;
};

const projectTasks = (element) => {
  const tasksElement = document.createElement('div');
  tasksElement.setAttribute('value', element.getAttribute('value'));
  tasksElement.classList.add('task-list');
  tasksElement.id = 'project-tasks';

  createProjectTaskList(tasksElement);

  element.appendChild(tasksElement);
};

const projectPage = (item) => {
  const element = document.createElement('div');
  element.id = item.getAttribute('value');
  element.setAttribute('value', item.getAttribute('value'));
  element.classList.add('project-page', 'page');

  const header = projectHeader(item);
  element.appendChild(header);

  projectTasks(element);

  return element;
};

export {
  projectPage,
  createProjectTaskList,
};
