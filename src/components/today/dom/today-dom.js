import './today-dom.scss';
import compareAsc from 'date-fns/compareAsc';
import createTaskItem from '../../tasks/dom/task-dom';

const todayHeader = () => {
  const element = document.createElement('div');
  element.id = 'today-header';
  element.classList.add('header');
  element.innerHTML = 'Today Page';

  return element;
};

const createTaskList = (element) => {
  // removes imbox list if one was created before
  if (element.firstChild) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  const tasksArray = JSON.parse(localStorage.getItem('allTasks'));

  const tasks = tasksArray.filter((task) => {
    const taskDate = new Date(task.dueDate);
    if (compareAsc(todayDate, taskDate) === 0) {
      return true;
    }
    return false;
  });

  if (tasks !== null && tasks.length !== 0) {
    tasks.forEach((task) => {
      element.appendChild(createTaskItem(task));
    });
  } else {
    const emptyTasks = document.createElement('div');
    emptyTasks.innerHTML = 'No tasks for today';
    element.appendChild(emptyTasks);
  }
};

const todayTasks = (element) => {
  const tasksElement = document.createElement('div');
  tasksElement.id = 'today-tasks';

  createTaskList(tasksElement);

  element.appendChild(tasksElement);
};

const todayPage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.id = 'today-page';

  const header = todayHeader();
  element.appendChild(header);

  todayTasks(element);

  return element;
};

export {
  todayPage,
  createTaskList,
};
