import './mainBody.scss';
import { inboxPage } from '../../inbox/dom/inbox-dom';
import { todayPage } from '../../today/dom/today-dom';
import upcomingPage from '../../upcoming/dom/upcoming-dom';

const mainBody = () => {
  const element = document.createElement('div');
  element.id = 'main-body';

  element.appendChild(inboxPage());

  return element;
};

export default mainBody;
