class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

const projects = () => {
  const defaultProject = new Project('Default');
  const testProject = new Project('test project');
  localStorage.setItem('projects', JSON.stringify([defaultProject, testProject]));
};

const getProjectArray = () => {
  const projectArray = JSON.parse(localStorage.getItem('projects'));
  return projectArray;
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
  projects,
  addToProject,
  getProjectArray,
};
