import { currentPage } from '../../pages/page';

const item = (obj) => {
  const element = document.createElement('button');
  element.id = obj.id;
  element.classList.add('sidebar-item');
  // sets inbox page as active on page reload
  if (obj.id === 'inbox') {
    element.classList.add('active');
  }

  const icon = new Image();
  icon.src = obj.icon;
  icon.classList.add('sidebar-icon');
  element.appendChild(icon);

  const title = document.createElement('div');
  title.innerHTML = obj.name;
  element.appendChild(title);

  element.addEventListener('click', () => {
    currentPage(element);
  });

  return element;
};

const createItem = (name) => item(name);

export default createItem;
