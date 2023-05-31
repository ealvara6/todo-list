import './mainContent.scss';
import sidebar from '../../sidebar/dom/sidebar';
import { mainBody } from '../../main-body/dom/mainBody';

const mainContent = () => {
  const element = document.createElement('div');
  element.id = 'main-content';

  element.appendChild(sidebar());
  element.appendChild(mainBody());

  return element;
};

export default mainContent;
