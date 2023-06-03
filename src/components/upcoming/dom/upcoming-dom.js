import './upcoming-dom.scss';
import format from 'date-fns/format';
import taskDates from '../upcoming';
import createTaskItem from '../../tasks/dom/task-dom';

const dateTasks = (date, tasks) => {
  const element = document.createElement('div');
  element.classList.add('task-list');
  element.id = date;

  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = format(new Date(date), 'MM/dd/yyyy');
  element.appendChild(header);

  tasks.forEach((task) => {
    element.appendChild(createTaskItem(task));
  });

  return element;
};

const upcomingTaskList = (parent) => {
  if (parent.firstChild) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  const dates = taskDates();
  const allTasks = JSON.parse(localStorage.getItem('allTasks'));

  if (dates.length === 0) {
    const empty = document.createElement('div');
    empty.classList.add('header');
    empty.innerHTML = 'There are no upcoming tasks';
    parent.appendChild(empty);
  } else {
    dates.forEach((date) => {
      const tasks = allTasks.filter((task) => task.dueDate === date);
      parent.appendChild(dateTasks(date, tasks));
    });
  }
};

const upcomingPage = () => {
  const element = document.createElement('div');
  element.id = 'upcoming-page';
  upcomingTaskList(element);

  return element;
};

export {
  upcomingPage,
  upcomingTaskList,
};
