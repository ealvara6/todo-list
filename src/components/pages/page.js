import { createInboxList, inboxPage } from '../inbox/dom/inbox-dom';
import { todayPage, createTaskList } from '../today/dom/today-dom';
import { upcomingPage, upcomingTaskList } from '../upcoming/dom/upcoming-dom';
import projectPage from '../projects/dom/project-page';
import { removePage, addPage, setActivePage } from './dom/page-dom';

const updatePages = () => {
  const mainBody = document.getElementById('main-body');
  const currentPage = mainBody.firstChild.id;

  const inboxList = document.getElementById('task-list');
  const todayList = document.getElementById('today-tasks');
  const upcomingList = document.getElementById('upcoming-page');

  switch (currentPage) {
    case 'inbox-page':
      createInboxList(inboxList);
      break;
    case 'today-page':
      createTaskList(todayList);
      break;
    case 'upcoming-page':
      upcomingTaskList(upcomingList);
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
        addPage(element, projectPage(item));
    }
  }
  setActivePage(item.id);
};

export {
  updatePages,
  currentPage,
};
