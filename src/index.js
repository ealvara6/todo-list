import './assets/styles/reset.scss';
import './assets/styles/style.scss';
import container from './components/container/dom/container';

const component = () => {
  document.body.appendChild(container());
};

component();

export default component;
