import formArea from '../../tasks/dom/task-form-dom';
import createTaskItem from '../../tasks/dom/task-dom';
import './inbox-dom.scss';

const createInboxList = (element) => {
  const tasks = JSON.parse(localStorage.getItem('allTasks'));
  for (let i = 0; i < tasks.length; i += 1) {
    element.appendChild(createTaskItem(tasks[i]));
  }
};

const inboxInfo = () => {
  const element = document.createElement('div');
  element.id = 'task-list';
  const allTasks = JSON.parse(localStorage.getItem('allTasks'));

  if (allTasks !== null && allTasks.length !== 0) {
    createInboxList(element);
  } else {
    const emptyInbox = document.createElement('div');
    emptyInbox.id = 'empty-inbox';
    emptyInbox.innerHTML = 'There are no tasks available';
    element.appendChild(emptyInbox);
  }

  return element;
};

const inboxPage = () => {
  const element = document.createElement('div');
  element.id = 'inbox-page';

  element.appendChild(formArea());
  element.appendChild(inboxInfo());

  return element;
};

export default inboxPage;
