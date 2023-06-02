import { createInboxList, inboxPage } from '../inbox/dom/inbox-dom';
import { todayPage, createTaskList } from '../today/dom/today-dom';
import upcomingPage from '../upcoming/dom/upcoming-dom';
import { removePage, addPage, setActivePage } from './dom/page-dom';

const updatePages = () => {
  const mainBody = document.getElementById('main-body');
  const currentPage = mainBody.firstChild.id;

  const inboxList = document.getElementById('task-list');
  const todayList = document.getElementById('today-tasks');

  switch (currentPage) {
    case 'inbox-page':
      createInboxList(inboxList);
      break;
    case 'today-page':
      createTaskList(todayList);
      break;
    default:
      console.log('error');
  }
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
};

export {
  updatePages,
  currentPage,
};
