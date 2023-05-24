import './sidebar.scss';
import createItem from './items';

const createSidebarItems = (element, sidebarItems) => {
  sidebarItems.forEach((value) => {
    element.appendChild(createItem(value));
  });
};

const sidebar = () => {
  const sidebarItems = ['Inbox', 'Today', 'Upcoming'];
  const element = document.createElement('div');
  element.id = 'sidebar';
  createSidebarItems(element, sidebarItems);

  return element;
};

export default sidebar;
