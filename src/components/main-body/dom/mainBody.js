import './mainBody.scss';
import { inboxPage } from '../../inbox/dom/inbox-dom';
import { todayPage } from '../../today/dom/today-dom';

const mainBody = () => {
  const element = document.createElement('div');
  element.id = 'main-body';

  element.appendChild(todayPage());

  return element;
};

export default mainBody;
