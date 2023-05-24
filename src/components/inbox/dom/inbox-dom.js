import newTaskButton from '../../tasks/dom/task-dom';
import './inbox-dom.scss';

const inboxPage = () => {
  const element = document.createElement('div');
  element.id = 'inbox-page';

  element.appendChild(newTaskButton());

  return element;
};

export default inboxPage;
