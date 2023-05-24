import './sidebar.scss';
import createItem from './items';
import createProjects from '../../projects/dom/project';
import inboxIcon from '../../../assets/icons/inbox.png';
import todayIcon from '../../../assets/icons/today.png';
import upcomingIcon from '../../../assets/icons/upcoming.png';

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
  const element = document.createElement('div');
  element.id = 'sidebar';
  createSidebarItems(element);

  const line = document.createElement('div');
  line.id = 'line';
  element.appendChild(line);

  const projectsTitle = document.createElement('div');
  projectsTitle.innerHTML = 'Projects';
  element.appendChild(projectsTitle);

  createProjects(element);

  return element;
};

export default sidebar;
