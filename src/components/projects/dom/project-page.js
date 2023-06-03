import createTaskItem from '../../tasks/dom/task-dom';

const createTaskList = (tasks) => {
  const element = document.createElement('div');
  element.classList.add('task-list');
  tasks.forEach((task) => {
    element.appendChild(createTaskItem(task));
  });

  return element;
};

const projectPage = (item) => {
  console.log(item);
  const element = document.createElement('div');
  element.classList.add('project-page');
  const allProjects = JSON.parse(localStorage.getItem('projects'));
  const project = allProjects.find((obj) => obj.name === item.id);
  console.log(project);

  const title = document.createElement('div');
  title.classList.add('header');
  title.innerHTML = `${project.name} Tasks`;
  element.appendChild(title);

  element.appendChild(createTaskList(project.tasks));

  return element;
};

export default projectPage;
