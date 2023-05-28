class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

const projects = () => {
  const defaultProject = new Project('Default');
  localStorage.setItem('projects', JSON.stringify([defaultProject]));
};

export default projects;
