class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

const getProjectArray = () => {
  let projectArray = JSON.parse(localStorage.getItem('projects'));
  if (projectArray === null) {
    localStorage.setItem('projects', JSON.stringify([new Project('Default')]));
    projectArray = JSON.parse(localStorage.getItem('projects'));
  }
  return projectArray;
};

const handleSubmit = (name) => {
  const newProject = new Project(name);
  const projectArray = getProjectArray();

  projectArray.push(newProject);
  localStorage.setItem('projects', JSON.stringify(projectArray));
};

const updateProjectList = (projectArray) => {
  localStorage.setItem('projects', JSON.stringify(projectArray));
};

const addToProject = (task) => {
  const projectArray = getProjectArray();
  const projectIndex = projectArray.findIndex((item) => item.name === task.project);
  projectArray[projectIndex].tasks.push(task);
  updateProjectList(projectArray);
};

const updateProject = (task) => {
  const allProjects = getProjectArray();
  const projectIndex = allProjects.findIndex((item) => item.name === task.project);
  const taskIndex = allProjects[projectIndex].tasks.findIndex((item) => item.id === task.id);

  console.log(allProjects[projectIndex]);

  allProjects[projectIndex].tasks[taskIndex].title = task.title;
  allProjects[projectIndex].tasks[taskIndex].dueDate = task.dueDate;
  allProjects[projectIndex].tasks[taskIndex].desc = task.desc;
  allProjects[projectIndex].tasks[taskIndex].prio = task.prio;

  localStorage.setItem('projects', JSON.stringify(allProjects));
};

const deleteFromProject = (task) => {
  const allProjects = getProjectArray();
  const projectIndex = allProjects.findIndex((item) => task.project === item.name);
  const taskIndex = allProjects[projectIndex].tasks.findIndex((item) => item.id === task.id);
  allProjects[projectIndex].tasks.splice(taskIndex, 1);

  localStorage.setItem('projects', JSON.stringify(allProjects));
};

export {
  addToProject,
  deleteFromProject,
  getProjectArray,
  handleSubmit,
  updateProject,
};
