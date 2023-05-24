import './sidebar.scss';
import createItem from './items';
import inboxIcon from '../../../assets/icons/inbox.png';
import todayIcon from '../../../assets/icons/today.png';
import upcomingIcon from '../../../assets/icons/upcoming.png';
import projectIcon from '../../../assets/icons/project.png';

const sidebarItems = [
  {
    name: 'Inbox',
    id: 'inbox',
    icon: inboxIcon,
  },
  {
    name: 'Today',
    id: 'today',
    icon: todayIcon,
  },
  {
    name: 'Upcoming',
    id: 'upcoming',
    icon: upcomingIcon,
  },
];

const createSidebarItems = (element) => {
  sidebarItems.forEach((value) => {
    element.appendChild(createItem(value));
  });
};

const sidebar = () => {
  // const sidebarItems = ['Inbox', 'Today', 'Upcoming'];
  const element = document.createElement('div');
  element.id = 'sidebar';
  createSidebarItems(element);

  const line = document.createElement('div');
  line.id = 'line';
  element.appendChild(line);

  return element;
};

export default sidebar;
