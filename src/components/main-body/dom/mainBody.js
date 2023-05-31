import './mainBody.scss';
import { inboxPage } from '../../inbox/dom/inbox-dom';
import todayPage from '../../today/dom/today-dom';
import upcomingPage from '../../upcoming/dom/upcoming-dom';

const mainBody = () => {
  const element = document.createElement('div');
  element.id = 'main-body';
  element.appendChild(inboxPage());

  return element;
};

const currentPage = (item) => {
  const element = document.getElementById('main-body');
  const page = document.getElementById('main-body').firstChild;
  element.removeChild(page);
  if (item.className === 'sidebar-item') {
    switch (item.id) {
      case 'inbox':
        element.appendChild(inboxPage());
        break;
      case 'today':
        element.appendChild(todayPage());
        break;
      case 'upcoming':
        element.appendChild(upcomingPage());
        break;
      default:
        console.log('there was an error');
    }
  }
  mainBody(page);
};

export {
  mainBody,
  currentPage,
};
