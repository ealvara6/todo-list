import newTaskButton from '../../tasks/dom/task-dom';
import './inbox-dom.scss';

const inboxInfo = () => {
  const element = document.createElement('div')
  element.id = 'inbox-info';
  element.innerHTML = 'There are No Tasks coming up.';

  return element;
};

const inboxPage = () => {
  const element = document.createElement('div');
  element.id = 'inbox-page';

  element.appendChild(newTaskButton());
  element.appendChild(inboxInfo());

  return element;
};

export default inboxPage;
