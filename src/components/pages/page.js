import { createInboxList, inboxPage } from '../inbox/dom/inbox-dom';
import mainBody from '../main-body/dom/mainBody';
import todayPage from '../today/dom/today-dom';
import upcomingPage from '../upcoming/dom/upcoming-dom';
import { removePage, addPage, setActivePage } from './dom/page-dom';

const updatePages = () => {
  const element = document.getElementById('task-list');
  createInboxList(element);
};

const currentPage = (item) => {
  const element = document.getElementById('main-body');
  const page = document.getElementById('main-body').firstChild;
  removePage(element, page);
  if (item.className.includes('sidebar-item')) {
    switch (item.id) {
      case 'inbox':
        addPage(element, inboxPage());
        break;
      case 'today':
        addPage(element, todayPage());
        break;
      case 'upcoming':
        addPage(element, upcomingPage());
        break;
      default:
        console.log('there was an error');
    }
  }
  setActivePage(item.id);
  mainBody(page);
};

export {
  updatePages,
  currentPage,
};
