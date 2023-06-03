import formArea from '../../tasks/dom/task-form-dom';
import createTaskItem from '../../tasks/dom/task-dom';
import './inbox-dom.scss';

const createInboxList = (element) => {
  // removes imbox list if one was created before
  if (element.firstChild) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  const allTasks = JSON.parse(localStorage.getItem('allTasks'));

  console.log(allTasks);

  if (allTasks !== null && allTasks.length !== 0) {
    const tasks = JSON.parse(localStorage.getItem('allTasks'));
    for (let i = 0; i < tasks.length; i += 1) {
      element.appendChild(createTaskItem(tasks[i]));
    }
  } else {
    const emptyInbox = document.createElement('div');
    emptyInbox.id = 'empty-inbox';
    emptyInbox.innerHTML = 'There are no tasks available';
    element.appendChild(emptyInbox);
  }
};

const inboxInfo = () => {
  const element = document.createElement('div');
  element.id = 'task-list';

  createInboxList(element);

  return element;
};

const inboxPage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.id = 'inbox-page';

  element.appendChild(formArea());
  element.appendChild(inboxInfo());

  return element;
};

export {
  inboxPage,
  createInboxList,
};
