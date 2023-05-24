import './container.scss';
import header from '../../header/dom/header';
import mainContent from '../../main-content/dom/mainContent';

const container = () => {
  const element = document.createElement('div');
  element.id = 'container';

  element.appendChild(header());
  element.appendChild(mainContent());

  return element;
};

export default container;
