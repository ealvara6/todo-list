import header from '../header/header';
import mainContent from '../main-content/mainContent';

const container = () => {
  const element = document.createElement('div');
  element.id = 'container';

  element.appendChild(header());
  element.appendChild(mainContent());

  return element;
};

export default container;
