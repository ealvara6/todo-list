import './mainBody.scss';
import { inboxPage } from '../../inbox/dom/inbox-dom';

const mainBody = () => {
  const element = document.createElement('div');
  element.id = 'main-body';

  element.appendChild(inboxPage());

  return element;
};

export default mainBody;
