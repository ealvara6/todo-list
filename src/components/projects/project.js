class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

const getProjectArray = () => {
  const projectArray = JSON.parse(localStorage.getItem('projects'));
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
  projectArray[projectIndex].tasks = task;
  updateProjectList(projectArray);
};

export {
  addToProject,
  getProjectArray,
  handleSubmit,
};
