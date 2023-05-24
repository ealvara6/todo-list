import './header.scss';
import logo from '../../../assets/icons/to-do-list.png';

const header = () => {
  const element = document.createElement('div');
  element.id = 'header';

  const icon = new Image();
  icon.src = logo;
  icon.id = 'logo';
  element.appendChild(icon);

  const title = document.createElement('div');
  title.id = 'title';
  title.innerHTML = 'TO-DO LIST';
  element.appendChild(title);

  return element;
};

export default header;
